<template>
  <header>
    <nav>
      <div>TopBar</div>
      <div>
        <router-link to="/prod">Prod</router-link>
      </div>
      <div @click="saveJson">Save</div>
      <div @click="resetJson">Start over</div>
    </nav>
  </header>
</template>

<script>
import { saveDocumentInLocalStorage } from "@/utils/localStorage";

export default {
  computed: {
    json() {
      return this.$store.getters.getJson;
    },
  },
  methods: {
    resetJson() {
      this.$store.dispatch("resetJson");
    },
    saveJson() {
      saveDocumentInLocalStorage(this.json);
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
</style>
