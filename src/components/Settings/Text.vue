<template>
  <div>Text</div>
  <div>{{ attributeName }}</div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    attributeName: {
      type: String,
    },
    selectedComponent: {
      type: Object,
    },
  },
};
</script>
