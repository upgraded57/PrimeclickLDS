import "./about.css";
import React from "react";
import Footer from "../../Component/footer/Footer";
import Header from "../../Component/header/Header";

import globeImg from "../../assets/images/aboutimg.png";
import teamImg from "../../assets/images/faqimg.png";
import { Link } from "react-router-dom";
import Input from "./../../Component/Input/Input";
import Button from "../../Component/button/Button";

export default function About() {
  const submitMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div className="about-pg">
      <Header />
      <div className="about">
        <h1>We&apos;re a dedicated teams of achievers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className="globe-img">
          <img src={globeImg} alt="Globe" />
        </div>

        <div className="about-points">
          <div className="point">
            <h2>Support</h2>
            <p>We&apos;re here to help 24/7</p>
            <Link to="#">support@autoleads.com</Link>
          </div>
          <div className="point">
            <h2>Support</h2>
            <p>We&apos;re here to help 24/7</p>
            <Link to="#">support@autoleads.com</Link>
          </div>
          <div className="point">
            <h2>Support</h2>
            <p>We&apos;re here to help 24/7</p>
            <Link to="#">support@autoleads.com</Link>
          </div>
        </div>
        <div className="about-pcm"></div>
      </div>

      <div className="teams">
        <h1>Meet The Team</h1>

        <div className="members">
          <div className="member">
            <div className="member-img">
              <img src={teamImg} alt="Team Member" />
            </div>
            <div className="member-info">
              <h3>John DOe</h3>
              <p>Co-founder</p>
            </div>
          </div>

          <div className="member">
            <div className="member-img">
              <img src={teamImg} alt="Team Member" />
            </div>
            <div className="member-info">
              <h3>John DOe</h3>
              <p>Co-founder</p>
            </div>
          </div>

          <div className="member">
            <div className="member-img">
              <img src={teamImg} alt="Team Member" />
            </div>
            <div className="member-info">
              <h3>John DOe</h3>
              <p>Co-founder</p>
            </div>
          </div>

          <div className="member">
            <div className="member-img">
              <img src={teamImg} alt="Team Member" />
            </div>
            <div className="member-info">
              <h3>John DOe</h3>
              <p>Co-founder</p>
            </div>
          </div>

          <div className="member">
            <div className="member-img">
              <img src={teamImg} alt="Team Member" />
            </div>
            <div className="member-info">
              <h3>John DOe</h3>
              <p>Co-founder</p>
            </div>
          </div>

          <div className="member">
            <div className="member-img">
              <img src={teamImg} alt="Team Member" />
            </div>
            <div className="member-info">
              <h3>John DOe</h3>
              <p>Co-founder</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <h1>Get in touch</h1>
        <p>We&apos;d love to hear from you, kindly fill out this form.</p>

        <form onSubmit={submitMessage}>
          <span>
            <Input name="firstName" label="First Name" type="text" />
            <Input name="lastName" label="Last Name" type="text" />
          </span>
          <Input name="email" label="Email Address" type="email" />
          <Input name="phone" label="Phone Number" type="text" />
          <label htmlFor="textArea">
            <p>Message</p>
            <textarea id="textArea" />
          </label>
          <label htmlFor="privacy-agreement" className="privacy-agreement">
            <input type="checkbox" id="privacy-agreement" />
            <p>
              You agree to our friendly{" "}
              <strong style={{ textDecoration: "underline" }}>
                privacy policy.
              </strong>
            </p>
          </label>
          <Button type="submit" text="Send Message" variant="solid" />
        </form>
      </div>
      <Footer />
    </div>
  );
}
