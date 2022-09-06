import { Outlet } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../redux/products/product.api';
import CategoriesList from './components/CategoriesList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import './categories.css';

const CategoriesPage = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!categories) return <p>No data</p>;

  return (
    <div className='categories'>
      <h1>Choose your favourite category</h1>
      <CategoriesList categories={categories} />
      <Outlet />
    </div>
  );
};

export default CategoriesPage;
