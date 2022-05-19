import { createApp } from "vue";

import router from "./router";
import store from "./store";
import App from "./App.vue";

import Contact from "./components/BuilderComponents/Contact/index.vue";
import Gallery from "./components/BuilderComponents/Gallery/index.vue";
import Hero from "./components/BuilderComponents/Hero/index.vue";
import Partners from "./components/BuilderComponents/Partners/index.vue";
import Section from "./components/BuilderComponents/Section/index.vue";
import TextBlock from "./components/BuilderComponents/TextBlock/index.vue";

import { IconBack, ProdMenu } from "./components/common";

createApp(App)
  .use(router)
  .use(store)
  .component("builder-contact", Contact)
  .component("builder-gallery", Gallery)
  .component("builder-hero", Hero)
  .component("builder-partners", Partners)
  .component("builder-section", Section)
  .component("builder-text-block", TextBlock)
  .component("icon-back", IconBack)
  .component("prod-menu", ProdMenu)
  .mount("#app");
