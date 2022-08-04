import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { FC } from 'react';
import './error.css';

interface IErrorProps {
    error: SerializedError | FetchBaseQueryError | undefined;
}

const ErrorMessage: FC<IErrorProps> = ({ error }) => {
    if (!error) return null;

    if ('status' in error) {
        // you can access all properties of `FetchBaseQueryError` here
        const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);

        return (
            <div className='error-message'>
                <p>An error has occurred:</p>
                <p>{errMsg}</p>
            </div>
        );
    } else {
        // you can access all properties of `SerializedError` here
        return <div className='error-message'>{error.message}</div>;
    }
};

export default ErrorMessage;
