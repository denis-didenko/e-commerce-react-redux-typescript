import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { selectUser } from '../../redux/auth/auth.slice';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import ProductsList from '../products/components/ProductsList';

const Home: FC = () => {
    console.count('Home: ');

    const user = useTypedSelector(selectUser);
    console.log('userHome: ', user);

    return (
        <>
            <p>Hi, {user ? user.firstName : 'Guest'}</p>
            <h1>Welcome to React Store</h1>
            <div className='title'>
                <h2>Featured Products</h2>
                <Link to='/products'>See All</Link>
            </div>
            <ProductsList limit={4} hasPagination={false} />
            <Outlet />
        </>
    );
};

export default Home;
