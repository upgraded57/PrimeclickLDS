import "./dashboardlayout.css";
import logo from "../../assets/images/logo-alt.png";
import logoSm from "../../assets/images/logo-sm.png";
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
import { Tooltip } from "react-tooltip";

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="dashboard-layout">
        {/* big sidebar */}
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

          {/* <div className="link-group">
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
          </div> */}

          <div className="link-group">
            <div className="link" onClick={() => logout(navigate)}>
              <span className="icon">
                <BsBoxArrowLeft />
              </span>
              <p>Logout</p>
            </div>
          </div>
        </div>

        {/* small sidebar */}
        <div className="dashboard-layout__sidebar-sm">
          <div className="logo">
            <img src={logoSm} alt="logo" />
          </div>

          <div className="link-group">
            <NavLink
              to="/dashboard"
              className="link"
              data-tooltip-id="dashboard"
            >
              <span className="icon">
                <MdSpaceDashboard />
              </span>
              <Tooltip
                id="dashboard"
                opacity={1}
                place="right"
                offset="30"
                style={{
                  zIndex: "1000000 !important",
                  background: "white",
                  color: "var(--neutral-clr-dark)",
                  boxShadow: "0 0 3px 2px rgba(7, 42, 200, 0.15)",
                }}
              >
                <p>Dashboard</p>
              </Tooltip>
            </NavLink>
            <NavLink to="/leads" className="link" data-tooltip-id="campaigns">
              <span className="icon">
                <BsFillFileEarmarkSpreadsheetFill />
              </span>
              <Tooltip
                id="campaigns"
                opacity={1}
                place="right"
                offset="30"
                style={{
                  zIndex: "1000000 !important",
                  background: "white",
                  color: "var(--neutral-clr-dark)",
                  boxShadow: "0 0 3px 2px rgba(7, 42, 200, 0.15)",
                }}
              >
                <p>Campaigns</p>
              </Tooltip>
            </NavLink>
            <NavLink to="/report" className="link" data-tooltip-id="report">
              <span className="icon">
                <BsFillBarChartFill />
              </span>
              <Tooltip
                id="report"
                opacity={1}
                place="right"
                offset="30"
                style={{
                  zIndex: "1000000 !important",
                  background: "white",
                  color: "var(--neutral-clr-dark)",
                  boxShadow: "0 0 3px 2px rgba(7, 42, 200, 0.15)",
                }}
              >
                <p>Report</p>
              </Tooltip>
            </NavLink>
            <NavLink to="/user" className="link" data-tooltip-id="user">
              <span className="icon">
                <FaUser />
              </span>
              <Tooltip
                id="user"
                opacity={1}
                place="right"
                offset="30"
                style={{
                  zIndex: "1000000 !important",
                  background: "white",
                  color: "var(--neutral-clr-dark)",
                  boxShadow: "0 0 3px 2px rgba(7, 42, 200, 0.15)",
                }}
              >
                <p>User Account</p>
              </Tooltip>
            </NavLink>
          </div>

          {/* <div className="link-group">
            <NavLink to="/settings" className="link" data-tooltip-id="settings">
              <span className="icon">
                <PiGearSixFill />
              </span>
              <Tooltip
                id="settings"
                opacity={1}
                place="right"
                offset="30"
                style={{
                  zIndex: "1000000 !important",
                  background: "white",
                  color: "var(--neutral-clr-dark)",
                  boxShadow: "0 0 3px 2px rgba(7, 42, 200, 0.15)",
                }}
              >
                <p>Settings</p>
              </Tooltip>
            </NavLink>
            <NavLink to="/support" className="link" data-tooltip-id="support">
              <span className="icon">
                <BiSupport />
              </span>
              <Tooltip
                id="support"
                opacity={1}
                place="right"
                offset="30"
                style={{
                  zIndex: "1000000 !important",
                  background: "white",
                  color: "var(--neutral-clr-dark)",
                  boxShadow: "0 0 3px 2px rgba(7, 42, 200, 0.15)",
                }}
              >
                <p>Support</p>
              </Tooltip>
            </NavLink>
          </div> */}

          <div className="link-group">
            <div className="link" onClick={() => logout(navigate)}>
              <span className="icon" data-tooltip-id="logout">
                <BsBoxArrowLeft />
              </span>
              <Tooltip
                id="logout"
                opacity={1}
                place="right"
                offset="30"
                style={{
                  zIndex: "1000000 !important",
                  background: "white",
                  color: "var(--neutral-clr-dark)",
                  boxShadow: "0 0 3px 2px rgba(7, 42, 200, 0.15)",
                }}
              >
                <p>Logout</p>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="dashboard-layout__main">
          <div className="dashboard-layout__main-top">
            <span onClick={() => navigate("/notifications")}>
              <PiBellLight />
            </span>
          </div>
          <div className="dashboard-layout__children">{children}</div>
        </div>
      </div>
    </>
  );
}
