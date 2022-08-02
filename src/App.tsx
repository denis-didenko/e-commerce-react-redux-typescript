import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import Products from './pages/products';
import ProductDetails from './pages/products/components/ProductIDetails';
import Categories from './pages/categories';
import CategoryDetails from './pages/categories/components/CategoryDetails';
import Login from './pages/sign/login';
import Register from './pages/sign/register';
import Cart from './pages/cart';
import Profile from './pages/profile';
import AuthGuardedRoute from './pages/AuthGuardedRoute';

import './App.css';

const App: FC = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='products'>
                    <Route index element={<Products />} />
                    <Route path=':id' element={<ProductDetails />} />
                    <Route path='categories'>
                        <Route index element={<Categories />} />
                        <Route path=':category' element={<CategoryDetails />} />
                    </Route>
                </Route>
                <Route path='/cart' element={<Cart />} />

                <Route element={<AuthGuardedRoute />}>
                    <Route path='/profile' element={<Profile />} />
                </Route>
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};

export default App;
