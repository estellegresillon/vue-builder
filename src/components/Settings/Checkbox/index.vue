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

<script>
import { CheckboxWrapper } from "./style";

export default {
  components: {
    CheckboxWrapper,
  },
  props: {
    attribute: {
      type: String,
    },
    selectedComponent: {
      type: Object,
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
};
</script>
