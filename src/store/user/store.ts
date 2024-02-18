import { defineStore } from "pinia";
import { UserDataPayload, UserRegisterPayload, UserSocialNetworkPayload } from "../../types";
import { addOrUpdateSocialNetwork, fetchUserDetails, registerUser, updateProfile } from "./actions";
import { setSocial, setUser } from "./setter";

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
    social: {
      facebook: '',
      twitter: '',
      linkedIn: '',
      pinterest: '',
      dribbble: '',
      behance: ''
    },
  }),
  getters: {
    getUser: (state) => state.user,
    getSocial: (state) => state.social,
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
    },
    async setSocial(payload: UserSocialNetworkPayload) {
      await setSocial(this, payload);
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
