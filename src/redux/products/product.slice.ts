import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './../index';
import { useTypedSelector } from './../hooks/useTypedSelector';
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
        setProducts: (state: ProductState, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload;
        },
        setProduct: (state: ProductState, action: PayloadAction<IProduct>) => {
            state.product = action.payload;
        },
        setCategories: (state: ProductState, action: PayloadAction<ICategory[]>) => {
            state.categories = action.payload;
        },
    },
});

export const { setProducts, setProduct, setCategories } = productSlice.actions;
export default productSlice.reducer;

export const useProductsSelector = () => useTypedSelector((state: RootState) => state.product.products);
export const useProductByIdSelector = (id: number | string) =>
    useTypedSelector((state: RootState) => state.product?.products?.find(product => product.id === id));
