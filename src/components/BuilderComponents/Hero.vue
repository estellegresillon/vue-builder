<template>
  <div class="hero-wrapper" :id="section.id">
    {{ section.componentLabel }}
  </div>
</template>

<script>
export default {
  props: {
    section: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.hero-wrapper {
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  height: 200px;
  justify-content: center;
  width: 100%;
}
</style>
