<template>
  <div
    class="button-wrapper"
    @click="onClick"
    :style="{ 'background-color': color }"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    color: {
      default: "blue",
      type: String,
    },
    onClick: {
      type: Function,
    },
    text: {
      type: String,
    },
  },
};
</script>

<style scoped>
.button-wrapper {
  border-radius: 25px;
  color: white;
  cursor: pointer;
  font-weight: bolder;
  margin: 0 auto;
  margin-top: 19px;
  padding: 12px 0;
  text-align: center;
  width: 150px;
}

.button-wrapper:hover {
  filter: brightness(85%);
}
</style>
