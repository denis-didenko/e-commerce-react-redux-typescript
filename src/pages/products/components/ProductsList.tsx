import { FC, useState } from 'react';
import { useGetProductsQuery } from '../../../redux/products/product.api';
import { IGetProductsProps } from '../../../redux/products/product.types';
import ProductItem from './ProductItem';
import Pagination from '../../../components/Pagination';
import Loading from '../../../components/Loading';
import '../products.css';

const ProductsList: FC<IGetProductsProps> = ({ limit = 10, skip = 0, hasPagination = true }) => {
    const [activePage, setActivePage] = useState(1);
    const { data, isLoading } = useGetProductsQuery({ limit, skip: (activePage - 1) * limit });

    if (isLoading) return <Loading />;
    if (!data?.products) return <p>Products not found</p>;

    const { limit: visibleItems, total: totalItems } = data;

    return (
        <>
            <div className='products-list'>
                {data?.products.map(product => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </div>
            {hasPagination && (
                <Pagination activePage={activePage} setActivePage={setActivePage} visibleItems={visibleItems} totalItems={totalItems} />
            )}
        </>
    );
};

export default ProductsList;
