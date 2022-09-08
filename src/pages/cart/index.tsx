import { useState, useEffect } from 'react';
import Cart from './components/Cart';
import { useCartProductsSelector } from '../../redux/cart/cart.slice';
import useActions from '../../redux/hooks/useActions';

const CartPage = () => {
  const [isSubmitOrder, setIsSubmitOrder] = useState(false);
  const { clearCart } = useActions();
  const products = useCartProductsSelector();

  useEffect(() => {
    if (isSubmitOrder) {
      clearCart();
    }
  }, [isSubmitOrder]);

  return (
    <div className='cart-page'>
      <h1>Shopping Cart</h1>
      {!isSubmitOrder ? (
        <Cart products={products} setIsSubmitOrder={setIsSubmitOrder} />
      ) : (
        <p>Thank you for your order!</p>
      )}
    </div>
  );
};

export default CartPage;
