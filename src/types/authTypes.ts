export interface LoginPayload {
    email: string;
    password: string;
}
export interface AuthState {
    isAuthenticated: boolean;
    token: null
}

