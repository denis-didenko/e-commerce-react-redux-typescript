import { FC, ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

type LayoutProps = {
    children?: ReactNode;
};

const Layout: FC<LayoutProps> = props => {
    return (
        <div className='wrapper'>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
