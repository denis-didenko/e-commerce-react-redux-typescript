import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../redux/products/product.api';
import CategoriesList from './components/CategoriesList';
import Loading from '../../components/Loading';
import './categories.css';

const Categories: FC = () => {
    const { data: categories, isLoading } = useGetCategoriesQuery();

    if (!categories || isLoading) return <Loading />;

    return (
        <div className='categories'>
            <h1>Choose your favourite category</h1>
            <CategoriesList categories={categories} />
            <Outlet />
        </div>
    );
};

export default Categories;
