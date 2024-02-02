import { defineStore } from "pinia";
import { registerCompany } from "./actions";
import { CompanyRegisterPayload } from "../../types";

export const useCompanyStore = defineStore("company", {
  state: () => ({
  }),
  actions: {
    register(payload: CompanyRegisterPayload) {
      return registerCompany(payload);
    },
  },
});
