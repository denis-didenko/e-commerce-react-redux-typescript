import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectToken } from './../redux/auth/auth.slice';

export const useAuth = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const token = useSelector(selectToken);

    return { isAuthenticated, token };
};
