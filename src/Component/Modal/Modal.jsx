import React from "react";
import "./modal.css";
import successIcon from "../../assets/images/success.png";
import Button from "./../button/Button";

export default function Modal({
  header,
  text,
  btnText,
  btnLocation,
  setState,
}) {
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
          onClick={() => navigate({ btnLocation })}
        />
      </div>
    </div>
  );
}
