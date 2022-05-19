<template>
  <ThemeProvider>
    <router-view v-slot="slotProps">
      <component :is="slotProps.Component"></component>
    </router-view>
  </ThemeProvider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ThemeProvider } from "vue3-styled-components";

export default defineComponent({
  components: {
    ThemeProvider,
  },
});
</script>

<style>
@import "@/assets/styles/base.css";
</style>
