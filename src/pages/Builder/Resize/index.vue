<template>
  <div
    class="resize-wrapper"
    :class="{ isSelected: displayActions }"
    @click="selectComponent"
    :style="{ 'min-height': section.attributes?.height + 'px' }"
    :id="section.id"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @dragover="onDragOver"
    @dragleave="onDragLeave"
    ref="refContainer"
  >
    <Actions v-if="displayActions" :section="section" />
    <slot></slot>
    <div
      v-if="isResizable && displayActions"
      draggable="true"
      class="resize-handler"
      @drag="dragging"
      @dragstart.stop="onDragStart"
      @dragend="onDragEnd"
    />
    <div v-if="draggedOverComponent === section.id" class="drop-placeholder" />
  </div>
</template>

<script>
import Actions from "./Actions";

export default {
  props: {
    section: {
      type: Object,
    },
  },
  components: {
    Actions,
  },
  data() {
    return {
      hover: false,
      initialSize: "",
      initialPos: "",
    };
  },
  computed: {
    draggedOverComponent() {
      return this.$store.getters.getDraggedOverComponent;
    },
    displayActions() {
      return this.hover || this.selectedComponent?.id === this.section.id;
    },
    dragImage() {
      const dragImg = new Image(0, 0);
      dragImg.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

      return dragImg;
    },
    isResizable() {
      return this.section.attributes?.resizable;
    },
    selectedComponent() {
      return this.$store.getters.getSelectedComponent;
    },
  },
  methods: {
    onDragStart(e) {
      if (!this.dragImage) {
        return;
      }

      e.dataTransfer.setDragImage(this.dragImage, 0, 0);

      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      const resizable = this.$refs.refContainer;

      this.initialPos = e.clientY;
      this.initialSize = resizable.offsetHeight;
    },
    dragging(e) {
      const resizable = this.$refs.refContainer;

      if (this.initialSize && this.initialPos) {
        resizable.style.height = `${
          this.initialSize + e.clientY - this.initialPos
        }px`;
      }
    },
    onDragEnd() {
      const id = this.section.id;
      const height = this.$refs.refContainer.style.height.slice(0, -2);
      this.$store.dispatch("updateAttributes", { id, attributes: { height } });
    },
    onDragOver(e) {
      if (!this.selectedComponent) {
        const selectedItem = e.target;
        this.$store.dispatch("setDraggedOverComponent", selectedItem.id);
      }
    },
    onDragLeave() {
      this.$store.dispatch("setDraggedOverComponent", null);
    },
    selectComponent() {
      this.$store.dispatch("selectComponent", this.section);
    },
  },
};
</script>

<style scoped>
.resize-wrapper {
  align-items: center;
  cursor: grab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
}

.resize-wrapper.isSelected {
  z-index: 3;
}

.resize-wrapper:before {
  box-shadow: none;
  content: "";
  display: block;
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
}

.resize-wrapper.isSelected:before {
  box-shadow: inset 0px 0px 0px 3px #d40c0c;
}

.resize-handler {
  background-color: #d40c0c;
  bottom: -15px;
  cursor: row-resize;
  height: 16px;
  position: absolute;
  width: 16px;
}

.drop-placeholder {
  background: #e8f4ff;
  border: 1px solid #5ed2ff;
  border-radius: 5px;
  height: 200px;
  margin: 5px;
  width: calc(100% - 12px);
}
</style>
