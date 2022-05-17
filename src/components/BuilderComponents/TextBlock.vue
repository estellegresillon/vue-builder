<template>
  <div
    class="text-block-wrapper"
    :id="section.id"
    :style="{ height: section.attributes?.height + 'px' }"
  >
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
.text-block-wrapper {
  align-items: center;
  background-color: pink;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
