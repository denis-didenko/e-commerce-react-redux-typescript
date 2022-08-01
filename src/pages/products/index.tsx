import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import ProductsList from './components/ProductsList';

const Products: FC = () => {
    return (
        <>
            <h1>Products</h1>
            <ProductsList />
            <Outlet />
        </>
    );
};

export default Products;
