import CardMain from "./components/CardMain";
import Calender from "./components/Calender";
import Home from "./components/Home";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/course", component: CardMain },
  { path: "/calender", component: Calender },
  { path: "/", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
