import { useAuthStore } from "..";
import { UserRegisterPayload } from "../../types";
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
