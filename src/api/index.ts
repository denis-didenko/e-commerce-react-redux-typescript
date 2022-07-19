import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const API_URL = 'http://api.fakeshop-api.com';

const API: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    validateStatus: () => true, // disable axios throwing for 400, 401, 403, 404, 500
});

API.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
        (config.headers ??= {}).Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
