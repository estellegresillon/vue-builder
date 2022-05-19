<template>
  <div class="list-wrapper">
    <div class="list-title">Component list</div>
    <div
      class="list-item"
      v-for="component in components"
      :key="component.id"
      draggable="true"
      @dragstart="startDrag($event, component)"
    >
      {{ component }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    components() {
      return this.$store.getters.getComponents;
    },
  },
  methods: {
    startDrag(e: { dataTransfer: DataTransfer }, componentLabel: string) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("componentLabel", componentLabel);
    },
  },
});
</script>

<style scoped>
.list-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.list-title {
  margin: 30px 0 25px 0;
  text-align: center;
  width: 100%;
}

.list-item {
  border: 1px solid gray;
  border-radius: 2px;
  cursor: grab;
  font-weight: bolder;
  margin: 5px 10px;
  padding: 30px;
  text-align: center;
}

.list-item:hover {
  background-color: #36383b;
}
</style>
