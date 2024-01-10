// router.js
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/Auth/LoginPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from './pages/Auth/RegisterPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
