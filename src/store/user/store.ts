import { defineStore } from "pinia";
import { UserDataPayload, UserRegisterPayload, UserSocialNetworkPayload } from "../../types";
import { addOrUpdateSocialNetwork, fetchUserDetails, registerUser, updateProfile } from "./actions";
import { setUser } from "./setter";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      first_name: '',
      last_name: '',
      age: '',
      email: '',
      current_location: '',
      current_company: '',
      designation: '',
      year_of_exps: '',
      qualification: '',
      phone_number: '',
      languages: '',
      career_obj: '',
      website_link: '',
      description: ''
    },
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    async register(payload: UserRegisterPayload) {
      return await registerUser(payload);
    },
    async fetchUserDetails() {
      await fetchUserDetails(this);
    },
    async updateProfile(payload: UserDataPayload) {
      await updateProfile(this, payload);
    },
    async addOrUpdateSocialNetwork(payload: UserSocialNetworkPayload) {
      await addOrUpdateSocialNetwork(payload);
    },
    async setUser(payload: UserDataPayload) {
      await setUser(this, payload);
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: sessionStorage,
        paths: ['user']
      }
    ]
  }
});
