import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './../index';
import { IUserResponse } from './users.types';

interface UserState {
    users: IUserResponse[];
    user: IUserResponse | null;
}

const initialState: UserState = {
    users: [],
    user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state: UserState, action: PayloadAction<IUserResponse[]>) => {
            state.users = action.payload;
        },
        setUser: (state: UserState, action: PayloadAction<IUserResponse>) => {
            state.user = action.payload;
        },
    },
});

export const { setUsers, setUser } = userSlice.actions;
export default userSlice.reducer;

export const selectUsers = (state: RootState) => state.user.users;
export const selectUser = (state: RootState) => state.user.user;
