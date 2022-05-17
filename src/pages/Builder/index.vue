<template>
  <TopBar />
  <div class="builder-wrapper">
    <Sidebar />
    <div
      class="drop-zone"
      @drop="onDrop($event)"
      @dragover.prevent
      @dragenter.prevent
    >
      <div class="playground-wrapper" v-if="hasSections">
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
import draggable from "vuedraggable";
import { uuid } from "vue-uuid";

import initialAttributes from "../../utils/initialAttributes";

import Resize from "./Resize";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default {
  name: "simple",
  display: "Simple",
  order: 0,
  components: {
    draggable,
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
    sections() {
      return this.$store.getters.getJson;
    },
    hasSections() {
      return this.$store.getters.getJson.length > 0;
    },
  },
  methods: {
    onDragEnd() {
      this.dragging = false;
      this.$store.dispatch("updateJson", this.sections);
    },
    onDrop(evt) {
      const componentLabel = evt.dataTransfer.getData("componentLabel");

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
  height: 100%;
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
  width: 100%;
}

.drag-el {
  margin-bottom: 10px;
  padding: 5px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.not-draggable {
  cursor: no-drop;
}
</style>
