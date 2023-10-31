import Button from "../../Component/button/Button";
import "./activation.css";
import Topbar from "./../../Component/Topbar/Topbar";

export default function Invalid() {
  return (
    <>
      <Topbar />

      <div className="activation">
        <h2 className="h-200">Account activation</h2>

        <div className="activation__box">
          <h2 className="h-200 error">Invalid link!</h2>
          <p className="text-body">
            Unfortunately, your account activation link is invalid. Kindly click
            on the button below to resend the activation link.
          </p>
          <div className="activation-btn">
            <Button variant="solid" type="button" text="Resend link" />
          </div>
        </div>
      </div>
    </>
  );
}
