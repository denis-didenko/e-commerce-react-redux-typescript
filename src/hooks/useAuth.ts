import { useTypedSelector } from './../redux/hooks/useTypedSelector';
import { selectIsAuthenticated, selectToken } from './../redux/auth/auth.slice';

export const useAuth = () => {
    const isAuthenticated = useTypedSelector(selectIsAuthenticated);
    const token = useTypedSelector(selectToken);

    return { isAuthenticated, token };
};
