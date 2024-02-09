import { useAuthStore } from "..";
import { UserRegisterPayload, UserSocialNetworkPayload, UserUpdatePayload } from "../../types";
import axios_custom from "../../utils/axios_custom";

export async function registerUser(payload: UserRegisterPayload) {
    try {
        const { firstName, lastName, email, password, username } = payload;
        const response = await axios_custom.post("register", {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            username,
            role_id: 1
        });
        console.log('auth success', response.data);

        const authStore = useAuthStore();
        authStore.loginSuccess(response.data);
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
}

export async function updateProfile(payload: UserUpdatePayload) {
    const authStore = useAuthStore();
    try {
        axios_custom.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.getToken
        const response = await axios_custom.post("create-candidate-basic-profile", {
            id: authStore?.user?.id,
            first_name: payload.firstName,
            age: payload.age,
            email: payload.email,
            current_location: payload.currentLocation,
            current_company: payload.currentCompany,
            designation: payload.designation,
            year_of_exps: payload.yearOfExps,
            qualification: payload.qualification,
            phone_number: payload.phoneNumber,
            languages: payload.languages,
            career_obj: payload.careerObj,
            website_link: payload.websiteLink,
            description: payload.description
        });
        console.log('Update success', response.data);
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
        console.log('Update success', response.data);
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
}

