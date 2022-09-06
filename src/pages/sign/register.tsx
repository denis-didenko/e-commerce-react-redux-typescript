import { useState, FC, FormEvent, FocusEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { useRegisterMutation } from '../../redux/auth/auth.api';
import useActions from '../../redux/hooks/useActions';
import './sign.css';

const Register: FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [inputError, setInputError] = useState('');
  const [inputSuccess, setInputSuccess] = useState('');
  const [register] = useRegisterMutation();
  const { setAuthToken, setUser } = useActions();
  const navigate = useNavigate();

  const inputBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValidForm = () => {
    const { email, password, firstName, lastName } = formData;
    if (!email.length || !password.length || !firstName.length || !lastName.length) {
      setInputError('Please fill in all fields');
      return false;
    }

    return true;
  };

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidForm()) return;

    await register(formData)
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
            <input type='email' name='email' placeholder='Email:' onChange={inputBlurHandler} />
            <EmailOutlinedIcon />
          </div>
        </div>
        <div className='form-item'>
          <div className='form-field with-icon'>
            <input
              type='text'
              name='firstName'
              placeholder='FirstName:'
              onChange={inputBlurHandler}
            />
            <PersonIcon />
          </div>
        </div>
        <div className='form-item'>
          <div className='form-field with-icon'>
            <input
              type='text'
              name='lastName'
              placeholder='LastName:'
              onChange={inputBlurHandler}
            />
            <PersonIcon />
          </div>
        </div>
        <div className='form-item'>
          <div className='form-field with-icon'>
            <input
              type='password'
              name='password'
              placeholder='Password:'
              onChange={inputBlurHandler}
            />
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
