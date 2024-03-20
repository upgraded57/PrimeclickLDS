import "./header.css";
import logo from "../../assets/images/logo-alt.png";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Primeclick logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="#">Resources</Link>
          </li>
          <li>
            <Link to="#">Features</Link>
          </li>
          <li>
            <Link to="#">Pricing</Link>
          </li>
          <li>
            <Link to="#">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className="auth-links">
        <button onClick={() => navigate("/auth")}>Log in</button>
        <button onClick={() => navigate("/auth")}>Sign up</button>
      </div>
    </header>
  );
}
