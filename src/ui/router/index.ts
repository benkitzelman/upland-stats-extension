import { createRouter, createWebHistory } from "vue-router";
import Live from "../views/LiveView.vue";
import Stash from "../views/StashView.vue";
import Profile from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Live,
    },
    {
      path: "/stash",
      name: "stash",
      component: Stash,
    },
    {
      path: "/me",
      name: "me",
      component: Profile,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;
