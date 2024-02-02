import { defineStore } from "pinia";
import { AuthState, LoginPayload } from "../../types";
import { loginSuccess, login, logout } from "./actions";

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    isAuthenticated: false,
    userData: null,
  }),
  actions: {
    loginSuccess(userData: AuthState) {
      loginSuccess(this, userData);
    },
    async login(payload: LoginPayload) {
      await login(this, payload);
    },
    logout() {
      logout(this);
    },
  },
});
