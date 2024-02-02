export interface LoginPayload {
    email: string;
    password: string;
}
export interface AuthState {
    isAuthenticated: boolean;
    userData: Record<string, any> | null;
}

