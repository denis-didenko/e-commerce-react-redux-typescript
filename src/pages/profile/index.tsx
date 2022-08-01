import { FC } from 'react';
import { selectUser } from '../../redux/users/users.slice';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { logout } from '../../redux/auth/auth.slice';
import './profile.css';

const Profile: FC = () => {
    const user = useTypedSelector(selectUser);

    if (!user) return <p>user not found</p>;

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
                    <h2>{firstName + ' ' + lastName}</h2>
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
                className='logout-btn'
                onClick={e => {
                    console.log('e: ', e);
                    e.preventDefault();
                    logout();
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default Profile;
