import Topbar from "./../../Component/Topbar/Topbar";
import Button from "../../Component/button/Button";
import Input from "./../../Component/Input/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createCampaign,
  uploadCampaign,
} from "../../ApiCalls/Campaign/Campaign";

export default function Onboarding() {
  const navigate = useNavigate();
  const [onboardingType, setOnboardingType] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [docLink, setDocLink] = useState("");
  const [campaignName, setCampaignName] = useState("");

  const completeOnboarding = () => {
    onboardingType === "upload" && (uploadedFile?.name || docLink.length > 0)
      ? uploadCampaign(uploadedFile, navigate)
      : onboardingType === "generate" && campaignName.length > 0
      ? createCampaign(campaignName, navigate)
      : "";
  };
  return (
    <>
      <Topbar />
      <div className="onboarding">
        <div className="onboarding-form">
          <h3 className="h-100">Choose your lead generation option:</h3>
          <div className="onboarding-box">
            <span>
              <input
                type="radio"
                name="onboarding"
                id="upload"
                onChange={(e) => setOnboardingType(e.target.id)}
              />
              <label htmlFor="upload">
                <p className="text-body text-bold">Upload File</p>
              </label>
            </span>
            {onboardingType === "upload" && (
              <div className="file-upload">
                <div className="upload-option">
                  <small>Upload file (csv.,xls, e.t.c.)</small>
                  <input
                    type="file"
                    id="file-upload"
                    style={{ display: "none" }}
                    accept=".xlsx, .xls, .csv"
                    onChange={(e) => setUploadedFile(e.target.files[0])}
                  />
                  <label htmlFor="file-upload" className="file-upload-label">
                    <span>Upload file</span>
                    <p className="text-body">
                      {uploadedFile === null
                        ? "No file chosen"
                        : uploadedFile.name}
                    </p>
                  </label>
                </div>
              </div>
            )}
            <hr />
            <span>
              <input
                type="radio"
                name="onboarding"
                id="generate"
                onChange={(e) => setOnboardingType(e.target.id)}
              />
              <label
                htmlFor="generate"
                style={{
                  border: onboardingType === "generate" ? "none" : "",
                }}
              >
                <p className="text-body text-bold">Generate Form</p>
              </label>
            </span>
            {onboardingType === "generate" && (
              <div className="file-upload">
                <div className="upload-option">
                  <small>Campaign Name</small>
                  <Input
                    placeholder="Campaign name goes here"
                    setValue={setCampaignName}
                  />
                </div>
              </div>
            )}
            <hr />
            <span>
              <input
                type="radio"
                name="onboarding"
                id="formlink"
                onChange={(e) => setOnboardingType(e.target.id)}
              />
              <label htmlFor="formlink">
                <p className="text-body text-bold">Add Google Sheet Link</p>
              </label>
            </span>

            {onboardingType === "formlink" && (
              <div className="file-upload">
                <div className="upload-option">
                  <small>Google Sheet Link</small>
                  <Input
                    placeholder="Google Sheet link goes here"
                    setValue={setCampaignName}
                  />
                </div>
              </div>
            )}
            <Button
              variant="solid"
              text="Continue"
              clickEvent={completeOnboarding}
            />
          </div>
        </div>
      </div>
    </>
  );
}
