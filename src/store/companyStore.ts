import { useAuthStore } from ".";
import { defineStore } from "pinia";
import { CompanyRegisterPayload } from "../types";
import axios_custom from "../utils/axios_custom";

export const useCompanyStore = defineStore("user", {
  state: () => ({
  }),
  actions: {
    async register({ firstName, lastName, email, companyName, companyType, password, username, }: CompanyRegisterPayload) {
      try {
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
    },
  },
});
