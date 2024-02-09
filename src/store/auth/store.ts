import { defineStore } from "pinia";
import { AuthState, LoginPayload } from "../../types";
import { loginSuccess, login, logout, fetchUserDetails } from "./actions";

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    isAuthenticated: false,
    user: null,
    token: null
  }),
  getters: {
    getToken: state => {
      return state.token;
    }
  },
  actions: {
    loginSuccess(loginData: AuthState) {
      loginSuccess(this, loginData);
    },
    async login(payload: LoginPayload) {
      return await login(this, payload);
    },
    logout() {
      logout(this);
    },
    fetchUserDetails() {
      fetchUserDetails(this);
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth',
        storage: sessionStorage,
        paths: ['isAuthenticated', 'user', 'token']
      }
    ]
  }
});
