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
  updateAttributes(context, payload) {
    context.commit("updateAttributes", payload);
  },
  updateJson(context, payload) {
    context.commit("setJson", {
      json: payload,
    });
  },
};
