import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import authRoutes from './modules/authRoutes';
import generalRoutes from './modules/generalRoutes';
import userRoutes from './modules/userRoutes';
import jobRoutes from './modules/jobRoutes';
import { useAuthStore } from '../store';

const routes: Array<RouteRecordRaw> = [
    ...authRoutes,
    ...generalRoutes,
    ...userRoutes,
    ...jobRoutes,
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import('../pages/NotFoundPage.vue'),
        meta: { title: 'Page Not Found' }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();

    if (!authStore.isAuthenticated && authStore.token && to.meta.requiresAuth) {
        try {
            await authStore.fetchUserDetails();
        } catch (error) {
            return next('/login');
        }
    }

    next(); // Proceed to route if no conditions above are met
});

export default router;

