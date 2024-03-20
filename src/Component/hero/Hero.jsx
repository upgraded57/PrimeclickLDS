import "./hero.css";
import Input from "./../Input/Input";
import Button from "./../button/Button";
import heroImg from "../../assets/images/heroImg.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="title">
        <h1>ALL YOUR FOLLOW UP NEEDS IN ONE PLACE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className="search">
          <Input type="text" placeholder="Your email address goes here" />
          <Button type="button" variant="solid" text="Sign Up" />
        </div>
        <div className="hero-snapshot">
          <img src={heroImg} alt="Autoleads Snapshot" />
        </div>
      </div>
    </div>
  );
}
