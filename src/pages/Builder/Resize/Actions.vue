<template>
  <div class="actions-wrapper">
    <div class="action-item" @click.stop="removeComponent"><IconRemove /></div>
    <div class="action-item" @click.stop="handleSelect"><IconSettings /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { IconRemove, IconSettings } from "@/components/common";
import { ISection } from "@/types";

export default defineComponent({
  components: {
    IconRemove,
    IconSettings,
  },
  props: {
    section: {
      required: true,
      type: Object as PropType<ISection>,
    },
  },
  methods: {
    handleSelect() {
      this.$store.dispatch("selectComponent", this.section);
    },
    removeComponent() {
      this.$store.dispatch("removeComponent", this.section.id);
    },
  },
});
</script>

<style scoped>
.actions-wrapper {
  align-items: center;
  background-color: #d40c0c;
  border-radius: 3px;
  cursor: pointer;
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

.action-item {
  margin-bottom: 14px;
}

.action-item:last-child {
  margin-bottom: 0px;
}

svg {
  color: white;
  cursor: pointer;
  height: 17px;
  width: 17px;
}
</style>
