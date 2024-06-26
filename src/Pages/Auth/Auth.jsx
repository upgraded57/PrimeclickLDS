import { useEffect, useState } from "react";
import "./auth.css";

// images
import logo from "../../assets/images/logo-alt.png";
import authImg from "../../assets/images/authImg.png";

// components
import OTPModal from "../../Component/Modal/OTPModal";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import { Link, useSearchParams } from "react-router-dom";

export default function Auth() {
  const [param, setParam] = useSearchParams();
  const [authState, setAuthState] = useState(param.get("type") || "login");
  const [otpModalActive, setOtpModalActive] = useState(false);

  // Sign up data
  const [cred, setCred] = useState({
    fullName: "",
    businessName: "",
    email: param.get("email") || "",
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
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
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
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
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
