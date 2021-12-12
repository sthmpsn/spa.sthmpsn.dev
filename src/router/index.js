import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/pages/About.vue';
import Portfolio from '../components/pages/Portfolio.vue';
import Contact from '../components/pages/Contact.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: 'about'
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
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;