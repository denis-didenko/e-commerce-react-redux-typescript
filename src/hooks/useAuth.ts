import { useEffect } from 'react';
import { useLazyGetUserQuery } from '../redux/auth/auth.api';
import { useAuthUserSelector } from '../redux/auth/auth.slice';
import useActions from '../redux/hooks/useActions';

export const useCheckAuthenticated = () => {
  const user = useAuthUserSelector();

  return user ? { user, isAuthenticated: true } : { user, isAuthenticated: false };
};

export const useAuth = () => {
  const { setAuthToken, setUser } = useActions();
  const [getUser] = useLazyGetUserQuery();

  async function initUser(id: string) {
    const { data } = await getUser(id);
    data && setUser(data);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    token && setAuthToken({ token });

    const id = localStorage.getItem('userId');
    id && initUser(id);
  }, []); // eslint-disable-line
};
