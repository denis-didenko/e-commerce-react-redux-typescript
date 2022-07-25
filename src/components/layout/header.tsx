import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import logo from '../../assets/images/logo.svg';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Header: FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <header>
            <Link to='/' className='logo'>
                <img src={logo} height='40' alt='logo' />
            </Link>
            <div className='header-nav'>
                {isAuthenticated && (
                    <Link to='/cart'>
                        <ShoppingCartOutlinedIcon />
                    </Link>
                )}
                {!isAuthenticated && (
                    <Link to='/login'>
                        <PersonOutlineOutlinedIcon />
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
