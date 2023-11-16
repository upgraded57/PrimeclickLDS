import "./dashboardlayout.css";
import logo from "../../assets/images/logo-alt.png";
import { MdSpaceDashboard } from "react-icons/md";
import {
  BsBoxArrowLeft,
  BsFillBarChartFill,
  BsFillFileEarmarkSpreadsheetFill,
} from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { PiBellLight, PiGearSixFill } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../ApiCalls/Auth/Auth";

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="dashboard-layout">
        <div className="dashboard-layout__sidebar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="link-group">
            <NavLink to="/dashboard" className="link">
              <span className="icon">
                <MdSpaceDashboard />
              </span>
              <p>Dashboard</p>
            </NavLink>
            <NavLink to="/leads" className="link">
              <span className="icon">
                <BsFillFileEarmarkSpreadsheetFill />
              </span>
              <p>Campaigns</p>
            </NavLink>
            <NavLink to="/report" className="link">
              <span className="icon">
                <BsFillBarChartFill />
              </span>
              <p>Report</p>
            </NavLink>
            <NavLink to="/user" className="link">
              <span className="icon">
                <FaUser />
              </span>
              <p>User Account</p>
            </NavLink>
          </div>

          <div className="link-group">
            <NavLink to="/settings" className="link">
              <span className="icon">
                <PiGearSixFill />
              </span>
              <p>Settings</p>
            </NavLink>
            <NavLink to="/support" className="link">
              <span className="icon">
                <BiSupport />
              </span>
              <p>Support</p>
            </NavLink>
          </div>

          <div className="link-group">
            <div className="link" onClick={() => logout(navigate)}>
              <span className="icon">
                <BsBoxArrowLeft />
              </span>
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="dashboard-layout__main">
          <div className="dashboard-layout__main-top">
            <span>
              <PiBellLight />
            </span>
          </div>
          <div className="dashboard-layout__children">{children}</div>
        </div>
      </div>
    </>
  );
}
