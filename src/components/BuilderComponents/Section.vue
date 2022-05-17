<template>
  <div class="section-wrapper" :id="section.id">
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
.section-wrapper {
  align-items: center;
  background-color: pink;
  cursor: pointer;
  display: flex;
  height: 200px;
  justify-content: center;
  width: 100%;
}
</style>
