import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetProductsQuery } from '../../redux/products/product.api';
import ProductsList from './components/ProductsList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Pagination from '../../components/Pagination';

const ProductsPage = () => {
  const [activePage, setActivePage] = useState(1);
  const { data, error, isLoading } = useGetProductsQuery({
    limit: 12,
    skip: (activePage - 1) * 10,
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <h1>Products</h1>
      <ProductsList products={data?.products} />
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        total={data?.total}
        limit={data?.limit}
      />
      <Outlet />
    </>
  );
};

export default ProductsPage;
