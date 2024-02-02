import { useAuthStore } from "..";
import { CompanyRegisterPayload } from "../../types";
import axios_custom from "../../utils/axios_custom";

export async function registerCompany(payload: CompanyRegisterPayload) {
    try {
        const { firstName, lastName, email, companyName, companyType, password, username } = payload;
        const response = await axios_custom.post("register-company", {
            first_name: firstName,
            last_name: lastName,
            email,
            companyName,
            companyType,
            password,
            username,
        });
        const authStore = useAuthStore();
        authStore.loginSuccess(response.data);
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
}
