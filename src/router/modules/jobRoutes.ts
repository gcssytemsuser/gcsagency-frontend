import { RouteRecordRaw } from 'vue-router';
type RouteMeta = {
    title?: string;
    requiresAuth: boolean;
};

const jobRoutes: Array<RouteRecordRaw> = [
    {
        path: '/job',
        component: () => import('../../layout/JobLayout.vue'),
        children: [
            {
                path: '',
                name: 'jobListing',
                component: () => import('../../pages/Job/JobListingPage.vue'),
                meta: { requiresAuth: true, title: 'Job Listings' } as RouteMeta
            },
            {
                path: 'details',
                name: 'jobDetails',
                component: () => import('../../pages/Job/JobDetailsPage.vue'),
                props: true,
                meta: { requiresAuth: false, title: 'Job Details' } as RouteMeta
            },
            {
                path: 'category',
                name: 'jobCategories',
                component: () => import('../../pages/Job/JobCategoryPage.vue'),
                props: true,
                meta: { requiresAuth: false, title: 'Job Category' } as RouteMeta
            },
        ]
    },
];

export default jobRoutes;
