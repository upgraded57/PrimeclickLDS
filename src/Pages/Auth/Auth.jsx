import { useState } from "react";
import "./auth.css";

// images
import logo from "../../assets/images/logo-alt.png";
import authImg from "../../assets/images/authImg.png";

// components
import OTPModal from "../../Component/Modal/OTPModal";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";

export default function Auth() {
  const [authState, setAuthState] = useState("login");
  const [otpModalActive, setOtpModalActive] = useState(false);

  // Sign up data
  const [cred, setCred] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    pass: "",
    confirmPass: "",
  });

  const AuthPage = authState === "signUp" ? SignupPage : LoginPage;

  return (
    <>
      <div className="auth">
        <div className="auth__left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="texts">
            <h2 className="h-200">The simplest lead management solution</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore{" "}
            </p>
          </div>
          <div className="authImg">
            <img src={authImg} alt="dashboard" />
          </div>
        </div>

        <div className="auth__right">
          {
            <AuthPage
              setAuthState={setAuthState}
              cred={cred}
              setCred={setCred}
              setOtpModalActive={setOtpModalActive}
            />
          }
        </div>

        {otpModalActive && (
          <OTPModal
            header="Account Verification OTP sent"
            text={`A one-time confirmation code, has been sent to your 
              Email - ${cred.email}. Use this code to validate your account.`}
            btnText="Confirm"
          />
        )}
      </div>
    </>
  );
}
