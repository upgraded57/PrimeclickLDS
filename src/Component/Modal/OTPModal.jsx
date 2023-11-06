import React, { useState } from "react";
import "./modal.css";
import Button from "./../button/Button";
import toast from "react-hot-toast";
import { OTPVerify } from "../../ApiCalls/Auth/Auth";

export default function OTPModal({ header, text, btnText, btnLocation }) {
  const [otp, setOtp] = useState("");

  const verifyOTP = () => {
    if (otp.length < 6) {
      toast.error("Please enter a valid OTP");
    } else {
      OTPVerify({ pass_otp: otp });
    }
  };

  return (
    <div className="modal">
      <div className="modal__backdrop"></div>
      <div className="modal__box">
        <h2 className="h-200">{header}</h2>
        <p className="text-body">{text}</p>
        <div className="otp-input">
          <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            id="otpInput"
            onChange={(e) => setOtp(e.target.value)}
            value={otp}
            required
          />
          <label htmlFor="otpInput">{Array.from(otp)[0]}</label>
          <label htmlFor="otpInput">{Array.from(otp)[1]}</label>
          <label htmlFor="otpInput">{Array.from(otp)[2]}</label>
          <label htmlFor="otpInput">{Array.from(otp)[3]}</label>
          <label htmlFor="otpInput">{Array.from(otp)[4]}</label>
          <label htmlFor="otpInput">{Array.from(otp)[5]}</label>
        </div>
        <Button
          variant="solid"
          type="button"
          text={btnText}
          clickEvent={verifyOTP}
        />
      </div>
    </div>
  );
}
