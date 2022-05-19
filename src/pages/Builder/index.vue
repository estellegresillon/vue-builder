<template>
  <TopBar />
  <div class="builder-wrapper">
    <Sidebar />
    <div
      class="drop-zone"
      @drop="onDrop($event)"
      @dragover.prevent
      @dragenter.prevent
      :style="{
        'font-family': projectFont,
      }"
    >
      <div class="playground-wrapper" v-if="hasSections">
        <ProdMenu />
        <draggable
          :list="sections"
          :disabled="!enabled"
          item-key="id"
          class="playground-container"
          ghost-class="ghost"
          @start="dragging = true"
          @end="onDragEnd"
        >
          <template #item="{ element }">
            <div class="list-group-item" :class="{ 'not-draggable': !enabled }">
              <Resize :section="element">
                <component
                  :is="element.componentName"
                  isInBuilder
                  :section="element"
                ></component>
              </Resize>
            </div>
          </template>
        </draggable>
      </div>
      <h3 v-else>Add your first element.</h3>
    </div>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
import draggable from "vuedraggable";

import { ProdMenu } from "@/components/common";
import initialAttributes from "@/utils/initialAttributes";

import Resize from "./Resize";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default {
  components: {
    draggable,
    ProdMenu,
    Resize,
    Sidebar,
    TopBar,
  },
  data() {
    return {
      dragging: false,
      enabled: true,
    };
  },
  computed: {
    hasSections() {
      return this.$store.getters.getJson.length > 0;
    },
    projectFont() {
      return this.$store.getters.getProjectFont;
    },
    sections() {
      return this.$store.getters.getJson;
    },
  },
  methods: {
    onDragEnd() {
      this.dragging = false;
      this.$store.dispatch("updateJson", this.sections);
    },
    onDrop(evt) {
      const componentLabel = evt.dataTransfer.getData("componentLabel");

      this.$store.dispatch("setDraggedOverComponent", null);

      if (!componentLabel) {
        return;
      }
      const dropEl = evt.target;
      const items = [...this.sections];
      const index = items.findIndex((section) => section.id === dropEl.id);
      const attributes = initialAttributes[componentLabel];

      const newChild = {
        componentLabel,
        componentName: attributes.componentName,
        attributes: { ...attributes },
        id: uuid.v1(),
      };

      if (index >= 0) {
        items.splice(index + 1, 0, newChild);
      } else {
        items.push(newChild);
      }

      this.$store.dispatch("updateJson", items);
      this.$store.dispatch("selectComponent", newChild);
    },
  },
};
</script>

<style scoped>
.builder-wrapper {
  align-items: center;
  display: flex;
  height: calc(100vh - 70px);
  position: relative;
  width: 100%;
}

.playground-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 270px);
  overflow: scroll;
  padding-bottom: 200px;
  position: relative;
  width: 100%;
  z-index: 0;
}

.playground-container {
  width: 100%;
}

.drop-zone {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: calc(100vw - 250px);
}

.drag-el {
  margin-bottom: 10px;
  padding: 5px;
}

.ghost {
  background: #c8ebfb;
  opacity: 0.5;
}

.not-draggable {
  cursor: no-drop;
}
</style>
