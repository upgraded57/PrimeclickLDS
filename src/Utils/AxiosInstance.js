import axios from "axios";
const tokens = JSON.parse(localStorage.getItem("tokens"));
export const axiosInstance = axios.create({
  baseURL: "https://dolphin-app-lg4zj.ondigitalocean.app",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${tokens.access}`;
  return config;
});
