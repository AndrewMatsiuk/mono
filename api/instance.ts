import axios, { InternalAxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: 'https://api.monobank.ua/',
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});
