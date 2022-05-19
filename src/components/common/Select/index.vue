<template>
  <div class="select-wrapper">
    <select @change="onChange" :id="name" :name="name" :value="value">
      <option value="">{{ placeholder }}</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    onChange: {
      type: Function,
    },
    options: {
      type: Array,
    },
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>

<style scoped>
.select-wrapper {
  margin-left: 10px;
  width: 100%;
}

select {
  background-color: #252628;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 50%);
  color: #ffffff;
  cursor: pointer;
  font-family: Gilroy;
  height: 38px;
  margin-bottom: 10px;
  outline: 0;
  padding-left: 15px;
  width: calc(100% - 23px);
}

select::placeholder {
  color: lightgray;
  opacity: 0.5;
}

select::-ms-expand {
  position: absolute;
}
</style>
