import { Link, useNavigate, useParams } from "react-router-dom";
import Topbar from "../../Component/Topbar/Topbar";
import Button from "../../Component/button/Button";
import "../Onboarding/onboarding.css";
import Input from "./../../Component/Input/Input";
import { useState } from "react";
import toast from "react-hot-toast";
import { addCampaignAudios } from "../../ApiCalls/Campaign/Campaign";

export default function Calls() {
  const { campaign_id } = useParams();
  const navigate = useNavigate();
  const [audio1Link, setAudio1Link] = useState("");
  const [audio2Link, setAudio2Link] = useState("");
  const [audio3Link, setAudio3Link] = useState("");
  const chooseAudioLink = () => {
    if (
      audio1Link.length < 1 ||
      audio2Link.length < 1 ||
      audio3Link.length < 1
    ) {
      return toast.error("All fields are required!");
    }
    const audios = [audio1Link, audio2Link, audio3Link];

    addCampaignAudios(audios, campaign_id, navigate);
  };
  return (
    <>
      <Topbar />
      <div className="onboarding">
        <h3 className="h-100">Upload audios to link to your campaign</h3>
        <div className="onboarding-box">
          <div
            className="onboarding-box-top"
            style={{
              paddingBottom: "20px",
            }}
          >
            <h3 className="h-50">Add audio links</h3>
            <p className="text-body">
              To link an audio file to your campaign kindly click{" "}
              <Link to="https://www.opendrive.com/login?ref=%2Ffiles&s=5862827e7d">
                here
              </Link>
              , after uploading your file copy the audio link and paste in the
              tab below
            </p>
          </div>

          <Input
            placeholder="Link to first audio file"
            setValue={setAudio1Link}
          />
          <Input
            placeholder="Link to second audio file (If client responds positively)"
            setValue={setAudio2Link}
          />
          <Input
            placeholder="Link to third audio file (If client responds negatively)"
            setValue={setAudio3Link}
          />

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
