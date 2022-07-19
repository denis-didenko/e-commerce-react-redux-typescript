import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/sign/login';
import Register from './pages/sign/register';
import Cart from './pages/cart';
import Profile from './pages/profile';

import './App.css';

const App: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};

export default App;
