import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/pages/About.vue';
import Portfolio from '../components/pages/Portfolio.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: About
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;