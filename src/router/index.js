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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
