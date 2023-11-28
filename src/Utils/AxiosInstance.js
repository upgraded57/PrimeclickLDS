import { baseURL } from "../ApiCalls/baseUrl";

import axios from "axios";
const tokens = JSON.parse(localStorage.getItem("tokens"));
export const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${tokens.access}`;
  return config;
});
