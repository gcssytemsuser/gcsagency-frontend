import { defineStore } from "pinia";
import { UserRegisterPayload } from "../../types";
import { registerUser } from "./actions";

export const useUserStore = defineStore("user", {
  state: () => ({
  }),
  actions: {
    async register(payload: UserRegisterPayload) {
      await registerUser(payload);
    },
  },
});
