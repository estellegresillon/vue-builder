export default {
  removeComponent(context, id) {
    context.commit("removeComponent", id);
  },
  resetJson(context) {
    context.commit("resetJson");
  },
  selectComponent(context, component) {
    context.commit("selectComponent", component);
  },
  setDraggedOverComponent(context, component) {
    context.commit("setDraggedOverComponent", component);
  },
  updateAttributes(context, payload) {
    context.commit("updateAttributes", payload);
  },
  updateJson(context, payload) {
    context.commit("setJson", {
      json: payload,
    });
  },
  updateProjectFont(context, payload) {
    context.commit("setProjectFont", payload);
  },
  updateProjectName(context, payload) {
    context.commit("setProjectName", payload);
  },
  updateTransparentMenu(context, payload) {
    context.commit("setTransparentMenu", payload);
  },
};
