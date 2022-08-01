import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './../index';
import { IToken, IUserId } from './auth.types';

interface AuthState {
    token: string;
    userId: number;
}

const initialState: AuthState = {
    token: '',
    userId: 0,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthToken: (state: AuthState, action: PayloadAction<IToken>) => {
            console.log('setAuthToken: ', setAuthToken);
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        },
        setAuthUserId: (state: AuthState, action: PayloadAction<IUserId>) => {
            state.userId = action.payload.userId;
            localStorage.setItem('userId', action.payload.userId.toString());
        },
        logout: (state: AuthState) => {
            console.log('logout');
            state.token = '';
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
        },
    },
});

export const { setAuthToken, setAuthUserId, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectToken = (state: RootState) => state.auth.token;
export const selectUserId = (state: RootState) => state.auth.userId;
