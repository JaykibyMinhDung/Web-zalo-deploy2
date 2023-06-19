import axios from "axios";

const client = axios.create({
  baseURL: "http://api-nextcrm.nextcrm.vn/",
});

export default client;

// import axios from 'axios';

// import {COOKIE_HOSCO_ACCESS_TOKEN, removeCookie} from './cookies';

export const createAxiosInstance = (headers = []) => {
  const connect = axios.create({
    baseURL: "https://api-nextcrm.nextcrm.vn/api/",
    timeout: 60000,
  });
  connect.interceptors.request.use(
    (config) => {
      headers.forEach((item) => {
        config.headers[item.type] = item.value;
      });
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  connect.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        console.log(error);
      }
      return Promise.reject(error);
    }
  );
  return connect;
};
