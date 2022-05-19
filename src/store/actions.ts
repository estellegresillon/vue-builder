import { ISection, State } from "@/types";
import { ActionContext } from "vuex";

type IContext = ActionContext<State, State>;

export default {
  removeComponent(context: IContext, id: string) {
    context.commit("removeComponent", id);
  },
  resetJson(context: IContext) {
    context.commit("resetJson");
  },
  selectComponent(context: IContext, component: ISection) {
    context.commit("selectComponent", component);
  },
  setDraggedOverComponent(context: IContext, component: ISection) {
    context.commit("setDraggedOverComponent", component);
  },
  updateAttributes(context: IContext, payload: ISection) {
    context.commit("updateAttributes", payload);
  },
  updateJson(context: IContext, payload: ISection[]) {
    context.commit("setJson", {
      json: payload,
    });
  },
  updateProjectFont(context: IContext, payload: string) {
    context.commit("setProjectFont", payload);
  },
  updateProjectName(context: IContext, payload: string) {
    context.commit("setProjectName", payload);
  },
  updateTransparentMenu(context: IContext, payload: string) {
    context.commit("setTransparentMenu", payload);
  },
};
