import { AxiosInstance } from 'axios';
import API from '../api';

interface User {
    email: string;
    password: string;
}

class UserService {
    API;

    constructor(API: AxiosInstance) {
        this.API = API;
    }

    async login(user: User) {
        try {
            const response = await this.API.post('/users/signin', user);

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }

            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async register(user: User) {
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
