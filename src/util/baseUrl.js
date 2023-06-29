import axios from "axios";

const client = axios.create({
  baseURL: "https://api-nextcrm.nextcrm.vn/",
});

export default client;

// import axios from 'axios';

// import {COOKIE_HOSCO_ACCESS_TOKEN, removeCookie} from './cookies';

export const createAxiosInstance = (headers = []) => {
  // Đường truyền mới
  const connect = axios.create({
    baseURL: "https://api-nextcrm.nextcrm.vn/api/",
    timeout: 60000,
  });
  // config request, in ra từng headers với mảng ở bên trên và giá trị định sẵn ở trên, trả về config đã sửa
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

  // config response, trả về response hoặc có thể trả về res.data để đỡ phải truy cập nhiều lớp
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
