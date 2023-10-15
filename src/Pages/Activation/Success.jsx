import Button from "../../Component/button/Button";
import logo from "../../assets/images/logo.png";
import "./activation.css";

export default function Success() {
  return (
    <>
      <div className="topbar">
        <img src={logo} alt="" />
      </div>

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
