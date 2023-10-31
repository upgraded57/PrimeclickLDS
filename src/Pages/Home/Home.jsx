import "./home.css";
import logo from "../../assets/images/logo.png";
import progress from "../../assets/images/progress.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home__nav">
        <div className="home__nav-logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="home__info">
        <div className="home__info-header">
          <img src={progress} alt="" />
          <h2 className="h-200">WE'RE UNDER DEVELOPMENT!</h2>
        </div>
        <p className="text-body">
          You can view the available pages while you're here
        </p>
        <div className="home__info-links">
          <Link to="/auth">Login/Signup</Link>
          <Link to="/forgot-password">Reset Password</Link>
          <Link to="/leads">Leads Page</Link>
          <Link to="/report">Report Page</Link>
          <Link to="/onboarding">Onboarding Options Page</Link>
        </div>
      </div>
    </div>
  );
}
