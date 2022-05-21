<template>
  <div class="select-number-wrapper">
    <div class="attribute-name">{{ settingName }} :</div>
    <div class="attribute-value">
      <Select
        :name="settingName"
        :onChange="updateValue"
        :options="options[attribute]"
        placeholder="Select a number"
        :value="value"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Select } from "@/components/common";
import { Dictionary, ISection } from "@/types";

export default defineComponent({
  components: {
    Select,
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
        columns: "columns",
        itemCount: "number of items",
      } as Dictionary<string>,
      options: {
        columns: Array.from({ length: 4 }, (_, i) => (i + 1).toString()),
        itemCount: Array.from(
          {
            length:
              this.selectedComponent.componentLabel === "Partners" ? 6 : 16,
          },
          (_, i) => (i + 1).toString()
        ),
      },
      value: this.selectedComponent.attributes[this.attribute],
    };
  },
  computed: {
    settingName() {
      return this.name[this.attribute];
    },
  },
  methods: {
    updateValue(e: { target: HTMLInputElement }) {
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
.select-number-wrapper {
  margin-bottom: 20px;
}

.attribute-name {
  margin-bottom: 10px;
  text-transform: capitalize;
}
</style>
