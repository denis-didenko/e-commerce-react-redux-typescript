import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { selectUser } from '../../redux/auth/auth.slice';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { useGetCategoriesQuery, useGetProductsQuery } from '../../redux/products/product.api';
import CategoriesList from '../categories/components/CategoriesList';
import ProductsList from '../products/components/ProductsList';
import Loading from '../../components/Loading';

const Home: FC = () => {
    console.count('Home: ');

    const { data: categories } = useGetCategoriesQuery();
    const { data, isLoading } = useGetProductsQuery({ limit: 4, skip: 0 });
    const user = useTypedSelector(selectUser);

    if (!data || !categories || isLoading) return <Loading />;

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
            <ProductsList products={data.products} />

            <Outlet />
        </div>
    );
};

export default Home;
