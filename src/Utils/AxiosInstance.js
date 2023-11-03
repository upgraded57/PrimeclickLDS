import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dolphin-app-lg4zj.ondigitalocean.app",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = "";
  return config;
});
