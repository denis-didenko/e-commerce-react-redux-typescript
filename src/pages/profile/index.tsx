import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../redux/auth/auth.slice';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import useActions from '../../redux/hooks/useActions';
import './profile.css';

const ProfilePage = () => {
  const user = useTypedSelector(selectUser);
  const { logout } = useActions();
  const navigate = useNavigate();

  if (!user) return <p>user not found</p>;

  const logoutHandler = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    logout();
    navigate('/');
  };

  const {
    image,
    email,
    firstName,
    lastName,
    age,
    birthDate,
    phone,
    address: { city },
    university,
  } = user;

  return (
    <div className='profile'>
      <div className='profile-header'>
        <div className='profile-pic'>
          <img src={image} alt='' />
        </div>
        <div className='profile-info'>
          <h2>{`${firstName} ${lastName}`}</h2>
          <p>{email}</p>
        </div>
      </div>
      <div className='profile-details'>
        <ul>
          <li>
            <strong>Age:</strong> {age}
          </li>
          <li>
            <strong>Birth Date:</strong> {birthDate}
          </li>
          <li>
            <strong>Phone:</strong> {phone}
          </li>
          <li>
            <strong>City:</strong> {city}
          </li>
          <li>
            <strong>University:</strong> {university}
          </li>
        </ul>
      </div>
      <button
        type='button'
        className='logout-btn'
        onClick={logoutHandler}
        onKeyPress={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
