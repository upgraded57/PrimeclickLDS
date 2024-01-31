import Topbar from "../../Component/Topbar/Topbar";
import "../Onboarding/onboarding.css";
import Button from "./../../Component/button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { chooseFollowUpOption } from "../../ApiCalls/Campaign/Campaign";

export default function FollowUp() {
  const { campaign_id } = useParams();
  const [followUpOption, setFollowUpOption] = useState("");
  const navigate = useNavigate();
  const FollowUp = () => {
    if (followUpOption.length < 1) {
      return;
    }

    chooseFollowUpOption(campaign_id, followUpOption, navigate);
  };
  return (
    <>
      <Topbar />
      <div className="onboarding">
        <h3 className="h-100">Choose your lead generation option:</h3>
        <div className="onboarding-box">
          <div
            className="onboarding-box-top"
            style={{
              borderBottom: "1px solid lightgrey",
              paddingBottom: "20px",
              marginBottom: "20px",
            }}
          >
            <h3 className="h-50" style={{ fontWeight: 500 }}>
              Choose a Follow up Method
            </h3>
            <p className="text-body">
              You are currently on the premium Plan so you have access to all
              follow up methods
            </p>
          </div>
          <div className="onboarding-box-radios">
            <label htmlFor="Sms">
              <input
                type="radio"
                id="Sms"
                name="follow-up-method"
                onChange={(e) => setFollowUpOption(e.target.id)}
              />
              <p className="text-body" style={{ fontSize: "20px" }}>
                Text Message
              </p>
            </label>
            <label htmlFor="CALL">
              <input
                type="radio"
                id="CALL"
                name="follow-up-method"
                onChange={(e) => setFollowUpOption(e.target.id)}
              />
              <p className="text-body" style={{ fontSize: "20px" }}>
                Calls
              </p>
            </label>
          </div>
          <Button
            variant="solid"
            type="button"
            text="Continue"
            clickEvent={FollowUp}
          />
        </div>
      </div>
    </>
  );
}
