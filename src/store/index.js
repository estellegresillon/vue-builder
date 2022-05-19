import { createStore } from "vuex";

import { getComponents } from "@/utils/getBuilderComponents";
import {
  getDataFromLocalStorage,
  getDocumentFromLocalStorage,
} from "@/utils/localStorage";
// import initialJson from "@/utils/initialJson";

import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

const store = createStore({
  state() {
    return {
      components: getComponents(),
      draggedOverComponent: null,
      json: getDocumentFromLocalStorage(),
      projectFont: getDataFromLocalStorage("font") || "Gilroy",
      projectName: getDataFromLocalStorage("project") || "Project Name",
      selectedComponent: null,
      transparentMenu: getDataFromLocalStorage("transparentMenu") || "true",
    };
  },
  actions,
  getters,
  mutations,
});

export default store;
