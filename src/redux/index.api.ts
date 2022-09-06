import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './index';

const BASE_URL = 'https://dummyjson.com';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,

    prepareHeaders: (headers, api) => {
      const { auth } = api.getState() as RootState;
      if (auth.token) {
        headers.set('Authorization', `Bearer ${auth.token}`);
      }
      return headers;
    },
  }),
  endpoints: build => ({}), // eslint-disable-line @typescript-eslint/no-unused-vars
});
