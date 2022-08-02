import { nanoid } from '@reduxjs/toolkit';
import { baseApi } from '../index.api';
import { ILogin, ILoginResponse, IUserResponse, IRegister } from './auth.types';

const authApi = baseApi.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<ILoginResponse, ILogin>({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: build.mutation<IUserResponse, IRegister>({
            query: user => ({
                url: '/users/add',
                method: 'POST',
                body: user,
            }),
            transformResponse: (response: IUserResponse) => ({ ...response, token: nanoid() }),
        }),
        getUser: build.query<IUserResponse, string>({
            query: id => ({
                url: `/users/${id}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserQuery, useLazyGetUserQuery } = authApi;
