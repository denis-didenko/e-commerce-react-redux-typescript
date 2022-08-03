import { FC } from 'react';
import useActions from '../../../redux/hooks/useActions';

interface IAddToCartBtnProps {
    id: number;
    children?: React.ReactNode;
}

const AddToCartBtn: FC<IAddToCartBtnProps> = ({ id, children }) => {
    const { addToCartProduct } = useActions();

    const addToCartHandler = (id: number) => {
        const product = {
            id,
            quantity: 1,
        };

        addToCartProduct(product);
    };

    return (
        <button className='add-to-cart-btn' data-product-id={id} onClick={() => addToCartHandler(id)}>
            {children}
        </button>
    );
};

export default AddToCartBtn;
