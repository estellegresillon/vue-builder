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
    heightAttribute() {
      return this.selectedComponent.attributes[this.attribute];
    },
  },
  methods: {
    updateHeight(e) {
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
.height-wrapper {
  margin-bottom: 20px;
}

.attribute-name {
  margin-bottom: 10px;
  text-transform: capitalize;
}
</style>
