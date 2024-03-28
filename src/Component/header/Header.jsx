import "./header.css";
import logo from "../../assets/images/logo-alt.png";
import { Link, useNavigate } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);

  const login = () => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/auth?type=login");
    }
  };
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Primeclick logo" />
        </Link>
      </div>
      <nav className={navOpen ? "active" : ""}>
        <div className="nav-close-btn" onClick={toggleNav}>
          <IoIosCloseCircleOutline />
        </div>
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <Link to="#">Resources</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        <div className="auth-links">
          <button onClick={login}>Log in</button>
          <button onClick={() => navigate("/auth?type=signUp")}>Sign up</button>
        </div>
      </nav>
      <div className="burger" onClick={toggleNav}>
        <HiMiniBars3 />
      </div>
    </header>
  );
}
