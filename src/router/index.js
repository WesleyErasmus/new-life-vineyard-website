import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home-Page/Home-Page.vue";
import ContactPage from "../pages/Contact-Page/Contact-Page.vue"
import ServicesPage from "../pages/Sunday-Services-Page/Sunday-Services.vue";
import MinistriesPage from "../pages/Ministries-Page/Ministries-Page.vue";
import GivingPage from "../pages/Giving-Page/Giving-Page.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesPage,
    },
    {
      path: "/ministries",
      name: "ministries",
      component: MinistriesPage,
    },
    {
      path: "/giving",
      name: "giving",
      component: GivingPage,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../pages/About-Page/About-Page.vue"),
    },
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
