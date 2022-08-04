import { FC } from 'react';
import Cart from './components/Cart';
import { useCartProductsSelector } from '../../redux/cart/cart.slice';

const CartPage: FC = () => {
    const products = useCartProductsSelector();
    console.log('products: ', products);

    return (
        <div className='cart-page'>
            <h1>Shopping Cart</h1>
            <Cart products={products} />
        </div>
    );
};

export default CartPage;
