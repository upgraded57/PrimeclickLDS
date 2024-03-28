import "./topbar.css";
import logo from "../../assets/images/logo-alt.png";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <img src={logo} alt="" />
      </div>
      <div className="topbar-empty-space"></div>
    </>
  );
}
