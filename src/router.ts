// router.js
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/Auth/LoginPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
