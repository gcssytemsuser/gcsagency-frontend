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

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (authStore.isAuthenticated) {
            return next();
        } else if (authStore.token) {
            try {
                await authStore.fetchUserDetails();
                return next();
            } catch (error) {
                return next('/login');
            }
        } else {
            return next('/login');
        }
    } else {
        next();
    }
});


export default router;

