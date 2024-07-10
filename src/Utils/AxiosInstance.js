import { baseURL } from "../ApiCalls/baseUrl";

import axios from "axios";
export const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((config) => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));

  config.headers.Authorization = `Bearer ${tokens?.access}`;
  return config;
});
