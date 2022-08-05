import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Header from './header';
import Footer from './footer';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';
import { useProducts } from '../../hooks/useProducts';

type LayoutProps = {
    children?: ReactNode;
};

const Layout: FC<LayoutProps> = () => {
    useAuth();

    const { data, error, isLoading, isSuccess } = useProducts();
    if (isLoading && !isSuccess) return <Loading />;
    if (error) return <ErrorMessage error={error} />;

    if (data) {
        return (
            <div className='wrapper'>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        );
    }

    return null;
};

export default Layout;
