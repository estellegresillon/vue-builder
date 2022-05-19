<template>
  <div class="height-wrapper">
    <div class="attribute-name">{{ attribute }} :</div>
    <div class="attribute-value">
      <Input
        :name="attribute"
        :onChange="updateHeight"
        placeholder="300"
        type="number"
        :value="heightAttribute"
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
    heightAttribute() {
      return this.selectedComponent.attributes[this.attribute];
    },
  },
  methods: {
    updateHeight(e: { target: HTMLInputElement }) {
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
.height-wrapper {
  margin-bottom: 20px;
}

.attribute-name {
  margin-bottom: 10px;
  text-transform: capitalize;
}
</style>
