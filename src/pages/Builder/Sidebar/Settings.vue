<template>
  <h3>Settings</h3>
  <div>{{ selectedComponent.componentLabel }}</div>
  <div v-for="attribute in attributesList" :key="attribute">
    <div v-if="attribute === 'alignment'">
      <Alignment
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
    <div v-if="textSettings.includes(attribute)">
      <Text :attribute="attribute" :selectedComponent="selectedComponent" />
    </div>
    <div v-if="numberSettings.includes(attribute)">
      <SelectNumber
        :attribute="attribute"
        :selectedComponent="selectedComponent"
      />
    </div>
    <div v-if="checkboxSettings.includes(attribute)">
      <Checkbox :attribute="attribute" :selectedComponent="selectedComponent" />
    </div>
  </div>
</template>

<script>
import Alignment from "@/components/Settings/Alignment";
import Checkbox from "@/components/Settings/Checkbox";
import Color from "@/components/Settings/Color";
import Height from "@/components/Settings/Height";
import SelectNumber from "@/components/Settings/SelectNumber";
import Text from "@/components/Settings/Text";

import {
  CHECKBOX_SETTINGS,
  COLOR_SETTINGS,
  NUMBER_SETTINGS,
  TEXT_SETTINGS,
} from "./utils";

export default {
  components: {
    Alignment,
    Checkbox,
    Color,
    Height,
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
};
</script>
