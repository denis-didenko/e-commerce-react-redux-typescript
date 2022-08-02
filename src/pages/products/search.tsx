import { FC, useState } from 'react';
import { useSearchProductsQuery } from '../../redux/products/product.api';
import ProductsList from './components/ProductsList';
import SearchForm from './components/SearchForm';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';

const Search: FC = () => {
    const [query, setQuery] = useState('');
    const [activePage, setActivePage] = useState(1);
    const { data, isLoading } = useSearchProductsQuery({ query });

    if (!data || isLoading) return <Loading />;

    const totalPages = Math.ceil(data.total / data.limit);

    return (
        <>
            <h1>Search Products</h1>
            <SearchForm setQuery={setQuery} />
            {query.length > 0 && (
                <>
                    <ProductsList products={data.products} />
                    <Pagination activePage={activePage} setActivePage={setActivePage} totalPages={totalPages} />
                </>
            )}
        </>
    );
};

export default Search;
