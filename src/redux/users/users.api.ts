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
        getUsers: build.query<IUserResponse[], void>({
            query: () => ({
                url: '/users',
                method: 'GET',
            }),
        }),
        getUser: build.query<IUserResponse, string>({
            query: id => ({
                url: `/users/${id}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useRegisterMutation, useGetUsersQuery, useGetUserQuery, useLazyGetUserQuery } = userApi;
