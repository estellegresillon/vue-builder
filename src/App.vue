<template>
  <ThemeProvider>
    <router-view v-slot="slotProps">
      <component :is="slotProps.Component"></component>
    </router-view>
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from "vue3-styled-components";

export default {
  components: {
    ThemeProvider,
  },
};
</script>

<style>
@import "@/assets/styles/base.css";
</style>
