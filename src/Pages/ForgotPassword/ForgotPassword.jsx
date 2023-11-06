import "../Auth/auth.css";
import "./forgotpassword.css";

// utils
import { useNavigate } from "react-router-dom";

// images
import logo from "../../assets/images/logo.png";

// icons
import { BsArrowLeftCircle } from "react-icons/bs";
import Input from "../../Component/Input/Input";
import Button from "../../Component/button/Button";
import { useState } from "react";
import Loader from "../../Component/Loader/Loader";
import OTPModal from "./../../Component/Modal/OTPModal";
import { useForgotPassword } from "../../ApiCalls/Auth/Auth";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [mail, setmail] = useState("");

  const {
    mutate: forgotPassword,
    isLoading: loading,
    isSuccess: modal,
  } = useForgotPassword();

  const resetPass = (e) => {
    e.preventDefault();

    forgotPassword({ email: mail });
  };

  return (
    <>
      {loading && <Loader type="spinner" />}
      <div className="auth">
        <div className="auth-right">
          <div className="auth-right__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="auth-right__content">
            <h1 className="h-300">
              It seems you&apos;ve forgotten your password
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              sunt culpa ullam placeat, asperiores doloremque vel nemo
              reiciendis amet ipsum.
            </p>
          </div>
        </div>

        <div className="auth-left">
          <div className="forgotten-password">
            <div
              className="forgotten-password__back_icon"
              onClick={() => navigate(-1)}
            >
              <BsArrowLeftCircle />
            </div>

            <h2 className="h-200">Forgot Password</h2>

            <p className="text-body">
              Please enter your account email address to reset your password
            </p>

            <div className="forgot-password__form">
              <form onSubmit={resetPass}>
                <Input
                  type="email"
                  label="Business Email"
                  name="email"
                  placeholder="johndoe@mail.com"
                  setValue={setmail}
                  required={true}
                />
                <Button variant="solid" type="submit" text="Reset Password" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <OTPModal
          header="Verification OTP sent"
          text={`A one-time verification code, has been sent to your 
          Email - ${mail} - to confirm its really you.`}
          btnText="Confirm"
        />
      )}
    </>
  );
}
