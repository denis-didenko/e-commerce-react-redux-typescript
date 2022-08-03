import { baseApi } from '../index.api';
import { ICartResponse, IAddCartBody } from './cart.types';

const productApi = baseApi.injectEndpoints({
    endpoints: build => ({
        addCart: build.mutation<ICartResponse, IAddCartBody>({
            query: cart => ({
                url: '/carts/add',
                method: 'POST',
                body: cart,
            }),
        }),
        getCart: build.query<ICartResponse, void>({
            query: cart => ({
                url: '/carts/21',
                method: 'GET',
            }),
        }),
        updateCart: build.mutation<ICartResponse, IAddCartBody>({
            query: cart => ({
                url: '/carts/21',
                method: 'PUT',
                body: cart,
            }),
        }),
        deleteCart: build.mutation<ICartResponse, void>({
            query: cart => ({
                url: '/carts/21',
                method: 'DELETE',
            }),
        }),
    }),
});

export const {} = productApi;
