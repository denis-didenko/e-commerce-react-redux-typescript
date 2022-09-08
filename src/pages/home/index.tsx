import { Link } from 'react-router-dom';
import { useAuthUserSelector } from '../../redux/auth/auth.slice';
import { useGetCategoriesQuery } from '../../redux/products/product.api';
import { useProductsSelector } from '../../redux/products/product.slice';
import CategoriesList from '../categories/components/CategoriesList';
import ProductsList from '../products/components/ProductsList';

const HomePage = () => {
  const { data: categories } = useGetCategoriesQuery();
  const products = useProductsSelector();
  const user = useAuthUserSelector();

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
      <ProductsList products={products.slice(0, 8)} />
    </div>
  );
};

export default HomePage;
