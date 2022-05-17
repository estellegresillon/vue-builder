<template>
  <header>
    <nav>
      <h1>Prod</h1>
      <h1>
        <router-link to="/">Go back</router-link>
      </h1>
    </nav>
  </header>
  <div class="prod-wrapper">
    <div v-if="hasSections">
      <div v-for="section in sections" :key="section.id">
        <component :is="section.componentName" :section="section"></component>
      </div>
    </div>
    <h3 v-else>Create your page in the builder.</h3>
  </div>
</template>

<script>
import { getDocumentFromLocalStorage } from "@/utils/localStorage";

export default {
  computed: {
    sections() {
      return getDocumentFromLocalStorage();
    },
    hasSections() {
      return getDocumentFromLocalStorage().length > 0;
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
