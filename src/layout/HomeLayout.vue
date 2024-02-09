<script setup lang="ts">
import HomeFooter from '../components/HomeFooter.vue';
import AuthenticatedNavbar from '../components/Navbar/AuthenticatedNavbar.vue';
import Navbar from '../components/Navbar/Navbar.vue';
import { useAuthStore } from '../store';

const store = useAuthStore();
</script>
<template>
    <AuthenticatedNavbar v-if="store.isAuthenticated" />
    <Navbar v-else />
    <slot />
    <RouterView></RouterView>
    <HomeFooter />
</template>

<style></style>