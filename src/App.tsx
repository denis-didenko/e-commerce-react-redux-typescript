import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import ProductDetails from './pages/products/components/ProductIDetails';
import CategoriesPage from './pages/categories';
import CategoryDetails from './pages/categories/components/CategoryDetails';
import Login from './pages/sign/login';
import Register from './pages/sign/register';
import CartPage from './pages/cart';
import ProfilePage from './pages/profile';
import SearchPage from './pages/products/search';
import AuthGuardedRoute from './pages/AuthGuardedRoute';

import './App.css';

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='products'>
        <Route index element={<ProductsPage />} />
        <Route path=':id' element={<ProductDetails />} />
        <Route path='categories'>
          <Route index element={<CategoriesPage />} />
          <Route path=':category' element={<CategoryDetails />} />
        </Route>
        <Route path='search' element={<SearchPage />} />
      </Route>
      <Route path='cart' element={<CartPage />} />

      <Route element={<AuthGuardedRoute />}>
        <Route path='profile' element={<ProfilePage />} />
      </Route>
    </Route>

    <Route path='login' element={<Login />} />
    <Route path='register' element={<Register />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);

export default App;
