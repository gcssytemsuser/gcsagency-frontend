<script setup lang="ts">
import Navbar from '../components/Navbar/Navbar.vue';
</script>
<template>
    <Navbar />
    <slot />

    <footer class="footer2">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                    <div class="copyright-area">
                        <p>©Copyright 2023 <router-link to="#">JOBES</router-link> | Design By <router-link
                                to="#">Egenslab</router-link></p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 d-flex justify-content-md-end justify-content-center">
                    <div class="footer-btm-menu">
                        <ul>
                            <li><router-link to="#">Privacy Policy</router-link></li>
                            <li><router-link to="#">Terms of Services</router-link></li>
                            <li><router-link to="#">Our Sitemap</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style></style>