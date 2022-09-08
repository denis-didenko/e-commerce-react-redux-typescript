import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { useRegisterMutation } from '../../redux/auth/auth.api';
import { IRegister } from '../../redux/auth/auth.types';
import useActions from '../../redux/hooks/useActions';
import './sign.css';

const Register = () => {
  const [inputError, setInputError] = useState('');
  const [inputSuccess, setInputSuccess] = useState('');
  const [register] = useRegisterMutation();
  const { setAuthToken, setUser } = useActions();
  const navigate = useNavigate();

  const isValidForm = (formData: IRegister) => {
    const { email, password, firstName, lastName } = formData;
    if (!email.length || !password.length || !firstName.length || !lastName.length) {
      setInputError('Please fill in all fields');
      return false;
    }

    return true;
  };

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget) as Iterable<[IRegister]>;
    const entries: IRegister = Object.fromEntries(formData);

    if (!isValidForm(entries)) return;

    await register(entries)
      .unwrap()
      .then(data => {
        const { token } = data;
        setAuthToken({ token });
        setUser(data);

        setInputError('');
        setInputSuccess('Registration successful');

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
      <h2>Register</h2>
      <form action='/register' onSubmit={formSubmitHandler}>
        <div className='form-item'>
          <div className='form-field with-icon'>
            <input type='email' name='email' placeholder='Email:' />
            <EmailOutlinedIcon />
          </div>
        </div>
        <div className='form-item'>
          <div className='form-field with-icon'>
            <input type='text' name='firstName' placeholder='FirstName:' />
            <PersonIcon />
          </div>
        </div>
        <div className='form-item'>
          <div className='form-field with-icon'>
            <input type='text' name='lastName' placeholder='LastName:' />
            <PersonIcon />
          </div>
        </div>
        <div className='form-item'>
          <div className='form-field with-icon'>
            <input type='password' name='password' placeholder='Password:' />
            <LockOutlinedIcon />
          </div>
          <div className='form-error'>{inputError}</div>
          <div className='form-success'>{inputSuccess}</div>
        </div>
        <div className='form-submit'>
          <button type='submit'>Sign Up</button>
        </div>
      </form>
      <div className='change-sign-form'>
        <p>
          If you have an account? <Link to='/login'>Sign In here</Link>
        </p>
        <p>
          Back to <Link to='/'>Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
