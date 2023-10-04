import { createWebHistory, createRouter } from "vue-router";
import Inicio from '../components/InicioP.vue'
import LoginP from '../components/LoginP.vue'
import FurgonesP from '../components/furgones_Com.vue'
import Proveedores from '../components/Proveedores_Com.vue'


const routes =[

    {
        path: "/",
        name: "Inicio",
        component: Inicio
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
        path: "/prov",
        name: "Proveedores",
        component: Proveedores
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
