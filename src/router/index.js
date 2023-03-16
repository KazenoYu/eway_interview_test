import Vue from "vue";
import VueRouter from "vue-router";
import EwayView from "@/views/EwayView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Eway",
    component: EwayView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
