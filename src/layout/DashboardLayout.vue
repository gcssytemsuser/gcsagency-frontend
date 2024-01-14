<script setup lang="ts">
import DashboardNavbar from '../components/DashboardNavbar.vue';
import HomeFooter from '../components/HomeFooter.vue';
</script>
<template >
    <DashboardNavbar />
    <slot />
    <HomeFooter />
</template>
