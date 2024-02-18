import { UserDataPayload, UserSocialNetworkPayload } from "../../types";

export async function setUser(state: any, payload: UserDataPayload) {
    state.user = payload
    console.log({ payload });

}
export async function setSocial(state: any, payload: UserSocialNetworkPayload) {
    state.social = payload
    console.log({ payload });
}