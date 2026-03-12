import axios from 'axios';
import { authClient } from '@/lib/auth-client';

export const api = axios.create({
  baseURL: import.meta.env.PUBLIC_API_URL || 'http://localhost:8000',
});

api.interceptors.request.use(async (config) => {
  const { data } = await authClient.token();
  if (data?.token) {
    config.headers.Authorization = `Bearer ${data.token}`;
  }
  return config;
});
