// src/services/axiosClient.js
import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",  // Sửa phần Accept thành application/json
    },
});

// // Gắn token nếu có
// axiosClient.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem("accessToken");
//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// });

export default axiosClient;
