import { ISection, State } from "@/types";

export default {
  removeComponent(state: State, id: string) {
    const newJson = [...state.json].filter((section) => {
      return section.id !== id;
    });

    state.json = newJson;
    state.selectedComponent = null;
  },
  resetJson(state: State) {
    state.json = [];
    state.selectedComponent = null;
  },
  selectComponent(state: State, component: ISection) {
    state.selectedComponent = component;
  },
  setDraggedOverComponent(state: State, component: ISection) {
    state.draggedOverComponent = component;
  },
  setJson(state: State, payload: { json: ISection[] }) {
    state.json = payload.json;
  },
  setProjectFont(state: State, payload: string) {
    state.projectFont = payload;
  },
  setProjectName(state: State, payload: string) {
    state.projectName = payload;
  },
  setTransparentMenu(state: State, payload: string) {
    state.transparentMenu = payload;
  },
  updateAttributes(state: State, payload: ISection) {
    const { id, attributes } = payload;
    const newJson = [...state.json];

    const component = newJson.filter((section) => {
      return section.id === id;
    })[0];

    component.attributes = { ...component.attributes, ...attributes };
    state.json = newJson;
  },
};
