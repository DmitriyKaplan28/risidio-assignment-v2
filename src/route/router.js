import { createRouter, createWebHistory } from "vue-router";

// You do not need to do any routing for this test! :))
// That said, we appreciate the curiosity

// Views
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
