import axios from "axios";

import config from "../config";

const instance = axios.create({
  baseURL: config.api.baseURL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    // Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.jwtToken}`,
  },
});

function createAxiosResponseInterceptor(axiosInstance) {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );
}

createAxiosResponseInterceptor(instance);

export default instance;
