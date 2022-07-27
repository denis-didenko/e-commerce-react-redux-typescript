import { baseApi } from '../index.api';
import { ILogin, ILoginResponse } from './auth.types';

const authApi = baseApi.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<ILoginResponse, ILogin>({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;
