import ky from 'ky';
import { errorInterceptor } from './interceptors';

//
//

const API_URL = String(import.meta.env.VITE_API_URL) || '';

export const api = ky.create({
  prefixUrl: API_URL,
  timeout: 30000, // 30 sec
  retry: 3,
  headers: {
    accept: 'application/json',
  },
  hooks: {
    beforeError: [errorInterceptor],
  },
  cache: 'default',
  credentials: 'same-origin',
});
