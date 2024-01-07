<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import HomeFooter from '../components/HomeFooter.vue';
</script>
<template>
    <Navbar />
    <slot />
    <HomeFooter />
</template>

<style></style>