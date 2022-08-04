import { FC } from 'react';
import { useCartProductsSelector } from '../../../redux/cart/cart.slice';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartICon: FC = () => {
    const products = useCartProductsSelector();

    return (
        <span className='cart-icon'>
            <ShoppingCartOutlinedIcon />
            <span className='cart-products-count'>{products.length}</span>
        </span>
    );
};

export default CartICon;
