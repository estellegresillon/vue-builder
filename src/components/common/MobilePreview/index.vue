<template>
  <div class="overlay" @click="onClose">
    <div class="mobile-preview-wrapper" id="mobile-wrapper">
      <Prod />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Prod from "@/pages/Prod/index.vue";

export default defineComponent({
  components: {
    Prod,
  },
  props: {
    onClose: {
      type: Function,
    },
  },
  created() {
    const body = document.querySelector("body");
    body?.setAttribute("id", "force-mobile");
  },
  unmounted() {
    const body = document.querySelector("body");
    body?.removeAttribute("id");
  },
});
</script>

<style scoped>
.overlay {
  background-color: black;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
}

.mobile-preview-wrapper {
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 50%);
  display: flex;
  flex-direction: column;
  height: 600px;
  left: calc(50% - 160px);
  overflow: scroll;
  position: fixed;
  top: calc(50% - 300px);
  width: 320px;
  z-index: 3;
}

svg {
  color: black;
}
</style>
