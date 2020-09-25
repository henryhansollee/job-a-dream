import Vue from "vue";
import VueRouter from "vue-router";
import YoutubeList from "../views/YoutubeList.vue";
import YoutubeDetail from "../views/YoutubeDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "YoutubeList",
    component: YoutubeList,
  },
  {
    path: "/detail",
    name: "YoutubeDetail",
    component: YoutubeDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
