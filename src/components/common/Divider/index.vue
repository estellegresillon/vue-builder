<template>
  <div class="divider-wrapper" :style="{ 'background-color': color }" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    color: {
      default: "gray",
      type: String,
    },
  },
});
</script>

<style scoped>
.divider-wrapper {
  height: 5px;
  margin-bottom: 25px;
  width: 100px;
}
</style>
