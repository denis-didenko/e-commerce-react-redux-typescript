import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ICartProducts } from './cart.types';

interface CartState {
  products: ICartProducts[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartProduct: {
      reducer: (state: CartState, action: PayloadAction<ICartProducts>) => {
        const selectedProduct = state.products.find(product => product.id === action.payload.id);
        if (selectedProduct) {
          selectedProduct.quantity += 1;
          return;
        }

        state.products.push(action.payload);
      },
      prepare: (product: ICartProducts) => ({
        payload: product,
      }),
    },
    removeFromCartProduct: (state: CartState, action: PayloadAction<number>) => {
      const selectedProduct = state.products.find(product => product.id === action.payload);
      if (selectedProduct && selectedProduct.quantity > 1) {
        selectedProduct.quantity -= 1;
        return;
      }

      /* eslint-disable no-param-reassign */
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    deleteCartItem: (state: CartState, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    clearCart: (state: CartState) => {
      state.products = [];
    },
  },
});

export const { addToCartProduct, removeFromCartProduct, deleteCartItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

export const useCartProductsSelector = () =>
  useTypedSelector((state: RootState) => state.cart.products);
