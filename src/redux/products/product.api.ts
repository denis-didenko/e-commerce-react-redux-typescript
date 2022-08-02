import { nanoid } from '@reduxjs/toolkit';
import { baseApi } from '../index.api';
import { IProduct, IGetProductsProps, IGetProductsResponse, ICategory } from './product.types';

const productApi = baseApi
    // .enhanceEndpoints({
    //     addTagTypes: ['Product'],
    // })
    .injectEndpoints({
        endpoints: build => ({
            getProducts: build.query<IGetProductsResponse, IGetProductsProps>({
                query: ({ limit, skip }) => `/products?limit=${limit}&skip=${skip}`,
                //providesTags: ['Product'],
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
            getCategoryProducts: build.query<IGetProductsResponse, { category: string }>({
                query: ({ category }) => `/products/category/${category}`,
            }),
        }),
    });

export const { useGetProductsQuery, useGetProductQuery, useGetCategoriesQuery, useGetCategoryProductsQuery } = productApi;
