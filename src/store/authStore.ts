import { defineStore } from "pinia";
import { LoginPayload, AuthState } from "../types";
import axios_custom from "../utils/axios_custom";

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    isAuthenticated: false,
    userData: null,
  }),
  actions: {
    loginSuccess(userData: AuthState) {
      this.isAuthenticated = true;
      this.userData = userData;
    },
    async login({ email, password }: LoginPayload) {
      try {
        const response = await axios_custom.post("login", {
          email,
          password,
        });
        this.userData = response.data;
        this.isAuthenticated = true;
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    },
    logout() {
      this.userData = null;
      this.isAuthenticated = false;
    },
  },

});
