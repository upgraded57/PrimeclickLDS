import axios from "axios";
import { axiosInstance } from "../../Utils/AxiosInstance";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { useState } from "react";

const baseURL = "https://walrus-app-ximsj.ondigitalocean.app";

// register user
const register = (signupData) => {
  return axios.post(`${baseURL}/api/register/`, signupData);
};

export const useRegisterUser = () => {
  return useMutation(register, {
    onSuccess: (data) => console.log(data.data),
  });
};

// login user
const login = (loginData) => {
  return axios.post(`${baseURL}/api/token/`, loginData);
};
export const useLoginUser = () => {
  return useMutation(login, {
    onSuccess: (data) => {
      const access_token = data.data.access;
      const refresh_token = data.data.refresh;
      const user = data.data.user;
      const tokens = { access: access_token, refresh: refresh_token };
      localStorage.setItem("tokens", JSON.stringify(tokens));
      localStorage.setItem("user", JSON.stringify(user));
    },
  });
};

// forgot password
const forgotPassword = (mail) => {
  return axios.post(`${baseURL}/forgot-password/`, mail);
};

export const useForgotPassword = () => {
  return useMutation(forgotPassword, {
    onSuccess: (data) =>
      localStorage.setItem("resetUserId", JSON.stringify(data.data.user_id)),
  });
};

// verify OTP
const verifyOTP = (otp) => {
  return axios.post(`${baseURL}/verify-password-otp/`, otp);
};

export const useVerifyOTP = () => {
  return useMutation(verifyOTP, {
    onSuccess: (data) => console.log(data.data),
  });
};
