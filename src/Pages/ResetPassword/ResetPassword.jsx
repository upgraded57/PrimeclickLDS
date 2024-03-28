import "../Auth/auth.css";
import "../ForgotPassword/forgotpassword.css";

// utils
import { useNavigate } from "react-router-dom";

// images
import logo from "../../assets/images/logo-alt.png";

// icons
import { BsArrowLeftCircle } from "react-icons/bs";
import Input from "../../Component/Input/Input";
import Button from "../../Component/button/Button";
import Modal from "./../../Component/Modal/Modal";
import { useState } from "react";
import Loader from "../../Component/Loader/Loader";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const updatePass = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModal(true);
    }, 1000);
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
            <h1 className="h-300">Cool, you can now reset your password</h1>
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

            <h2 className="h-200">Reset Password</h2>

            <p className="text-body">
              Kindly reset your password to have access to your account.
            </p>

            <div className="forgot-password__form">
              <form onSubmit={updatePass}>
                <Input
                  type="password"
                  label="New Password"
                  name="password"
                  placeholder="**** **** ****"
                />
                <Input
                  type="password"
                  label="New Password"
                  name="confirm-password"
                  placeholder="**** **** ****"
                />
                <Button variant="solid" type="submit" text="Update Password" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          header="Password reset successfully"
          text="Your account password has been updated, click on the button below to go to the login page"
          btnText="Go to login"
          setState={setModal}
          btnLocation="/auth"
        />
      )}
    </>
  );
}
