import { RouteRecordRaw } from 'vue-router';

const generalRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('../../pages/HomePage.vue'),
        meta: { requiresAuth: false, title: 'Home' }
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../../pages/ContactPage.vue'),
        meta: { requiresAuth: false, title: 'Contact Us' }
    },
];

export default generalRoutes;
