<script setup lang="ts">
import DashboardSidebar from '../components/UserDashboard/DashboardSidebar.vue';
import HomeFooter from '../components/HomeFooter.vue';
import AuthenticatedNavbar from '../components/Navbar/AuthenticatedNavbar.vue';
import Navbar from '../components/Navbar/Navbar.vue';
import { useAuthStore } from '../store';

const store = useAuthStore();
</script>
<template>
    <AuthenticatedNavbar v-if="store.isAuthenticated" />
    <Navbar v-else />

    <div class="dashboard-area pt-120 mb-120">
        <div class="container">
            <div class="row g-lg-4 gy-5 mb-90">
                <div class="col-lg-3">
                    <DashboardSidebar />
                </div>
                <div class="col-lg-9">
                    <RouterView></RouterView>
                </div>
            </div>
        </div>
    </div>
    <HomeFooter />
</template>

<style></style>