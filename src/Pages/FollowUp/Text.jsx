import { useNavigate } from "react-router-dom";
import Topbar from "../../Component/Topbar/Topbar";
import "../Onboarding/onboarding.css";
import Button from "../../Component/button/Button";
import { useState } from "react";

export default function Text() {
  const navigate = useNavigate();
  const [customMsg, setCustomMsg] = useState("");
  const chooseCustomMsg = () => {
    navigate("/leads");
  };
  return (
    <>
      <Topbar />
      <div className="onboarding">
        <h3 className="h-100">Choose a message to link your form to</h3>
        <div className="onboarding-box">
          <div
            className="onboarding-box-top"
            style={{
              paddingBottom: "20px",
            }}
          >
            <h3 className="h-50">Link your form to a message body </h3>
            <p className="text-body">
              Choose a body to link to your form or create one instantly
            </p>
          </div>

          <textarea
            className="custom-msg-input"
            placeholder="Custom text message to show in SMS"
            rows={5}
            onChange={(e) => setCustomMsg(e.target.value)}
          ></textarea>

          <Button
            variant="solid"
            type="button"
            text="Continue"
            clickEvent={chooseCustomMsg}
          />
        </div>
      </div>
    </>
  );
}
