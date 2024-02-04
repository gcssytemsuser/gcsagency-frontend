export interface LoginPayload {
    email: string;
    password: string;
}
export interface AuthState {
    isAuthenticated: boolean;
    user: Record<string, any> | null;
    token: null
}

