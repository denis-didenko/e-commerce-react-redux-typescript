import { FC, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import useActions from './redux/hooks/useActions';
import Layout from './components/Layout';
import Home from './pages/home';
import Categories from './pages/categories';
import Login from './pages/sign/login';
import Register from './pages/sign/register';
import Cart from './pages/cart';
import Profile from './pages/profile';
import AuthGuardedRoute from './pages/AuthGuardedRoute';

import './App.css';

const App: FC = () => {
    const { setCredentials } = useActions();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setCredentials({ token });
        }
    }, []);

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/categories' element={<Categories />} />

                <Route element={<AuthGuardedRoute />}>
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/profile' element={<Profile />} />
                </Route>

                <Route path='*' element={<Navigate to='/' />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    );
};

export default App;
