<template>
  <div class="sidebar">
    <div v-if="!selectedComponent">
      <ComponentList />
    </div>
    <div v-else>
      <Settings :selectedComponent="selectedComponent" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ComponentList from "./ComponentList/index.vue";
import Settings from "./Settings/index.vue";

export default defineComponent({
  components: {
    ComponentList,
    Settings,
  },
  computed: {
    selectedComponent() {
      return this.$store.getters.getSelectedComponent;
    },
  },
});
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
