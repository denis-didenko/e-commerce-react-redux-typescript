import { FC } from 'react';
import { Link } from 'react-router-dom';
import { selectUser } from '../../redux/auth/auth.slice';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { useGetCategoriesQuery } from '../../redux/products/product.api';
import { useProductsSelector } from '../../redux/products/product.slice';
import CategoriesList from '../categories/components/CategoriesList';
import ProductsList from '../products/components/ProductsList';

const HomePage: FC = () => {
    const products = useProductsSelector();
    const homeProducts = products.slice(0, 8);

    const user = useTypedSelector(selectUser);

    const { data: categories } = useGetCategoriesQuery();
    if (!categories) return <p>No categories</p>;

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
        </div>
    );
};

export default HomePage;
