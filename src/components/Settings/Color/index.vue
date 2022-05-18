<template>
  <div class="attribute-name" style="margin-bottom: 20px">
    {{ settingName }} :
  </div>
  <div class="attribute-value">
    <div
      class="color-circle"
      :color="selectedComponent.attributes[attribute]"
      v-click-outside="hidePicker"
      @click="showPicker"
      :style="{
        'background-color': selectedComponent.attributes[attribute],
      }"
    />
    <div class="picker-wrapper" v-show="isPickerOpened">
      <Chrome :modelValue="color" @update:modelValue="updateColor" />
    </div>
  </div>
</template>

<script>
import { Chrome } from "@ckpack/vue-color";
import vClickOutside from "click-outside-vue3";

export default {
  components: {
    Chrome,
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
      color: this.selectedComponent.attributes[this.attribute],
      isPickerOpened: false,
      name: {
        bgColor: "BG color",
        buttonColor: "Button color",
        textColor: "Text color",
      },
    };
  },
  computed: {
    settingName() {
      return this.name[this.attribute];
    },
  },
  methods: {
    showPicker() {
      this.isPickerOpened = true;
    },

    hidePicker() {
      this.isPickerOpened = false;
    },
    updateColor(e) {
      const newAttr = { [this.attribute]: e.hex };

      this.$store.dispatch("updateAttributes", {
        id: this.selectedComponent.id,
        attributes: newAttr,
      });
    },
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
};
</script>

<style scoped>
.color-circle {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  cursor: pointer;
  height: 40px;
  margin: 10px 0;
  position: relative;
  width: 40px;
}

.picker-wrapper {
  position: absolute;
  z-index: 1;
}
</style>
