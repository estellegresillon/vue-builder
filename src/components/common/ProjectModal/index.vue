<template>
  <div class="project-modal-wrapper">
    <div class="close-button" @click="onClose">
      <IconClose />
    </div>
    <div class="menu-style">
      <label htmlFor="menu">Light Menu</label>
      <input
        @change="updateTransparentMenu"
        :checked="transparentMenu === 'true'"
        id="menu"
        type="checkbox"
      />
    </div>
    <Select
      name="font"
      :onChange="updateFont"
      :options="fonts"
      placeholder="Select a font"
      :value="projectFont"
    />
    <Input
      name="project"
      :onChange="updateProjectName"
      placeholder="Enter a name for your project"
      :value="projectName"
    />
    <div class="update-button" @click="onClose">Done</div>
  </div>
</template>

<script>
import { saveDataInLocalStorage } from "@/utils/localStorage";

import IconClose from "../Icons/IconClose.vue";
import Input from "../Input";
import Select from "../Select";

export default {
  components: {
    IconClose,
    Input,
    Select,
  },
  props: {
    onClose: {
      type: Function,
    },
  },
  data() {
    return {
      fonts: [
        "Agenda",
        "Austin",
        "Bluu",
        "Circular",
        "Futura",
        "Gilroy",
        "Montserrat",
        "Recife",
      ],
    };
  },
  computed: {
    projectFont() {
      return this.$store.getters.getProjectFont;
    },
    projectName() {
      return this.$store.getters.getProjectName;
    },
    transparentMenu() {
      return this.$store.getters.getTransparentMenu;
    },
  },
  methods: {
    updateFont(e) {
      this.$store.dispatch("updateProjectFont", e.target.value);
      saveDataInLocalStorage("font", e.target.value);
    },
    updateProjectName(e) {
      this.$store.dispatch("updateProjectName", e.target.value);
      saveDataInLocalStorage("project", e.target.value);
    },
    updateTransparentMenu() {
      const newMenu = this.transparentMenu === "true" ? "false" : "true";
      this.$store.dispatch("updateTransparentMenu", newMenu);
      saveDataInLocalStorage("transparentMenu", newMenu);
    },
  },
};
</script>

<style scoped>
.project-modal-wrapper {
  align-items: flex-start;
  background-color: #252628;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 50%);
  display: flex;
  flex-direction: column;
  left: 10px;
  position: absolute;
  top: 60px;
  width: 250px;
  z-index: 1;
}

.menu-style {
  cursor: pointer;
  margin: 19px;
  margin-top: 0;
  white-space: nowrap;
}

.menu-style input,
.menu-style label {
  cursor: pointer;
  width: auto;
}

svg {
  color: #365ed2;
  height: 10px;
  width: 10px;
  margin: 5px;
}

svg:hover {
  color: lightgray;
}

input {
  margin-left: 10px;
}

.close-button {
  border-radius: 10px;
  cursor: pointer;
  margin: 5px;
}

.update-button {
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin: 10px;
  padding: 10px 0;
  text-align: center;
  width: calc(100% - 20px);
  background-color: #d40c0e;
}

.update-button:hover {
  background-color: #920e0e;
}
</style>
