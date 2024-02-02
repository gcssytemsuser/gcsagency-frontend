<script setup lang="ts">
import { ref } from 'vue';
import { useCompanyStore } from '../../store';

import { validateCompanyRegistrationData } from '../../utils/validation/registerValidation';
import { CompanyRegisterPayload } from '../../types';

const store = useCompanyStore();

const formData = ref({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    companyName: '',
    companyType: '',
    password: '',
    confirmPassword: ''
});

const registerHandler = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const { isValid, errors } = validateCompanyRegistrationData(
        formData.value.firstName,
        formData.value.lastName,
        formData.value.username,
        formData.value.email,
        formData.value.companyName,
        formData.value.companyType,
        formData.value.password,
        formData.value.confirmPassword
    );

    if (!isValid) {
        console.error("Validation errors:", errors);
        return;
    }

    const payload: CompanyRegisterPayload = {
        firstName: formData.value.firstName,
        lastName: formData.value.lastName,
        username: formData.value.username,
        email: formData.value.email,
        companyName: formData.value.companyName,
        companyType: formData.value.companyType,
        password: formData.value.password,
    };

    try {
        await store.register(payload);
    } catch (error) {
        console.error("Registration failed:", error);
    }
}


</script>
<template>
    <form>
        <div class="row">
            <div class="col-md-6">
                <div class="form-inner mb-25">
                    <label for="firstname">First Name*</label>
                    <div class="input-area">
                        <img src="/assets/images/icon/user-2.svg" alt="">
                        <input type="text" id="firstname" name="firstname" v-model="formData.firstName"
                            placeholder="Mr. Robert">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-inner mb-25">
                    <label for="lastname">Last Name*</label>
                    <div class="input-area">
                        <img src="/assets/images/icon/user-2.svg" alt="">
                        <input type="text" id="lastname" name="lastname" v-model="formData.lastName" placeholder="Jonson">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-inner mb-25">
                    <label for="username">User Name*</label>
                    <div class="input-area">
                        <img src="/assets/images/icon/user-2.svg" alt="">
                        <input type="text" id="username1" name="username" v-model="formData.username"
                            placeholder="robertjonson">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-inner mb-25">
                    <label for="email">Email*</label>
                    <div class="input-area">
                        <img src="/assets/images/icon/email-2.svg" alt="">
                        <input type="text" id="email1" name="email" v-model="formData.email" placeholder="info@example.com">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-inner mb-25">
                    <label for="companyname">Company Name*</label>
                    <div class="input-area">
                        <img src="/assets/images/icon/company-2.svg" alt="">
                        <input type="text" id="companyname" name="companyname" v-model="formData.companyName"
                            placeholder="Mr. Robert">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-inner mb-25">
                    <label>Company Type*</label>
                    <div class="input-area">
                        <img src="/assets/images/icon/category-2.svg" alt="">
                        <select v-model="formData.companyType" class="select1">
                            <option value="0">Digital Agency</option>
                            <option value="1">Digital Marketing Agency</option>
                            <option value="2">Software Company</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-inner mb-25">
                    <label for="password">Password*</label>
                    <input type="password" name="password" id="password3" v-model="formData.password"
                        placeholder="Password" />
                    <i class="bi bi-eye-slash" id="togglePassword3"></i>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-inner">
                    <label for="password4">Confirm Password*</label>
                    <input type="password" name="confirmpassword" id="password4" v-model="formData.confirmPassword"
                        placeholder="Confirm Password" />
                    <i class="bi bi-eye-slash" id="togglePassword4"></i>
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-agreement form-inner d-flex justify-content-between flex-wrap">
                    <div class="form-group two">
                        <input type="checkbox" id="html">
                        <label for="html">Here, I will agree company terms &
                            conditions.</label>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-inner">
                    <button class="primry-btn-2" type="submit" @click="registerHandler">Sign Up</button>
                </div>
            </div>
            <h6>Already have an account? <router-link to="login.html">
                    Login</router-link> Here</h6>
            <div class="login-difarent-way">
                <div class="row g-4">
                    <div class="col-md-6">
                        <router-link to="https://myaccount.google.com/"><img src="/assets/images/icon/google1.svg"
                                alt="">Log in with
                            Google</router-link>
                    </div>
                    <div class="col-md-6">
                        <router-link to="https://www.facebook.com/"><img src="/assets/images/icon/facebook1.svg" alt="">Log
                            in
                            with Facebook</router-link>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
<style></style>