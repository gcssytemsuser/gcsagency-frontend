<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import HomeFooter from '../components/HomeFooter.vue';
import AuthenticatedNavbar from '../components/Navbar/AuthenticatedNavbar.vue';
import Navbar from '../components/Navbar/Navbar.vue';
import { useAuthStore } from '../store';
const store = useAuthStore()
const route = useRoute();
const title = ref(route.meta.title || 'Job');

watch(() => route.meta, (newMeta) => {
    title.value = newMeta.title || 'Job';
    document.title = <string>newMeta.title;
}, { immediate: true });
</script>
<template>
    <AuthenticatedNavbar v-if="store.isAuthenticated" />
    <Navbar v-else />
    <!-- ========== Inner Banner Start============= -->
    <div class="inner-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-content text-center">
                        <h1>Company Listing</h1>
                        <span></span>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Company Listing</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ========== Inner Banner end============= -->
    <!-- ========== Job Listing Start============= -->
    <div class="company-listing-area pt-120 mb-120">
        <div class="container">
            <RouterView></RouterView>
        </div>
    </div>
    <!-- ========== Job Listing e nd============= -->
    <HomeFooter />
</template>

<style></style>