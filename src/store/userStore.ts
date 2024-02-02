import { useAuthStore } from ".";
import { defineStore } from "pinia";
import { UserRegisterPayload } from "../types";
import axios_custom from "../utils/axios_custom";

export const useUserStore = defineStore("user", {
  state: () => ({
  }),
  actions: {
    async register({ firstName, lastName, email, password, username, }: UserRegisterPayload) {
      try {
        const response = await axios_custom.post("register", {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          username,
        });
        const authStore = useAuthStore();
        authStore.loginSuccess(response.data);
      } catch (error) {
        console.error("Registration failed:", error);
        throw error;
      }
    },
  },
});
