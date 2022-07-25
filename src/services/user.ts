import { AxiosInstance } from 'axios';
import API from '../api';

interface IUser {
    email: string;
    password: string;
}

interface IUserResponse {
    message: string;
    token?: string;
}

class UserService {
    API;

    constructor(API: AxiosInstance) {
        this.API = API;
    }

    async login(user: IUser) {
        try {
            const response = await this.API.post<IUserResponse>('/users/signin', user);

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }

            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async register(user: IUser) {
        try {
            const response = await this.API.post('/users/signup', user);

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }

            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new UserService(API);
