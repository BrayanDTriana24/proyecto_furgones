import { createWebHistory, createRouter } from "vue-router";
import Compras from '../components/Compras_Com.vue'
import Ventas from '../components/Ventas_Com.vue'
import Menu from '../components/MenuP.vue'
import LoginP from '../components/LoginP.vue'


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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router