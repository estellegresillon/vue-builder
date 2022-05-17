<template>
  <h3>Settings</h3>
  <div>{{ selectedComponent.componentLabel }}</div>
  <div v-for="attribute in attributesList" :key="attribute">
    <div v-if="attribute === 'title'">
      <Text :attribute="attribute" :selectedComponent="selectedComponent" />
    </div>
  </div>
</template>

<script>
import Text from "@/components/Settings/Text.vue";

export default {
  components: {
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
  },
};
</script>
