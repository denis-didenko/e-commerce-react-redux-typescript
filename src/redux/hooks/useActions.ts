import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authSlice } from '../auth/auth.slice';
import { productSlice } from '../products/product.slice';
import { userSlice } from '../users/users.slice';

const AllActions = {
    ...authSlice.actions,
    ...productSlice.actions,
    ...userSlice.actions,
};

const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(AllActions, dispatch);
};

export default useActions;
