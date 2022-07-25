import { baseApi } from '../index.api';
import { IUser } from './users.types';

const userApi = baseApi.injectEndpoints({
    endpoints: build => ({
        register: build.mutation({
            query: (user: IUser) => ({
                url: '/users',
                method: 'POST',
                data: user,
            }),
        }),
    }),
});

export const { useRegisterMutation } = userApi;
