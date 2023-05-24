import { createRouter, createWebHistory } from "vue-router";
import Homepage from '../views/Homepage'

const routes = [
    {
    path: '/',
    name: 'home',
    component: Homepage,
    meta: { title: 'Home - Risidio' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;