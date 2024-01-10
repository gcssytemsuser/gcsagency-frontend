<script setup lang="ts">
import AuthLayout from '../../layout/AuthLayout.vue'
</script>

<template>
<AuthLayout>
    <div class="login-area pt-120 mb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                     <div class="form-wrapper">
                        <div class="form-title">
                            <h3>Log In Here!</h3>
                            <span></span>
                        </div>
                        <form>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-inner mb-25">
                                        <label for="email">Email*</label> 
                                        <div class="input-area">
                                            <img src="/assets/images/icon/email-2.svg" alt="">
                                            <input type="email" id="email" name="email" placeholder="info@example.com">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-inner">
                                        <label for="email">Password*</label> 
                                        <input type="password" name="password" id="password" placeholder="Password"/>
                                        <i class="bi bi-eye-slash" id="togglePassword"></i>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-agreement form-inner d-flex justify-content-between flex-wrap">
                                        <div class="form-group">
                                            <input type="checkbox" id="html">
                                            <label for="html">Remember Me</label>
                                        </div>
                                        <router-link  to="/login" class="forgot-pass">Forget Password?</router-link>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-inner">
                                        <button class="primry-btn-2" type="submit">LogIn</button>
                                    </div>
                                </div>
                                <h6>Don’t have an account? <router-link  to="/register">Sign Up</router-link></h6>
                            </div>
                        </form>
                     </div>
                </div>
            </div>
        </div>
    </div>
</AuthLayout>
</template>