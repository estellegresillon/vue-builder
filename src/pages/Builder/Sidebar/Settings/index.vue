<template>
  <div class="settings-wrapper">
    <div class="close-settings" @click="goBack"><IconBack /> Back to list</div>
    <h3>{{ selectedComponent.componentLabel }}</h3>
    <div
      class="settings-content"
      v-for="attribute in attributesList"
      :key="attribute"
    >
      <div v-if="attribute === 'alignment'">
        <Alignment
          :attribute="attribute"
          :selectedComponent="selectedComponent"
        />
      </div>
      <div v-if="checkboxSettings.includes(attribute)">
        <Checkbox
          :attribute="attribute"
          :selectedComponent="selectedComponent"
        />
      </div>
      <div v-if="colorSettings.includes(attribute)">
        <Color :attribute="attribute" :selectedComponent="selectedComponent" />
      </div>
      <div v-if="attribute === 'height'">
        <Height :attribute="attribute" :selectedComponent="selectedComponent" />
      </div>
      <div v-if="numberSettings.includes(attribute)">
        <SelectNumber
          :attribute="attribute"
          :selectedComponent="selectedComponent"
        />
      </div>
      <div v-if="textSettings.includes(attribute)">
        <Text :attribute="attribute" :selectedComponent="selectedComponent" />
      </div>
    </div>
  </div>
</template>

<script>
import { IconBack } from "@/components/common";
import {
  Alignment,
  Checkbox,
  Color,
  Height,
  SelectNumber,
  Text,
} from "@/components/Settings";

import {
  CHECKBOX_SETTINGS,
  COLOR_SETTINGS,
  NUMBER_SETTINGS,
  TEXT_SETTINGS,
} from "../utils";

export default {
  components: {
    Alignment,
    Checkbox,
    Color,
    Height,
    IconBack,
    SelectNumber,
    Text,
  },
  props: {
    selectedComponent: {
      type: Object,
    },
  },
  computed: {
    attributesList() {
      return Object.keys(this.selectedComponent.attributes);
    },
    checkboxSettings() {
      return CHECKBOX_SETTINGS;
    },
    colorSettings() {
      return COLOR_SETTINGS;
    },
    numberSettings() {
      return NUMBER_SETTINGS;
    },
    textSettings() {
      return TEXT_SETTINGS;
    },
  },
  methods: {
    goBack() {
      this.$store.dispatch("selectComponent", null);
    },
  },
};
</script>

<style scoped>
.settings-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  margin-top: 10px;
  width: 100%;
}

.close-settings {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 20px;
}

svg {
  height: 15px;
  margin-right: 10px;
  width: 15px;
}

.settings-content {
  margin: 0 20px;
  width: calc(100% - 40px);
}

.attribute-name {
  text-transform: capitalize;
}
</style>
