import { useState, FC, FormEvent, FocusEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/auth/auth.api';
import useActions from '../../redux/hooks/useActions';
import PersonIcon from '@mui/icons-material/Person';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './sign.css';

const Login: FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [inputError, setInputError] = useState('');
    const [inputSuccess, setInputSuccess] = useState('');
    const [login] = useLoginMutation();
    const { setAuthToken, setAuthUserId } = useActions();
    const navigate = useNavigate();

    const inputBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await login(formData)
            .unwrap()
            .then(data => {
                const { token, id } = data;
                setAuthToken({ token });
                setAuthUserId({ userId: id });

                setInputError('');
                setInputSuccess('Login successful');

                setTimeout(() => {
                    navigate('/');
                }, 1000);
            })
            .catch(err => {
                setInputError(err.data.message);
            });
    };

    return (
        <div className='reg-login-page'>
            <h2>Login</h2>
            <form action='/login' onSubmit={formSubmitHandler}>
                <div className={inputError.length ? 'form-item error-item' : 'form-item'}>
                    <div className='form-field'>
                        <input type='text' name='username' placeholder='Username:' onBlur={inputBlurHandler} />
                        <PersonIcon />
                    </div>
                </div>
                <div className={inputError.length ? 'form-item error-item' : 'form-item'}>
                    <div className='form-field'>
                        <input type='password' name='password' placeholder='Password:' onBlur={inputBlurHandler} />
                        <LockOutlinedIcon />
                    </div>
                    <div className='form-error'>{inputError}</div>
                    <div className='form-success'>{inputSuccess}</div>
                </div>
                <div className='form-submit'>
                    <button type='submit'>Sign In</button>
                </div>
            </form>
            <div className='change-sign-form'>
                <p>
                    If you haven't an account? <Link to='/register'>Sign Up here</Link>
                </p>
                <p>
                    Back to <Link to='/'>Home</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
