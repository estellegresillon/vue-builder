<template>
  <div class="text-wrapper">
    <div class="attribute-name">{{ attribute }}</div>
    <div class="attribute-value">
      <Input
        :name="attribute"
        :onChange="updateText"
        :placeholder="`Enter a ${attribute}`"
        :value="textAttribute"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Input } from "@/components/common";
import { ISection } from "@/types";

export default defineComponent({
  components: {
    Input,
  },
  props: {
    attribute: {
      required: true,
      type: String,
    },
    selectedComponent: {
      required: true,
      type: Object as PropType<ISection>,
    },
  },
  computed: {
    textAttribute() {
      return this.selectedComponent.attributes[this.attribute];
    },
  },
  methods: {
    updateText(e: { target: HTMLInputElement }) {
      const newAttr = { [this.attribute]: e.target.value };

      this.$store.dispatch("updateAttributes", {
        id: this.selectedComponent.id,
        attributes: newAttr,
      });
    },
  },
});
</script>

<style scoped>
.text-wrapper {
  margin-bottom: 20px;
}

.attribute-name {
  margin-bottom: 10px;
  text-transform: capitalize;
}
</style>
