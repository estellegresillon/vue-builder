<template>
  <div class="divider-wrapper" :style="{ 'background-color': color }" />
</template>

<script>
export default {
  props: {
    color: {
      default: "gray",
      type: String,
    },
  },
};
</script>

<style scoped>
.divider-wrapper {
  height: 5px;
  margin-bottom: 25px;
  width: 100px;
}
</style>
