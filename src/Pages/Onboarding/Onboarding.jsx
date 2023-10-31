import "./onboarding.css";
import Topbar from "./../../Component/Topbar/Topbar";
import Button from "../../Component/button/Button";
import Input from "./../../Component/Input/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Onboarding() {
  const navigate = useNavigate();
  const [onboardingType, setOnboardingType] = useState("");
  const [uploadedFile, setUploadedFile] = useState("");
  const [docLink, setDocLink] = useState("");
  const [url, setUrl] = useState("");

  const completeOnboarding = () => {
    onboardingType === "upload" && (uploadedFile.name || docLink.length > 0)
      ? navigate("/leads")
      : onboardingType === "generate" && url.length > 0
      ? navigate("/form-setup")
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
              <label
                htmlFor="upload"
                style={{
                  border: onboardingType === "upload" ? "none" : "",
                }}
              >
                <p className="text-body text-bold">Upload File</p>
              </label>
            </span>
            {onboardingType === "upload" && (
              <div className="file-upload">
                <div className="upload-option">
                  <small>Input excel doc. link</small>
                  <Input placeholder="example" setValue={setDocLink} />
                </div>
                <p style={{ marginBlock: "10px" }}>or</p>
                <div className="upload-option">
                  <small>Upload file (csv.,xls, e.t.c.)</small>
                  <input
                    type="file"
                    id="file-upload"
                    style={{ display: "none" }}
                    onChange={(e) => setUploadedFile(e.target.files[0])}
                  />
                  <label htmlFor="file-upload" className="file-upload-label">
                    <span>Upload file</span>
                    <p className="text-body">
                      {uploadedFile === ""
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
                  <small>Input landing page url link</small>
                  <Input placeholder="example" setValue={setUrl} />
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
