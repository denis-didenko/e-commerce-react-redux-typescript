import { RootState } from './../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string;
    isAuthenticated: boolean;
}

interface AuthAction {
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
        setCredentials: (state: AuthState, action: PayloadAction<AuthAction>) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        },
        logout: (state: AuthState) => {
            state.isAuthenticated = false;
            state.token = '';
            localStorage.removeItem('token');
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectToken = (state: RootState) => state.auth.token;
