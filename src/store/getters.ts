import { State } from "@/types";

export default {
  getComponents(state: State) {
    return state.components;
  },
  getDraggedOverComponent(state: State) {
    return state.draggedOverComponent;
  },
  getJson(state: State) {
    return state.json;
  },
  getProjectFont(state: State) {
    return state.projectFont;
  },
  getProjectName(state: State) {
    return state.projectName;
  },
  getSelectedComponent(state: State) {
    return state.selectedComponent;
  },
  getTransparentMenu(state: State) {
    return state.transparentMenu;
  },
};
