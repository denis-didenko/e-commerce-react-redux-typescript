import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productSlice } from '../products/product.slice';

const AllActions = {
    ...productSlice.actions,
};

const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(AllActions, dispatch);
};

export default useActions;
