import axios from "axios";
import { axiosInstance } from "../../Utils/AxiosInstance";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { useState } from "react";

const baseURL = "https://walrus-app-ximsj.ondigitalocean.app";

// // forgot password
// const forgotPassword = (mail) => {
//   return axios.post(`${baseURL}/forgot-password/`, mail);
// };

// export const useForgotPassword = () => {
//   return useMutation(forgotPassword, {
//     onSuccess: (data) =>
//       localStorage.setItem("resetUserId", JSON.stringify(data.data.user_id)),
//   });
// };

// register new user
export const registerUser = async (
  signupData,
  setNewUserData,
  setOtpModalActive
) => {
  const toastId = toast.loading("Creating your account");
  await axios
    .post(`${baseURL}/api/register/`, signupData)
    .then((res) => {
      setNewUserData(res.data);
      toast.success("Account creation successful", {
        id: toastId,
      });
      setOtpModalActive(true);
    })
    .catch((err) => {
      if (err.response.data.email) {
        toast.error(`Account creation failed. ${err.response.data.email}`, {
          id: toastId,
        });
      } else if (err.response.data.phone_number[0]) {
        toast.error(
          `Account creation failed. ${err.response.data.phone_number[0]}`,
          {
            id: toastId,
          }
        );
      } else {
        toast.error("Something went wrong. Please retry", {
          id: toastId,
        });
      }
      console.log(err);
    });
};

// login
export const loginUser = async (loginData, setUser, navigate) => {
  const toastId = toast.loading("Signing In...");
  await axios
    .post(`${baseURL}/api/token/`, loginData)
    .then((res) => {
      const access_token = res.data.access;
      const refresh_token = res.data.refresh;
      const user = res.data.user;
      const tokens = { access: access_token, refresh: refresh_token };
      localStorage.setItem("tokens", JSON.stringify(tokens));
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      toast.success("Login Successful", {
        id: toastId,
      });
      navigate("/dashboard");
    })
    .catch((err) => {
      if (err.response.data.non_field_errors[0]) {
        toast.error(
          `Sign in failed. ${err.response.data.non_field_errors[0]}`,
          {
            id: toastId,
          }
        );
      } else {
        toast.error("Something went wrong. Please retry", {
          id: toastId,
        });
        console.log(err);
      }
    });
};

// forgot password
// const [resetUserId, setResetUserId] = useState("");
export const forgotPassword = async (mail, setResetUserId) => {
  const toastId = toast.loading("Sending OTP");
  await axios
    .post(`${baseURL}/forgot-password/`, mail)
    .then((res) => {
      setResetUserId(res.data.user_id);
      toast.success("OTP sent to your mail", {
        id: toastId,
      });
    })
    .catch((err) => {
      toast.error("Something went wrong. Please retry", {
        id: toastId,
      });
      console.log(err);
    });
};

// verify OTP
export const OTPVerify = async (otp) => {
  const toastId = toast.loading("Verifying OTP...");
  await axios
    .post(`${baseURL}/verify-password-otp/`, otp)
    .then((res) => {
      console.log(res.data);
      toast.success("OTP verification successful. Please Sign in", {
        id: toastId,
      });
      window.location("/auth");
    })

    .catch((err) => {
      toast.error("Please check the OTP and retry", {
        id: toastId,
      });
      console.log(err);
    });
};
