/* eslint-disable */
declare module "@ckpack/vue-color";
declare module "click-outside-vue3";
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
