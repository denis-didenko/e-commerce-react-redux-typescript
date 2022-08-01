import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useCheckAuth } from '../../hooks/useAuth';
import logo from '../../assets/images/logo.svg';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Header: FC = () => {
    const { isAuthenticated } = useCheckAuth();

    return (
        <header>
            <Link to='/' className='logo'>
                <img src={logo} height='40' alt='logo' />
            </Link>
            <div className='header-nav'>
                {isAuthenticated && (
                    <>
                        <Link to='/cart'>
                            <ShoppingCartOutlinedIcon />
                        </Link>
                        <Link to='/profile'>
                            <PersonOutlineOutlinedIcon />
                        </Link>
                    </>
                )}
                {!isAuthenticated && (
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
