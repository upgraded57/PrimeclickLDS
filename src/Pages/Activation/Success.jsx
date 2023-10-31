import Button from "../../Component/button/Button";
import "./activation.css";
import Topbar from "./../../Component/Topbar/Topbar";

export default function Success() {
  return (
    <>
      <Topbar />

      <div className="activation">
        <h2 className="h-200">Account activation</h2>

        <div className="activation__box">
          <h2 className="h-200 success">Congratulations!!!</h2>
          <p className="text-body">
            Your account has been activated. Go to login page by clicking on the
            button below
          </p>
          <div className="activation-btn">
            <Button variant="solid" type="button" text="Resend link" />
          </div>
        </div>
      </div>
    </>
  );
}
