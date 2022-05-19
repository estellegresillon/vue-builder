<template>
  <CheckboxWrapper
    ><div class="attribute-value">
      <label :htmlFor="settingName">{{ settingName }}</label>
      <input
        @change="updateValue"
        :checked="selectedComponent.attributes[attribute]"
        :id="settingName"
        type="checkbox"
      /></div
  ></CheckboxWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ISection } from "@/types";

import { CheckboxWrapper } from "./style";

export default defineComponent({
  components: {
    CheckboxWrapper,
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
  data() {
    return {
      name: {
        hasColGap: "Column gap",
        hasSectionGap: "Section gap",
        reversed: "Reversed layout",
      },
    };
  },
  computed: {
    settingName() {
      return this.name[this.attribute];
    },
  },
  methods: {
    updateValue() {
      const newValue = !this.selectedComponent.attributes[this.attribute];
      const newAttr = { [this.attribute]: newValue };

      this.$store.dispatch("updateAttributes", {
        id: this.selectedComponent.id,
        attributes: newAttr,
      });
    },
  },
});
</script>
