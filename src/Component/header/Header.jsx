import "./header.css";
import logo from "../../assets/images/logo-alt.png";
import { Link, useNavigate } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Primeclick logo" />
        </Link>
      </div>
      {navOpen && (
        <div className="nav-backdrop" onClick={() => setNavOpen(false)}></div>
      )}
      <nav className={navOpen ? "active" : ""}>
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
          <button onClick={() => navigate("/auth?type=login")}>Log in</button>
          <button onClick={() => navigate("/auth?type=signUp")}>Sign up</button>
        </div>
      </nav>
      <div className="burger" onClick={toggleNav}>
        <HiMiniBars3 />
      </div>
    </header>
  );
}
