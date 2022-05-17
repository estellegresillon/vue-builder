import { createRouter, createWebHistory } from "vue-router";

import Builder from "./pages/Builder";
import Prod from "./pages/Prod";
import NotFound from "./pages/NotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Builder },
    { path: "/prod", component: Prod },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
