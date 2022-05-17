<template>
  <div>{{ attribute }}</div>
</template>

<script>
export default {
  props: {
    attribute: {
      type: String,
    },
    selectedComponent: {
      type: Object,
    },
  },
};
</script>
