import { useUserStore } from "..";
import { AuthState, LoginPayload } from "../../types";
import axios_custom from "../../utils/axios_custom";

export function loginSuccess(state: any, data: AuthState) {
    state.isAuthenticated = true;
    state.token = data.token
}

export async function login(state: any, { email, password }: LoginPayload) {
    const userStore = useUserStore();
    try {
        const response = await axios_custom.post("login", { email, password });
        const { data, message } = response?.data;
        alert(message);
        state.loginSuccess({ token: data?.token });
        userStore.setUser({ ...data?.user });
        return true;
    } catch (error) {
        console.error("Login failed:", error);
        // throw error;
        return false;
    }
}

export function logout(state: any) {
    state.user = null;
    state.token = null;
    state.isAuthenticated = false;
}
