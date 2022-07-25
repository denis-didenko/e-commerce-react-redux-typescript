import { baseApi } from '../index.api';
import { ILogin } from './auth.types';

const authApi = baseApi.injectEndpoints({
    endpoints: build => ({
        login: build.mutation({
            query: (credentials: ILogin) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;
