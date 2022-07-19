import { useState, FC, FormEvent, FocusEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../services/user';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './sign.css';

const Login: FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const inputBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = await UserService.login(formData);
        console.log('login: ', data);
        if (data.message && !data.token) {
            setError(data.message);
            return;
        }
        if (data.message && data.token) {
            setError('');
            setSuccess(data.message);
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    };

    return (
        <div className='reg-login-page'>
            <h2>Login</h2>
            <form action='/login' onSubmit={formSubmitHandler}>
                <div className={error.length ? 'form-item error-item' : 'form-item'}>
                    <div className='form-field'>
                        <input type='email' name='email' placeholder='Email:' onBlur={inputBlurHandler} />
                        <EmailOutlinedIcon />
                    </div>
                </div>
                <div className={error.length ? 'form-item error-item' : 'form-item'}>
                    <div className='form-field'>
                        <input type='password' name='password' placeholder='Password:' onBlur={inputBlurHandler} />
                        <LockOutlinedIcon />
                    </div>
                    <div className='form-error'>{error}</div>
                    <div className='form-success'>{success}</div>
                </div>
                <div className='form-submit'>
                    <button type='submit'>Sign In</button>
                </div>
            </form>
            <div className='change-sign-form'>
                <p>
                    If you haven't an account? <Link to='/register'>Sign Up here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
