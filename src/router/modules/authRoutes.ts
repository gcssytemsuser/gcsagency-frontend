import { RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '../../store';

const authRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../../pages/Auth/LoginPage.vue'),
        meta: { requiresAuth: false, title: 'Login' },
        beforeEnter: (to, from, next) => {
            const authStore = useAuthStore();
            if (authStore.isAuthenticated) {
                next('/');
            } else {
                next();
            }
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../../pages/Auth/RegisterPage.vue'),
        meta: { requiresAuth: false, title: 'Register' },
        beforeEnter: (to, from, next) => {
            const authStore = useAuthStore();

            if (authStore.isAuthenticated) {
                next('/');
            } else {
                next();
            }
        }
    },
];

export default authRoutes;
