import { createApp } from "vue";

import router from "./router";
import store from "./store";
import App from "./App";

import Contact from "./components/BuilderComponents/Contact";
import Gallery from "./components/BuilderComponents/Gallery";
import Hero from "./components/BuilderComponents/Hero";
import Partners from "./components/BuilderComponents/Partners";
import Section from "./components/BuilderComponents/Section";
import TextBlock from "./components/BuilderComponents/TextBlock";

createApp(App)
  .use(router)
  .use(store)
  .component("builder-contact", Contact)
  .component("builder-gallery", Gallery)
  .component("builder-hero", Hero)
  .component("builder-partners", Partners)
  .component("builder-section", Section)
  .component("builder-text-block", TextBlock)
  .mount("#app");
