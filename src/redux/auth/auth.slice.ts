import { RootState } from './../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string;
    isAuthenticated: boolean;
}

interface AuthResponse {
    token: string;
}

const initialState: AuthState = {
    token: '',
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state: AuthState, action: PayloadAction<AuthResponse>) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state: AuthState) => {
            state.token = '';
            state.isAuthenticated = false;
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectToken = (state: RootState) => state.auth.token;
