import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useLoginMutation } from '../../redux/auth/auth.api';
import { ILogin } from '../../redux/auth/auth.types';
import useActions from '../../redux/hooks/useActions';
import './sign.css';

const Login = () => {
  const [inputError, setInputError] = useState('');
  const [inputSuccess, setInputSuccess] = useState('');
  const [login] = useLoginMutation();
  const { setAuthToken, setAuthUserId } = useActions();
  const navigate = useNavigate();

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget) as Iterable<[ILogin]>;
    const entries: ILogin = Object.fromEntries(formData);

    await login(entries)
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
          <div className='form-field with-icon'>
            <input type='text' name='username' placeholder='Username:' />
            <PersonIcon />
          </div>
          <p className='api-sign-example'>api example: kminchelle</p>
        </div>
        <div className={inputError.length ? 'form-item error-item' : 'form-item'}>
          <div className='form-field with-icon'>
            <input type='password' name='password' placeholder='Password:' />
            <LockOutlinedIcon />
          </div>
          <p className='api-sign-example'>api example: 0lelplR</p>
          <div className='form-error'>{inputError}</div>
          <div className='form-success'>{inputSuccess}</div>
        </div>
        <div className='form-submit'>
          <button type='submit'>Sign In</button>
        </div>
      </form>
      <div className='change-sign-form'>
        <p>
          If you haven&apos;t an account? <Link to='/register'>Sign Up here</Link>
        </p>
        <p>
          Back to <Link to='/'>Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
