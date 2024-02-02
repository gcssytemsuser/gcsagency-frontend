import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import authRoutes from './modules/authRoutes';
import generalRoutes from './modules/generalRoutes';
import userRoutes from './modules/userRoutes';

const routes: Array<RouteRecordRaw> = [
    ...authRoutes,
    ...generalRoutes,
    ...userRoutes,
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

export default router;
