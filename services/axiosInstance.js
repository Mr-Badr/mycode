import axios from 'axios';
import { getToken } from '../utils/auth'; // Adjust path as per your project structure

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Assuming NEXT_PUBLIC_API_URL is defined in .env or elsewhere
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define maximum retry attempts and delay between retries
const maxRetryAttempts = 3;
const retryDelay = 1000; // 1 second delay

instance.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;

    // If response status is 429 (Too Many Requests), retry the request
    if (response && response.status === 429) {
      let retryCount = config.retryCount || 0;
      if (retryCount >= maxRetryAttempts) {
        // Max retries exceeded, handle error or throw it
        return Promise.reject(error);
      }

      // Exponential backoff strategy: increase delay exponentially with each retry
      await new Promise((resolve) => setTimeout(resolve, retryDelay * Math.pow(2, retryCount)));

      // Increment retry count and retry the request
      config.retryCount = retryCount + 1;
      return instance(config);
    }

    // For other errors, reject promise
    return Promise.reject(error);
  }
);

export default instance;
