import { RouteRecordRaw } from 'vue-router';
type RouteMeta = {
    title?: string;
    requiresAuth: boolean;
};

const jobRoutes: Array<RouteRecordRaw> = [
    {
        path: '/company',
        component: () => import('../../layout/CompanyLayout.vue'),
        children: [
            {
                path: '',
                name: 'companyListing',
                component: () => import('../../pages/Company/CompanyListingPage.vue'),
                meta: { requiresAuth: true, title: 'Company Listings' } as RouteMeta
            },
            {
                path: 'details',
                name: 'companyDetails',
                component: () => import('../../pages/Company/CompanyDetailsPage.vue'),
                props: true,
                meta: { requiresAuth: false, title: 'Company Details' } as RouteMeta
            },
            {
                path: 'dashboard',
                name: 'companyDashboard',
                component: () => import('../../pages/Company/CompanyDetailsPage.vue'),
                props: true,
                meta: { requiresAuth: true, title: 'Company Dashbaord' } as RouteMeta
            },
        ]
    },
];

export default jobRoutes;
