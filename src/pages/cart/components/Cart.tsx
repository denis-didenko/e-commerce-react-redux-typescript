import { FC } from 'react';
import CartItem from './CartItem';
import { ICartProducts } from '../../../redux/cart/cart.types';

import '../cart.css';

interface ICartProps {
  setIsSubmitOrder: (isSubmitOrder: boolean) => void;
  products: ICartProducts[];
}

const Cart: FC<ICartProps> = ({ products, setIsSubmitOrder }) => {
  if (!products.length) return <p>Cart is empty</p>;

  return (
    <>
      <div className='cart-list'>
        {products.map(cartProduct => (
          <CartItem key={cartProduct.id} {...cartProduct} />
        ))}
      </div>
      <div className='cart-summary'>
        <p>
          Total Items: <strong>{products.length}</strong>
        </p>
        <p>
          Total Price:{' '}
          <strong>
            {products.reduce((acc, cur) => acc + cur.quantity * cur.product.price, 0)} $
          </strong>
        </p>
        <button
          type='button'
          className='btn'
          onClick={() => setIsSubmitOrder(true)}
          onKeyDown={() => setIsSubmitOrder(true)}
        >
          Submit Order
        </button>
      </div>
    </>
  );
};

export default Cart;
