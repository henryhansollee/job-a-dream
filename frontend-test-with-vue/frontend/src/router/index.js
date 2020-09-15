import Vue from "vue";
import VueRouter from "vue-router";

// home
import Home from "../pages/Home";

// auth
import Signup from "../pages/auth/Signup";

// interview
import InterviewList from "../pages/interview/InterviewList";
import InterviewCreate from "../pages/interview/InterviewCreate";
import InterviewDetail from "../pages/interview/InterviewDetail";
import InterviewUpdate from "../pages/interview/InterviewUpdate";

// community
import CommunityList from "../pages/community/CommunityList";
import CommunityCreate from "../pages/community/CommunityCreate";
import CommunityDetail from "../pages/community/CommunityDetail";
import CommunityUpdate from "../pages/community/CommunityUpdate";

Vue.use(VueRouter);

const routes = [
  // home
  {
    path: "/",
    name: "Home",
    component: Home
  },

  // auth
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },

  // interview
  {
    path: "/ilist",
    name: "InterviewList",
    component: InterviewList
  },
  {
    path: "/icreate",
    name: "InterviewCreate",
    component: InterviewCreate
  },
  {
    path: "/idetail",
    name: "InterviewDetail",
    component: InterviewDetail
  },
  {
    path: "/iupdate",
    name: "InterviewUpdate",
    component: InterviewUpdate
  },

  // community
  {
    path: "/clist",
    name: "CommunityList",
    component: CommunityList
  },
  {
    path: "/ccreate",
    name: "CommunityCreate",
    component: CommunityCreate
  },
  {
    path: "/cdetail",
    name: "CommunityDetail",
    component: CommunityDetail
  },
  {
    path: "/cupdate",
    name: "CommunityUpdate",
    component: CommunityUpdate
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
