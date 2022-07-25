import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import Categories from './pages/categories';
import Login from './pages/sign/login';
import Register from './pages/sign/register';
import Cart from './pages/cart';
import Profile from './pages/profile';

import './App.css';

const App: FC = () => {
    return (
        // <Layout>
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
        // </Layout>
    );
};

export default App;
