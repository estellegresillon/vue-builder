<template>
  <div class="notification-wrapper">{{ text }}</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style scoped>
.notification-wrapper {
  animation: 4s fadeInOut;
  animation-fill-mode: forwards;
  background: #d40c0c;
  border-radius: 3px;
  bottom: 20px;
  color: white;
  font-weight: bolder;
  padding: 20px 30px;
  position: fixed;
  right: 20px;
  z-index: 10;
}

@keyframes fadeInOut {
  from {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
