import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { selectUser } from '../../redux/auth/auth.slice';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { useGetCategoriesQuery, useGetProductsQuery } from '../../redux/products/product.api';
import CategoriesList from '../categories/components/CategoriesList';
import ProductsList from '../products/components/ProductsList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import useActions from '../../redux/hooks/useActions';

const HomePage: FC = () => {
    console.count('Home: ');

    const { setProducts } = useActions();
    const { data: categories } = useGetCategoriesQuery();
    const { data, error, isLoading } = useGetProductsQuery({ limit: 100, skip: 0 });
    const user = useTypedSelector(selectUser);

    if (isLoading) return <Loading />;
    if (error) return <ErrorMessage error={error} />;
    if (!data || !categories) return <p>No data</p>;

    setProducts(data.products);
    const homeProducts = data.products.slice(0, 8);

    return (
        <div className='home-page'>
            <p>Hi, {user ? user.firstName : 'Guest'}</p>
            <h1>Welcome to React Store</h1>

            <div className='title'>
                <h2>Featured Categories</h2>
                <Link to='/products/categories'>See All</Link>
            </div>
            <CategoriesList categories={categories} />

            <div className='title'>
                <h2>Featured Products</h2>
                <Link to='/products'>See All</Link>
            </div>
            <ProductsList products={homeProducts} />

            <Outlet />
        </div>
    );
};

export default HomePage;
