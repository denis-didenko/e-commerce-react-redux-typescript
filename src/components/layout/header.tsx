import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Header: FC = () => {
    const token = useAuth();

    return (
        <header>
            <Link to='/' className='logo'>
                Logo
            </Link>
            <div className='header-nav'>
                {token && (
                    <Link to='/cart'>
                        <ShoppingCartOutlinedIcon />
                    </Link>
                )}
                {!token && (
                    <Link to='/login'>
                        <PersonOutlineOutlinedIcon />
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
