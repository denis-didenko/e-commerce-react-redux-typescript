import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './index.api';
import authReducer from './auth/auth.slice';
import productReducer from './products/product.slice';
import userReducer from './users/users.slice';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authReducer,
        product: productReducer,
        user: userReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware), // need for cache
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
