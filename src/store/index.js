import { createStore } from "vuex";

import { getComponents } from "@/utils/getBuilderComponents";
import {
  getDataFromLocalStorage,
  getDocumentFromLocalStorage,
} from "@/utils/localStorage";
// import initialJson from "@/utils/initialJson";

import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const store = createStore({
  state() {
    return {
      components: getComponents(),
      json: getDocumentFromLocalStorage(),
      selectedComponent: null,
      draggedOverComponent: null,
      projectFont: getDataFromLocalStorage("font") || "Gilroy",
      projectName: getDataFromLocalStorage("project") || "Project Name",
      transparentMenu: getDataFromLocalStorage("transparentMenu") || "true",
    };
  },
  getters,
  actions,
  mutations,
});

export default store;
