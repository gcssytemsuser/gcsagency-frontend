import { RouteRecordRaw } from 'vue-router';

const userRoutes: Array<RouteRecordRaw> = [
    {
        path: '/user/dashboard',
        name: 'dashboard',
        component: () => import('../../pages/User/DashboardPage.vue'),
        meta: { requiresAuth: true, title: 'Dashboard' }
    },
];

export default userRoutes;
