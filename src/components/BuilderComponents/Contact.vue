<template>
  <div class="contact-wrapper" :id="section.id">
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
.contact-wrapper {
  align-items: center;
  background-color: blue;
  cursor: pointer;
  display: flex;
  height: 200px;
  justify-content: center;
  width: 100%;
}
</style>
