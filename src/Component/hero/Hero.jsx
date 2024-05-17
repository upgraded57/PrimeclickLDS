import "./hero.css";
import Input from "./../Input/Input";
import Button from "./../button/Button";
import heroImg from "../../assets/images/heroImg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const signup = (e) => {
    e.preventDefault();
    navigate("/auth?type=signUp&email=" + email);
  };
  return (
    <div className="hero">
      <div className="title">
        <h1>ALL YOUR FOLLOW UP NEEDS IN ONE PLACE</h1>
        <p>
          Introducing the future of customer follow up. Bid farewell to
          protracted wait times and Unreliable lead management, and welcome to
          smooth, customized experiences for your clients.
        </p>
        <form className="search" onSubmit={signup}>
          <Input
            type="email"
            placeholder="Your email address ..."
            setValue={setEmail}
          />
          <Button type="submit" variant="solid" text="Sign Up" />
        </form>
        <div className="hero-snapshot">
          <img src={heroImg} alt="Autoleads Snapshot" />
        </div>
      </div>
    </div>
  );
}
