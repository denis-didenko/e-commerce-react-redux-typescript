import { FC } from 'react';
import './loading.css';

const Loading: FC = () => {
    return (
        <div className='loading-container'>
            <div className='loading'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;
