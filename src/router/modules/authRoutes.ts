import { RouteRecordRaw } from 'vue-router';

const authRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../../pages/Auth/LoginPage.vue'),
        meta: { requiresAuth: false, title: 'Login' }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../../pages/Auth/RegisterPage.vue'),
        meta: { requiresAuth: false, title: 'Register' }
    },
];

export default authRoutes;
