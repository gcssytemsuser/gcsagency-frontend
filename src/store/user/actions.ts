import { useAuthStore, useUserStore } from "..";
import { UserDataPayload, UserRegisterPayload, UserSocialNetworkPayload } from "../../types";
import axios_custom from "../../utils/axios_custom";

export async function registerUser(payload: UserRegisterPayload) {
    try {
        const { first_name, last_name, email, password, username } = payload;
        const response = await axios_custom.post("register", {
            first_name: first_name,
            last_name: last_name,
            email,
            password,
            username,
            role_id: 1
        });

        const { message } = response?.data;
        alert(message);
        // authStore.loginSuccess(data);
        // useUserStore().setUser(data)
        return true;
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
}

export async function fetchUserDetails(state: any) {
    const authStore = useAuthStore();
    try {
        const response = await axios_custom.get('/user/details', {
            headers: { 'Authorization': `Bearer ${authStore.token}` }
        });
        state.user = response.data;
        state.isAuthenticated = true;
    } catch (error) {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
    }
}

export async function updateProfile(state: any, payload: UserDataPayload) {
    const authStore = useAuthStore();
    try {
        axios_custom.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.getToken
        const response = await axios_custom.post("create-candidate-basic-profile", {
            first_name: payload.first_name,
            age: payload.age,
            email: payload.email,
            current_location: payload.current_location,
            current_company: payload.current_company,
            designation: payload.designation,
            year_of_exps: payload.year_of_exps,
            qualification: payload.qualification,
            phone_number: payload.phone_number,
            languages: payload.languages,
            career_obj: payload.career_obj,
            website_link: payload.website_link,
            description: payload.description

        });
        console.log('Update success', response.data);
        const { data, message } = response.data
        alert(message);
        state.setUser(data)
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
}

export async function addOrUpdateSocialNetwork(payload: UserSocialNetworkPayload) {
    const authStore = useAuthStore();
    try {
        axios_custom.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.getToken
        const response = await axios_custom.post("create-or-update-candidate-social-link", {
            facebook: payload.behance,
            twitter: payload.twitter,
            linked_in: payload.linkedIn,
            pinterest: payload.pinterest,
            dribbble: payload.dribbble,
            behance: payload.behance
        });
        const { data, message } = response?.data
        console.log('Update success', data);
        alert(message);
        useUserStore().setSocial({ ...data });
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
}

