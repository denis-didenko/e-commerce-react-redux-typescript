import { FC } from 'react';
import CartItem from './CartItem';
import { ICartProducts } from '../../../redux/cart/cart.types';

import '../cart.css';

interface ICartProps {
    products: ICartProducts[];
}

const Cart: FC<ICartProps> = ({ products }) => {
    if (!products.length) return <p>Cart is empty</p>;

    return (
        <>
            <div className='cart-list'>
                {products.map(cartProduct => (
                    <CartItem key={cartProduct.id} {...cartProduct} />
                ))}
            </div>
        </>
    );
};

export default Cart;
