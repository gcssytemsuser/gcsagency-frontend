<script setup lang="ts">
import { ref } from 'vue';
import { UserRegisterPayload } from '../../types/userTypes';
import { validateUserRegistrationData } from '../../utils/validation/registerValidation';
import { useUserStore } from '../../store';
import router from '../../router';

interface ErrorMessages {
    [key: string]: string;
}
const store = useUserStore();
const successMessage = ref('');
const errorMessage = ref<ErrorMessages | string>('');

const formData = ref({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
});

const registerHandler = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    successMessage.value = '';
    errorMessage.value = '';

    const { isValid, errors } = validateUserRegistrationData(
        formData.value.first_name,
        formData.value.last_name,
        formData.value.username,
        formData.value.email,
        formData.value.password,
        formData.value.confirmPassword
    );

    if (!isValid) {
        console.error("Validation errors:", errors);
        errorMessage.value = errors;
        return;
    }

    const payload: UserRegisterPayload = {
        first_name: formData.value.first_name,
        last_name: formData.value.last_name,
        username: formData.value.username,
        email: formData.value.email,
        password: formData.value.password,
    };

    try {
        const response = await store.register(payload);
        // if (response) router.push({ name: 'home' })
        if (response) router.push({ name: 'login' })
    } catch (error) {
        console.error("Registration failed:", error);
    }
}
</script>

<template>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

    <form>
        <div class="row">
            <div class="col-md-6">
                <div class="form-inner mb-25">
                    <label for="first_name1">First Name*</label>
                    <div class="input-area">
                        <img src="/assets/images/icon/user-2.svg" alt="">
                        <input type="text" id="first_name1" name="first_name1" v-model="formData.first_name"
                            placeholder="Mr. Robert">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-inner mb-25">
                    <label for="last_name1">Last Name*</label>
                    <div class="input-area">
                        <img src="/assets/images/icon/user-2.svg" alt="">
                        <input type="text" id="last_name1" name="last_name1" v-model="formData.last_name"
                            placeholder="Jonson">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-inner mb-25">
                    <label for="username">User Name*</label>
                    <div class="input-area">
                        <img src="/assets/images/icon/user-2.svg" alt="">
                        <input type="text" id="username" name="username" v-model="formData.username"
                            placeholder="robertjonson">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-inner mb-25">
                    <label for="email">Email*</label>
                    <div class="input-area">
                        <img src="/assets/images/icon/email-2.svg" alt="">
                        <input type="text" id="email" name="email" v-model="formData.email" placeholder="info@example.com">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-inner mb-25">
                    <label for="password">Password*</label>
                    <input type="password" name="password" id="password" v-model="formData.password"
                        placeholder="Password" />
                    <i class="bi bi-eye-slash" id="togglePassword"></i>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-inner">
                    <label for="password2">Confirm Password*</label>
                    <input type="password" name="confirmpassword" id="password2" v-model="formData.confirmPassword"
                        placeholder="Confirm Password" />
                    <i class="bi bi-eye-slash" id="togglePassword2"></i>
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-agreement form-inner d-flex justify-content-between flex-wrap">
                    <div class="form-group two">
                        <input type="checkbox" id="html1">
                        <label for="html1">Here, I will agree company terms &
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


<style></style>../../store/user/userStore