import React from "react";
import "./modal.css";
import successIcon from "../../assets/images/success.png";
import Button from "./../button/Button";
import { useNavigate } from "react-router-dom";

export default function Modal({
  header,
  text,
  btnText,
  btnLocation,
  setState,
}) {
  const navigate = useNavigate();
  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={() => setState(false)}></div>
      <div className="modal__box">
        <h2 className="h-200">{header}</h2>
        <img src={successIcon} alt="" />
        <p className="text-body">{text}</p>
        <Button
          variant="solid"
          type="button"
          text={btnText}
          clickEvent={() => navigate(btnLocation)}
        />
      </div>
    </div>
  );
}
