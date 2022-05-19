<template>
  <div class="input-wrapper">
    <input
      @input="onChange"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="value"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
    },
    onChange: {
      type: Function,
    },
    placeholder: {
      type: String,
    },
    type: {
      default: "text",
      type: String,
    },
    value: {
      type: String,
    },
  },
});
</script>

<style scoped>
.input-wrapper {
  margin-left: 10px;
  width: 100%;
}

input {
  background-color: #252628;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 50%);
  color: #ffffff;
  font-family: Gilroy;
  height: 35px;
  outline: 0;
  padding-left: 14px;
  width: calc(100% - 37px);
}

input::placeholder {
  color: lightgray;
  opacity: 0.5;
}
</style>
