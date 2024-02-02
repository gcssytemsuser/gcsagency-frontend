<script setup lang="ts">
import HomeLayout from '../layout/HomeLayout.vue'
</script>
<template>
    <HomeLayout>
        <!-- ========== Error Pages Start============= -->
        <div class="error-page">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="error-wrapper">
                            <div class="error-img">
                                <img class="img-fluid" src="/assets/images/bg/404.svg" alt="">
                            </div>
                            <div class="error-content-area text-center">
                                <h2>Opps... Page Not Found</h2>
                                <p>Something went wrong, web page that is displayed to the user when the server cannot find
                                    the requested page.</p>
                                <div class="error-btn">
                                    <router-link class="primry-btn-2 lg-btn" to="/">Back Homepage</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ========== Error Pages end============= -->
    </HomeLayout>
</template>
<style></style>