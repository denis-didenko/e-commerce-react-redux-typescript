import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, ICategory } from './product.types';

interface ProductState {
    products: IProduct[];
    product: IProduct | null;
    categories: ICategory[];
}

const initialState: ProductState = {
    products: [],
    product: null,
    categories: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchProducts: (state: ProductState, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload;
        },
        fetchProduct: (state: ProductState, action: PayloadAction<IProduct>) => {
            state.product = action.payload;
        },
        fetchCategories: (state: ProductState, action: PayloadAction<ICategory[]>) => {
            state.categories = action.payload;
        },
    },
});

export const { fetchProducts, fetchProduct, fetchCategories } = productSlice.actions;
export default productSlice.reducer;
