import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useProducts } from '../../hooks/useProducts';
import Header from './header';
import Footer from './footer';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

const Layout: FC = () => {
    useAuth();

    const { error, isLoading, isSuccess } = useProducts();
    if (isLoading && !isSuccess) return <Loading />;
    if (error) return <ErrorMessage error={error} />;

    return (
        <div className='wrapper'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
