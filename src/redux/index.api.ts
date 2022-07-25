import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './index';

//const BASE_URL = 'http://api.fakeshop-api.com';
const BASE_URL = 'https://fakestoreapi.com';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        //credentials: 'include',
        prepareHeaders: (headers, api) => {
            const { auth } = api.getState() as RootState;
            if (auth.isAuthenticated) {
                headers.set('Authorization', `Bearer ${auth.token}`);
            }
            return headers;
        },
    }),
    endpoints: build => ({}),
});
