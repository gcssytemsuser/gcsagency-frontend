<script setup lang="ts">
import { reactive } from 'vue';
import { useUserStore } from '../../store';
import { UserSocialNetworkPayload } from '../../types/userTypes';

const userStore = useUserStore();
const user = userStore?.getUser;

const form = reactive({
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    age: user?.age || '',
    email: user?.email || '',
    current_location: user?.current_location || '',
    current_company: user?.current_company || '',
    designation: user?.designation || '',
    year_of_exps: user?.year_of_exps || '',
    qualification: user?.qualification || '',
    phone_number: user?.phone_number || '',
    languages: user?.languages || '',
    career_obj: user?.career_obj || '',
    website_link: user?.website_link || '',
    description: user?.description || ''
});

console.log(user);


// "current_company": "Example Company",
//   "designation": "Software Developer",
//   "year_of_exps": "5",
//   "qualification": "Bachelor's Degree in Computer Science",
//   "phone_number": "1234567890",
//   "languages": "English, Spanish",
//   "career_obj": "Seeking a challenging position to utilize my skills.",
//   "website_link": "http://example.com"

const socialForm: UserSocialNetworkPayload = reactive({
    "facebook": "",
    "twitter": "",
    "linkedIn": "",
    "pinterest": "",
    "dribbble": "",
    "behance": ""
})

function handleProfileUpdate(e: { preventDefault: () => void; }) {
    e.preventDefault();
    userStore.updateProfile(form);
}

function handleUpdateSocialLink(e: { preventDefault: () => void; }) {
    e.preventDefault();
    userStore.addOrUpdateSocialNetwork(socialForm);
}

</script>
<template>
    <div class="my-profile-inner">
        <div class="form-wrapper mb-60">
            <div class="section-title">
                <h5>My Profile</h5>
            </div>
            <form class="profile-form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>First Name*</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/user-2.svg" alt="">
                                <input type="text" v-model="form.first_name" placeholder="Mr. Robert">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>Your Age*</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/clock-2.svg " alt="">
                                <input type="text" v-model="form.age" placeholder="21 Years">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>Current Location*</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/map-2.svg" alt="">
                                <input type="text" v-model="form.current_location" placeholder="Mirpur, Dhaka">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>Phone Number*</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/phone-2.svg" alt="">
                                <input type="text" v-model="form.phone_number" placeholder="+880-17 *** *** **">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>Email*</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/email-2.svg" alt="">
                                <input type="email" v-model="form.email" placeholder="info@example.com">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>Website Link*</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/website-2.svg" alt="">
                                <input type="text" v-model="form.website_link" placeholder="https://example.com">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>Current Job Place*</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/company-2.svg" alt="">
                                <input type="text" v-model="form.current_company" placeholder="Company Name">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>Designation*</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/designation-2.svg" alt="">
                                <input type="text" v-model="form.designation" placeholder="UI/UX Engineer">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>Qualification*</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/qualification-2.svg" alt="">
                                <select class="select1" v-model="form.qualification">
                                    <option value="0">Bachelor Degree in CSE</option>
                                    <option value="1">IGCSE</option>
                                    <option value="2">AS</option>
                                    <option value="4">A Level</option>
                                    <option value="5">Matriculated</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>Language*</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/language-2.svg" alt="">
                                <select class="select1" v-model="form.languages">
                                    <option value="0">Bangla</option>
                                    <option value="1">English</option>
                                    <option value="2">Spanish</option>
                                    <option value="4">Italian</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-inner mb-50">
                            <label>Description*</label>
                            <textarea v-model="form.description"
                                placeholder="Write something about yourself.........."></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-inner">
                            <button class="primry-btn-2 lg-btn w-unset" @click="handleProfileUpdate">Update Profile</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="form-wrapper">
            <div class="section-title">
                <h5>Social Network:</h5>
            </div>
            <form class="profile-form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>Facebook</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/facebook-2.svg" alt="">
                                <input type="text" v-model="socialForm.facebook" placeholder="https://example-facebook.com">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>Twitter</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/twiter-2.svg" alt="">
                                <input type="text" v-model="socialForm.twitter" placeholder="https://example-twitter.com">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>LinkedIn</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/linkedin-2.svg" alt="">
                                <input type="text" v-model="socialForm.linkedIn" placeholder="https://example-linkedin.com">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>Pinterest</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/pinterest-2.svg" alt="">
                                <input type="text" v-model="socialForm.pinterest"
                                    placeholder="https://example-pinterest.com">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-inner mb-25">
                            <label>Dribbble</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/dribble-2.svg" alt="">
                                <input type="text" v-model="socialForm.dribbble" placeholder="https://example-dribbble.com">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-inner mb-50">
                            <label>Behance</label>
                            <div class="input-area">
                                <img src="/assets/images/icon/behance-2.svg" alt="">
                                <input type="text" v-model="socialForm.behance" placeholder="https://example-behance.com">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-inner">
                            <button class="primry-btn-2 lg-btn w-unset" @click="handleUpdateSocialLink">Edit Social</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
