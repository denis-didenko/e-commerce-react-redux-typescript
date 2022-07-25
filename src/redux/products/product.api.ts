import { nanoid } from '@reduxjs/toolkit';
import { baseApi } from '../index.api';
import { IProduct, ICategory } from './product.types';

const productApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getProducts: build.query<IProduct, void>({
            query: () => '/products',
        }),
        getProduct: build.query<IProduct, { id: string }>({
            query: ({ id }) => `/products/${id}`,
        }),
        getCategories: build.query<ICategory[], void>({
            query: () => '/products/categories',
            transformResponse: (response: string[]) => {
                return response.map(category => ({
                    id: nanoid(),
                    name: category,
                }));
            },
        }),
    }),
    // overrideExisting: false,
});

export const { useGetProductsQuery, useGetProductQuery, useGetCategoriesQuery } = productApi;
