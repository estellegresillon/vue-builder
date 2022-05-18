export default {
  removeComponent(state, id) {
    const newJson = [...state.json].filter((section) => {
      return section.id !== id;
    });

    state.json = newJson;
    state.selectedComponent = null;
  },
  resetJson(state) {
    state.json = [];
    state.selectedComponent = null;
  },
  selectComponent(state, component) {
    state.selectedComponent = component;
  },
  setDraggedOverComponent(state, component) {
    state.draggedOverComponent = component;
  },
  setJson(state, payload) {
    state.json = payload.json;
  },
  setProjectFont(state, payload) {
    state.projectFont = payload;
  },
  setProjectName(state, payload) {
    state.projectName = payload;
  },
  setTransparentMenu(state, payload) {
    state.transparentMenu = payload;
  },
  updateAttributes(state, payload) {
    const { id, attributes } = payload;
    const newJson = [...state.json];

    const component = newJson.filter((section) => {
      return section.id === id;
    })[0];

    component.attributes = { ...component.attributes, ...attributes };
    state.json = newJson;
  },
};
