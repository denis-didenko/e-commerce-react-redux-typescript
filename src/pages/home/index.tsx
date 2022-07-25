import { FC } from 'react';
import { useGetProductsQuery } from '../../redux/products/product.api';

const Home: FC = () => {
    console.count('Home: ');
    const { data: products, isLoading, isError } = useGetProductsQuery();
    console.log('data: ', products);

    return <div>Home</div>;
};

export default Home;
