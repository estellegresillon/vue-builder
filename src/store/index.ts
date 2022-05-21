import { createStore } from "vuex";

import { getComponents } from "@/utils/getBuilderComponents";
import {
  getDataFromLocalStorage,
  getDocumentFromLocalStorage,
} from "@/utils/localStorage";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const store = createStore({
  state() {
    return {
      components: getComponents(),
      draggedOverComponent: null,
      json: getDocumentFromLocalStorage(),
      projectFont: getDataFromLocalStorage("font") || "Gilroy",
      projectName: getDataFromLocalStorage("project") || "Vue Buidler",
      selectedComponent: null,
      transparentMenu: getDataFromLocalStorage("transparentMenu") || "true",
    };
  },
  actions,
  getters,
  mutations,
});

export default store;
