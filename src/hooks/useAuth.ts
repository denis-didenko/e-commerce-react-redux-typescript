import { useEffect } from 'react';
import { useLazyGetUserQuery } from '../redux/users/users.api';
import { selectUser } from './../redux/users/users.slice';
import { useTypedSelector } from './../redux/hooks/useTypedSelector';
import useActions from '../redux/hooks/useActions';

export const useCheckAuth = () => {
    const user = useTypedSelector(selectUser);
    return user ? { user, isAuthenticated: true } : { user, isAuthenticated: false };
};

export const useAuth = () => {
    console.count('useAuth: ');
    const { setAuthToken, setUser } = useActions();
    const [getUser] = useLazyGetUserQuery();

    useEffect(() => {
        const token = localStorage.getItem('token');
        token && setAuthToken({ token });

        const id = localStorage.getItem('userId');
        id && initUser(id);
    }, []);

    async function initUser(id: string) {
        const { data } = await getUser(id);
        data && setUser(data);
    }
};
