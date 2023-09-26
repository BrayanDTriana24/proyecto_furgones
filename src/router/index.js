import { createWebHistory, createRouter } from "vue-router";
import Compras from '../components/Compras_Com.vue'
import Ventas from '../components/Ventas_Com.vue'
import Menu from '../components/MenuP.vue'
import LoginP from '../components/LoginP.vue'
import FurgonesP from '../components/furgones_Com.vue'
import Furgon1P from '../components/furgon_1.vue'
import Vue from "vue";
import Router from "vue-router";

import App from "./App";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";

Vue.use(Router);

const routes =[
    {
        path:"/compras",
        name: "Compras",
        component: Compras
    },
    {
        path:"/ventas",
        name: "Ventas",
        component: Ventas
    },
    {
        path: "/",
        name: "Menu",
        component: Menu
    },
    {
        path: "/LoginP",
        name: "LoginP",
        component: LoginP
    },
    {
        path: "/furgones",
        name: "furgones_com",
        component: FurgonesP
    },
    {
        path: "/Furgon1",
        name: "FurgonP",
        component: Furgon1P
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
  ];
  
  const router = new Router({
    routes,
  });