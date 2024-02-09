import { defineStore } from "pinia";
import { UserRegisterPayload, UserSocialNetworkPayload, UserUpdatePayload } from "../../types";
import { addOrUpdateSocialNetwork, registerUser, updateProfile } from "./actions";

export const useUserStore = defineStore("user", {
  state: () => ({
  }),
  getters: {},
  actions: {
    async register(payload: UserRegisterPayload) {
      await registerUser(payload);
    },
    async updateProfile(payload: UserUpdatePayload) {
      await updateProfile(payload);
    },
    async addOrUpdateSocialNetwork(payload: UserSocialNetworkPayload) {
      await addOrUpdateSocialNetwork(payload);
    }
  }
});
