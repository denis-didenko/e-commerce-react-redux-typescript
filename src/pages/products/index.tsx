import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetProductsQuery } from '../../redux/products/product.api';
import ProductsList from './components/ProductsList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Pagination from '../../components/Pagination';

const ProductsPage: FC = () => {
    const [activePage, setActivePage] = useState(1);
    const { data, error, isLoading } = useGetProductsQuery({ limit: 10, skip: (activePage - 1) * 10 });

    if (isLoading) return <Loading />;
    if (error) return <ErrorMessage error={error} />;
    if (!data) return <p>No data</p>;

    const totalPages = Math.ceil(data.total / data.limit);

    return (
        <>
            <h1>Products</h1>
            <ProductsList products={data.products} />
            <Pagination activePage={activePage} setActivePage={setActivePage} totalPages={totalPages} />
            <Outlet />
        </>
    );
};

export default ProductsPage;
