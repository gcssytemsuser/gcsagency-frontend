import { UserDataPayload } from "../../types";

export async function setUser(state: any, payload: UserDataPayload) {
    state.user = payload
    console.log({ payload });

}