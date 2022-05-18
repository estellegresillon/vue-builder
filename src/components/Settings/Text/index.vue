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

<script>
import { Input } from "@/components/common";

export default {
  components: {
    Input,
  },
  props: {
    attribute: {
      type: String,
    },
    selectedComponent: {
      type: Object,
    },
  },
  computed: {
    textAttribute() {
      return this.selectedComponent.attributes[this.attribute];
    },
  },
  methods: {
    updateText(e) {
      const newAttr = { [this.attribute]: e.target.value };

      this.$store.dispatch("updateAttributes", {
        id: this.selectedComponent.id,
        attributes: newAttr,
      });
    },
  },
};
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
