import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

type LayoutProps = {
    children?: ReactNode;
};

const Layout: FC<LayoutProps> = () => {
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
