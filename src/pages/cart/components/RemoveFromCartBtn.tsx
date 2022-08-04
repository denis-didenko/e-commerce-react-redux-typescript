import { FC } from 'react';
import useActions from '../../../redux/hooks/useActions';

interface IRemoveFromCartBtnProps {
    id: number;
    children?: React.ReactNode;
}

const RemoveFromCartBtn: FC<IRemoveFromCartBtnProps> = ({ id, children }) => {
    const { removeFromCartProduct } = useActions();

    return (
        <button className='remove-from-cart-btn' data-product-id={id} onClick={() => removeFromCartProduct(id)}>
            {children}
        </button>
    );
};

export default RemoveFromCartBtn;
