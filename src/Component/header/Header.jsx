import "./header.css";
import logo from "../../assets/images/logo-alt.png";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Primeclick logo" />
        </Link>
      </div>
      <nav>
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
      </nav>
      <div className="auth-links">
        <button onClick={() => navigate("/auth?type=login")}>Log in</button>
        <button onClick={() => navigate("/auth?type=signUp")}>Sign up</button>
      </div>
    </header>
  );
}
