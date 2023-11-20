import "./user.css";
import Input from "./../../Component/Input/Input";
import { TbCloudUpload } from "react-icons/tb";
import Button from "./../../Component/button/Button";

export default function User() {
  const user = JSON.parse(localStorage.getItem("user")) || "";

  return (
    <div className="user">
      <h3 className="h-100">Business Account</h3>
      <p className="text-body">Edit your details and info.</p>

      <div className="user-box">
        <div className="user-box__head">
          <div className="user-box__head-top">
            <div className="user-box__head-top-avatar">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="avatar"
              />
            </div>
            <div className="user-box__head-top-detail">
              <h2>{`${user?.first_name} ${user?.last_name}`}</h2>
              <p className="text-body">{user?.email}</p>
            </div>
          </div>
          <div className="user-box__head-bottom">
            <h3 className="h-50">Company Profile</h3>
            <p className="text-body">
              Update you company info and details here.
            </p>
          </div>
        </div>

        <div className="user-box__profile">
          <div className="user-box__profile-left">
            <h3 className="h-50">Public Profile</h3>
            <p className="text-body">This will be displayed on your Profile</p>
          </div>
          <div className="user-box__profile-right">
            <Input
              name="profile-name"
              placeholder="Bosunsenterprise"
              type="text"
            />
            <Input
              name="profile-link"
              placeholder="Primeclick.com/"
              type="text"
            />
          </div>
        </div>

        <div className="user-box__company">
          <div className="user-box__company-left">
            <h3 className="h-50">Company Logo</h3>
            <p className="text-body">
              Update your company logo and choose where you want it to be
              displayed
            </p>
          </div>

          <div className="user-box__company-right">
            <div className="user-box__company-right-img">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="user-box__company-right-upload">
              <label htmlFor="company-logo">
                <span className="upload-icon">
                  <TbCloudUpload />
                </span>
                <input
                  type="file"
                  id="company-logo"
                  hidden
                  accept="image/svg, image/png, image/jpg, image/gif"
                />
                <p className="text-body" style={{ pointerEvents: "none" }}>
                  Click to upload or drag and drop SVG, PNG, JPG or GIF (Max
                  800px by 400px)
                </p>
              </label>
            </div>
          </div>
        </div>

        <div className="user-box__mail">
          <div className="user-box__mail-left">
            <h3 className="h-50">Registered Mail</h3>
            <p className="text-body">This will be displayed on your Profile</p>
          </div>
          <div className="user-box__mail-right">
            <Input type="email" name="company-email" placeholder="Main Mail" />
          </div>
        </div>

        <div className="user-box-btns">
          <Button variant="pill" text="Save Changes" />
        </div>
      </div>
    </div>
  );
}
