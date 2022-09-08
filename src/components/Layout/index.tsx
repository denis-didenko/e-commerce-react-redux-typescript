import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useGetProductsQuery } from '../../redux/products/product.api';
import useActions from '../../redux/hooks/useActions';
import Header from './header';
import Footer from './footer';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

const Layout = () => {
  useAuth();

  const { setProducts } = useActions();
  const { data, error, isLoading, isSuccess } = useGetProductsQuery({ limit: 100, skip: 0 });

  useEffect(() => {
    if (isSuccess) {
      setProducts(data.products);
    }
  }, [data, isSuccess, setProducts]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
