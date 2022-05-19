<template>
  <ProdMenuWrapper :transparentMenu="transparentMenu === 'true'">
    <div className="project-logo">
      <Item>{{ projectName }}</Item>
    </div>
    <div className="project-menu">
      <Item>Portfolio</Item>
      <Item>About</Item>
    </div>
  </ProdMenuWrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Item, ProdMenuWrapper } from "./style";

export default defineComponent({
  components: {
    Item,
    ProdMenuWrapper,
  },
  computed: {
    projectName() {
      return this.$store.getters.getProjectName;
    },
    transparentMenu() {
      return this.$store.getters.getTransparentMenu;
    },
  },
});
</script>
