<template>
  <div
    class="resize-wrapper"
    :class="{ isSelected: displayActions }"
    @click="selectComponent"
    :style="{ 'min-height': section.attributes?.height + 'px' }"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    ref="test"
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
    ></div>
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
    selectedComponent() {
      return this.$store.getters.getSelectedComponent;
    },
    displayActions() {
      return this.hover || this.selectedComponent?.id === this.section.id;
    },
    isResizable() {
      return this.section.attributes?.resizable;
    },
  },
  methods: {
    onDragStart(e) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      const resizable = this.$refs.test;

      this.initialPos = e.clientY;
      this.initialSize = resizable.offsetHeight;
    },
    dragging(e) {
      const resizable = this.$refs.test;

      if (this.initialSize && this.initialPos) {
        resizable.style.height = `${
          this.initialSize + e.clientY - this.initialPos
        }px`;
      }
    },
    onDragEnd() {
      const id = this.section.id;
      const height = this.$refs.test.style.height.slice(0, -2);
      this.$store.dispatch("updateAttributes", { id, attributes: { height } });
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
  z-index: 0;
}

.resize-wrapper.isSelected {
  z-index: 1;
}

.resize-wrapper:before {
  box-shadow: none;
  content: "";
  display: block;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
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
</style>
