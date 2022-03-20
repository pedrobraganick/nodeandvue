import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from "../views/SignUpView.vue";
import LoginView from "../views/LoginView.vue";
import HistoricoView from "../views/HistoricoView.vue";
import TransferirView from "../views/TransferirView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUpView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/historico",
    name: "historico",
    component: HistoricoView
  },
  {
    path: "/transferir",
    name: "transferir",
    component: TransferirView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
