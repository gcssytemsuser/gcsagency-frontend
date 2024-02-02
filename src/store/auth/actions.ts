import { AuthState, LoginPayload } from "../../types";
import axios_custom from "../../utils/axios_custom";


export function loginSuccess(state: AuthState, userData: AuthState) {
    state.isAuthenticated = true;
    state.userData = userData;
}

export async function login(state: AuthState, { email, password }: LoginPayload) {
    try {
        const response = await axios_custom.post("login", { email, password });
        loginSuccess(state, response.data);
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
}

export function logout(state: AuthState) {
    state.userData = null;
    state.isAuthenticated = false;
}
