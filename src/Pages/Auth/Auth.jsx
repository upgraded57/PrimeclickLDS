import { useState } from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";

// images
import logo from "../../assets/images/logo.png";

// components
import Input from "../../Component/Input/Input";
import Button from "../../Component/button/Button";

// icons
import { FcGoogle } from "react-icons/fc";
import OTPModal from "../../Component/Modal/OTPModal";
import { useLoginUser, useRegisterUser } from "../../ApiCalls/Auth/Auth";
import toast from "react-hot-toast";

export default function Auth() {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState("login");
  const [otpModalActive, setOtpModalActive] = useState(false);

  // Sign up data
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const {
    mutate: registerUser,
    data: registerUserRes,
    isLoading: registerUserLoading,
    isSuccess: registerUserSuccess,
    // isError: registerUserError,
    error: registerUserError,
  } = useRegisterUser();

  // initialize toast id
  const signup = (e) => {
    e.preventDefault();
    const signupForm = document.getElementById("signupForm");
    const signupData = {
      first_name: fullName.split(" ")[0],
      last_name: fullName.split(" ")[1],
      email,
      phone_number: phone,
      business_name: businessName,
      password: pass,
      confirm_password: confirmPass,
    };

    if (signupForm.checkValidity()) {
      registerUser(signupData);
    } else {
      console.log(signupForm.reportValidity());
    }

    // show toast errors for different fields
    registerUserError?.response.data.email &&
      toast.error(registerUserError.response.data.email, { id: toastId });

    registerUserError?.response.data.phone_number &&
      toast.error(registerUserError.response.data.phone_number, {
        id: toastId,
      });

    registerUserError?.response.data.business_name &&
      toast.error(registerUserError.response.data.business_name, {
        id: toastId,
      });
  };

  // login
  const {
    mutate: loginUser,
    error: loginError,
    isLoading: loginLoading,
    isSuccess: loginSuccess,
  } = useLoginUser();
  const login = (e) => {
    e.preventDefault();
    const loginForm = document.getElementById("loginForm");

    const loginData = {
      email,
      password: pass,
    };

    if (loginForm.checkValidity()) {
      loginUser(loginData);
    } else {
      toast.error("One or more fields is invalid");
    }
  };

  // show error if login fails
  let toastId;
  if (loginLoading) {
    toastId = toast.loading("Signing you in");
    navigate("/dashboard");
  } else if (!loginLoading && loginSuccess) {
    toast.dismiss(toastId);
    toast.success("Sign in successful");
  } else if (!loginLoading && loginError) {
    toast.dismiss(toastId);
    toast.error(loginError.response.data.non_field_errors);
  }

  return (
    <>
      <div className="auth">
        <div className="auth-left">
          {authState === "signup" && (
            <>
              <h1 className="h-300">Sign Up</h1>
              <div className="auth-form">
                <form id="signupForm" onSubmit={signup}>
                  <Input
                    type="text"
                    label="Full Name"
                    name="fullName"
                    placeholder="Surname First"
                    setValue={setFullName}
                    required={true}
                  />
                  <Input
                    type="text"
                    label="Business Name"
                    name="businessName"
                    placeholder="John Doe"
                    required={true}
                    setValue={setBusinessName}
                  />
                  <Input
                    type="email"
                    label="Business Email"
                    name="email"
                    placeholder="johndoe@mail.com"
                    required={true}
                    setValue={setEmail}
                  />
                  <Input
                    type="text"
                    label="Phone Number"
                    name="phone"
                    placeholder="234 **** **** format"
                    required={true}
                    setValue={setPhone}
                    maxlength={13}
                  />
                  <Input
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="At least eight characters"
                    required={true}
                    setValue={setPass}
                    minLength="8"
                  />
                  <Input
                    type="password"
                    label="Confirm Password"
                    name="confirm-pass"
                    placeholder="At least eight characters"
                    required={true}
                    setValue={setConfirmPass}
                    minLength="8"
                  />
                  <Button
                    variant="solid"
                    type="submit"
                    text="Create Account"
                    clickEvent={signup}
                  />
                  <p className="text-body text-center">OR</p>

                  <Button
                    variant="outline"
                    text="Sign up with Google"
                    icon={<FcGoogle />}
                  />
                </form>
                <div className="flex aic jcc" style={{ gap: "10px" }}>
                  <p className="text-body">Already have an account?</p>
                  <p
                    className="text-link pointer"
                    onClick={() => setAuthState("login")}
                  >
                    Login
                  </p>
                </div>
              </div>
            </>
          )}

          {authState === "login" && (
            <>
              <h1 className="h-300">Login</h1>
              <div className="auth-form">
                <form onSubmit={login} id="loginForm">
                  <Input
                    type="email"
                    label="Business Email"
                    name="email"
                    placeholder="johndoe@mail.com"
                    required={true}
                    setValue={setEmail}
                  />
                  <div>
                    <Input
                      type="password"
                      label="Password"
                      name="password"
                      placeholder="**** **** ****"
                      required={true}
                      setValue={setPass}
                    />
                    <small
                      className="forgot-pass"
                      onClick={() => navigate("/forgot-password")}
                    >
                      Forgotten Password
                    </small>
                  </div>
                  <Button variant="solid" type="submit" text="Login" />
                  <p className="text-body text-center">OR</p>

                  <Button
                    variant="outline"
                    text="Log in with Google"
                    icon={<FcGoogle />}
                  />
                </form>
                <div className="flex aic jcc" style={{ gap: "10px" }}>
                  <p className="text-body">Don&apos;t have an account?</p>
                  <p
                    className="text-link pointer"
                    onClick={() => setAuthState("signup")}
                  >
                    Signup
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="auth-right">
          <div className="auth-right__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="auth-right__content">
            <h1 className="h-300">
              {authState === "signup"
                ? "Welcome to our platform"
                : "Good to have you back"}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              sunt culpa ullam placeat, asperiores doloremque vel nemo
              reiciendis amet ipsum.
            </p>
          </div>
        </div>
      </div>
      {otpModalActive && (
        <OTPModal
          header="Account Verification OTP sent"
          text="A one-time confirmation code, has been sent to your 
Email. Use this code to validate your account."
          btnText="Confirm"
        />
      )}
    </>
  );
}
