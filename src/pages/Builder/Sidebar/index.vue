<template>
  <div class="sidebar">
    <div v-if="!selectedComponent" class="component-list-wrapper">
      <div
        v-for="component in components"
        :key="component.id"
        draggable="true"
        @dragstart="startDrag($event, component)"
      >
        {{ component }}
      </div>
    </div>
    <div v-else>
      <div @click="goBack">Go back to list</div>
      <Settings :selectedComponent="selectedComponent" />
    </div>
  </div>
</template>

<script>
import Settings from "./Settings.vue";

export default {
  components: {
    Settings,
  },
  computed: {
    components() {
      return this.$store.getters.getComponents;
    },
    selectedComponent() {
      return this.$store.getters.getSelectedComponent;
    },
  },
  methods: {
    goBack() {
      this.$store.dispatch("selectComponent", null);
    },
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("componentLabel", item);
    },
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #252628;
  box-shadow: 0 1px 30px 0 rgb(0 0 0 / 20%);
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  width: 250px;
  z-index: 1;
}
</style>
