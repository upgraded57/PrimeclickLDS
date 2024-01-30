import { Link, useNavigate } from "react-router-dom";
import Topbar from "../../Component/Topbar/Topbar";
import Button from "../../Component/button/Button";
import "../Onboarding/onboarding.css";
import Input from "./../../Component/Input/Input";
import { useState } from "react";

export default function Calls() {
  const navigate = useNavigate();
  const [audioLink, setAudioLink] = useState("");
  const chooseAudioLink = () => {
    navigate("/leads");
  };
  return (
    <>
      <Topbar />
      <div className="onboarding">
        <h3 className="h-100">Upload an audio to link to your campaign</h3>
        <div className="onboarding-box">
          <div
            className="onboarding-box-top"
            style={{
              paddingBottom: "20px",
            }}
          >
            <h3 className="h-50">Add an audio link</h3>
            <p className="text-body">
              To link an audio file to your campaign kindly click{" "}
              <Link to="https://www.opendrive.com/login?ref=%2Ffiles&s=5862827e7d">
                here
              </Link>
              , after uploading your file copy the audio link and paste in the
              tab below
            </p>
          </div>

          <Input placeholder="Link to audio file" setValue={setAudioLink} />

          <Button
            variant="solid"
            type="button"
            text="Continue"
            clickEvent={chooseAudioLink}
          />
        </div>
      </div>
    </>
  );
}
