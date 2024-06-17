// src/services/axiosConfig.ts

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://rimac-front-end-challenge.netlify.app",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
});


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo de errores
    if (error.response && error.response.status === 401) {
      // Manejar la expiración del token, redireccionar al login, etc.
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
