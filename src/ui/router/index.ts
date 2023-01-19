import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Stash from "../views/StashView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/stash",
      name: "stash",
      component: Stash,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;
