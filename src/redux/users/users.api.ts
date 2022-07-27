import { nanoid } from '@reduxjs/toolkit';
import { baseApi } from '../index.api';
import { IAddUser, IUserResponse } from './users.types';

const userApi = baseApi.injectEndpoints({
    endpoints: build => ({
        register: build.mutation<IUserResponse, IAddUser>({
            query: user => ({
                url: '/users/add',
                method: 'POST',
                body: user,
            }),
            transformResponse: (response: IUserResponse) => ({ ...response, token: nanoid() }),
        }),
    }),
});

export const { useRegisterMutation } = userApi;
