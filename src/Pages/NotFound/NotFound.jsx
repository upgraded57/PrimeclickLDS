import "./notfound.css";
import Header from "./../../Component/header/Header";
import errorImg from "../../assets/images/errorimg.png";
import Button from "./../../Component/button/Button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="notfound-pg">
      <Header />
      <div className="notfound">
        <div className="notfound-left">
          <h1>Whoops...this page isn&apos;t available</h1>
          <div className="notfound-left-btn">
            <Button
              variant="solid"
              text="Go Back"
              clickEvent={() => navigate(-1)}
            />
            <Button
              variant="accent"
              text="Refresh"
              clickEvent={() => window.location.reload()}
            />
          </div>
        </div>
        <div className="notfound-right">
          <img src={errorImg} alt="Not Found" />
        </div>
      </div>
    </div>
  );
}
