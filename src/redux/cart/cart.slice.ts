import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IAddCartProduct } from './cart.types';

interface CartState {
    products: IAddCartProduct[];
}

const initialState: CartState = {
    products: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCartProduct: (state: CartState, action: PayloadAction<IAddCartProduct>) => {
            const selectedProduct = state.products.find(product => product.id === action.payload.id);
            if (selectedProduct) {
                selectedProduct.quantity += 1;
                return;
            }

            state.products.push(action.payload);
        },
        removeFromCartProduct: (state: CartState, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
    },
});

export const { addToCartProduct, removeFromCartProduct } = cartSlice.actions;
export default cartSlice.reducer;

export const useCartProductsSelector = () => useTypedSelector((state: RootState) => state.cart.products);
