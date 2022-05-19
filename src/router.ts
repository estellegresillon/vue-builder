import { createRouter, createWebHistory } from "vue-router";

import Builder from "./pages/Builder/index.vue";
import Prod from "./pages/Prod/index.vue";
import NotFound from "./pages/NotFound/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Builder },
    { path: "/prod", component: Prod },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
