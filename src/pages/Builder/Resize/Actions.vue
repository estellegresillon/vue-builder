<template>
  <div class="actions-wrapper">
    <div @click.stop="removeComponent">R</div>
    <div @click.stop="handleSelect">S</div>
  </div>
</template>

<script>
export default {
  props: {
    section: {
      type: Object,
    },
  },
  methods: {
    removeComponent() {
      this.$store.dispatch("removeComponent", this.section.id);
    },
    handleSelect() {
      this.$store.dispatch("selectComponent", this.section);
    },
  },
};
</script>

<style scoped>
.actions-wrapper {
  align-items: center;
  background-color: #d40c0c;
  border-radius: 3px;
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  padding-top: 14px;
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  z-index: 1000;
}

.actions-wrapper div {
  color: white;
  cursor: pointer;
  margin-bottom: 14px;
}

.actions-wrapper:last-child {
  margin-bottom: 0px;
}
</style>
