import { RouteRecordRaw } from 'vue-router';
type RouteMeta = {
    title?: string;
    requiresAuth: boolean;
};
const userRoutes: Array<RouteRecordRaw> = [
    {
        path: '/user',
        name: 'user',
        component: () => import('../../layout/UserDashboardLayout.vue'),
        meta: { requiresAuth: true, title: 'Dashboard' },
        children: [
            {
                path: 'dashboard',
                name: 'userDashboard',
                component: () => import('../../pages/User/DashboardPage.vue'),
                meta: { requiresAuth: true, title: 'Dashboard' } as RouteMeta
            }
        ]
    },
];

export default userRoutes;
