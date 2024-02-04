import { AuthState, LoginPayload } from "../../types";
import axios_custom from "../../utils/axios_custom";

export function loginSuccess(state: any, data: AuthState) {
    state.isAuthenticated = true;
    state.user = data.user;
    state.token = data.token
}

export async function login(state: any, { email, password }: LoginPayload) {
    try {
        const response = await axios_custom.post("login", { email, password });
        const { data } = response?.data;
        state.loginSuccess({ user: data?.user, token: data?.token });
        return true;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
        return false;
    }
}
export async function fetchUserDetails(state: any) {
    try {
        const response = await axios_custom.get('/user/details', {
            headers: { 'Authorization': `Bearer ${state.token}` }
        });
        state.user = response.data;
        state.isAuthenticated = true;
    } catch (error) {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
    }
}

export function logout(state: any) {
    state.user = null;
    state.token = null;
    state.isAuthenticated = false;
}
