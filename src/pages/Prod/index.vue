<template>
  <div
    class="prod-wrapper"
    :style="{
      'font-family': projectFont,
    }"
  >
    <prod-menu />
    <div v-if="hasSections">
      <div v-for="section in sections" :key="section.id">
        <component
          :is="section.componentName"
          :isInBuilder="false"
          :section="section"
        ></component>
      </div>
    </div>
    <h3 v-else>Create your page in the builder.</h3>
    <GoBackButton v-if="showGoBackButton" />
  </div>
</template>

<script>
import { getDocumentFromLocalStorage } from "@/utils/localStorage";

import GoBackButton from "./GoBackButton";

export default {
  components: {
    GoBackButton,
  },
  computed: {
    hasSections() {
      return getDocumentFromLocalStorage().length > 0;
    },
    projectFont() {
      return this.$store.getters.getProjectFont;
    },
    sections() {
      return getDocumentFromLocalStorage();
    },
    showGoBackButton() {
      return window.location.pathname === "/prod";
    },
  },
};
</script>

<style scoped>
header {
  align-items: center;
  background-color: #252628;
  box-shadow: 0 1px 30px 0 rgb(0 0 0 / 30%);
  color: white;
  display: flex;
  height: 70px;
  padding: 0 20px;
  position: relative;
  width: 100%;
  z-index: 2;
}

nav {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 100%;
}

.prod {
  align-items: center;
  display: flex;
  height: calc(100vh - 70px);
  position: relative;
  width: 100%;
}
</style>
