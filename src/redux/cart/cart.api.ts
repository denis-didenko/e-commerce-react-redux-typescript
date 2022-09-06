import { baseApi } from '../index.api';
import { IFetchCartResponse, IFetchCartBody } from './cart.types';

const productApi = baseApi.injectEndpoints({
  endpoints: build => ({
    addCart: build.mutation<IFetchCartResponse, IFetchCartBody>({
      query: cart => ({
        url: '/carts/add',
        method: 'POST',
        body: cart,
      }),
    }),
    getCart: build.query<IFetchCartResponse, void>({
      query: () => ({
        url: '/carts/21',
        method: 'GET',
      }),
    }),
    updateCart: build.mutation<IFetchCartResponse, IFetchCartBody>({
      query: cart => ({
        url: '/carts/21',
        method: 'PUT',
        body: cart,
      }),
    }),
    deleteCart: build.mutation<IFetchCartResponse, void>({
      query: () => ({
        url: '/carts/21',
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useAddCartMutation, useGetCartQuery } = productApi;
