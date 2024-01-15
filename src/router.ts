// router.js
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/Auth/LoginPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from './pages/Auth/RegisterPage.vue';
import DashboardPage from './pages/User/DashboardPage.vue';
import JobDetailsPageVue from './pages/Job/JobDetailsPage.vue';
import ContactPage from './pages/ContactPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/contact', component: ContactPage },
    { path: '/user/dashboard', component: DashboardPage },
    { path: '/job/details', component: JobDetailsPageVue },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
