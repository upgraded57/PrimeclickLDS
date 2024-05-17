import Faqs from "../../Component/faqs/Faqs";
import Header from "../../Component/header/Header";
import "./pricing.css";
import Footer from "./../../Component/footer/Footer";
import { useState } from "react";

import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "../../Component/button/Button";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  const toggleBiling = () => {
    billing === "monthly" ? setBilling("yearly") : setBilling("monthly");
  };
  return (
    <div className="pricing-pg">
      <Header />
      <div className="pricing">
        <h1>We&apos;ve got the perfect plan for you</h1>
        <div className="pricing-toggle" onClick={toggleBiling}>
          <h4>Monthly</h4>
          <div className="toggle-container">
            <div
              className={
                billing === "monthly"
                  ? "toggle-thumb left"
                  : "toggle-thumb right"
              }
            ></div>
          </div>
          <h4>Yearly</h4>
        </div>

        <div className="prices">
          <div className="price">
            <h5>Basic Plan</h5>
            <span>
              <h1>$10</h1>
              <p>
                Per User <br /> Per Month
              </p>
            </span>
            <p>Ideal for individual users and small teams.</p>
            <ul>
              <li>
                <IoIosCheckmarkCircle className="check-icon" />
                Access to basic features
              </li>
              <li>
                <IoIosCheckmarkCircle className="check-icon" />
                Basic Reporting and analytics
              </li>
              <li>
                <IoIosCheckmarkCircle className="check-icon" />
                Up to 10 Individual users
              </li>
              <li>
                <IoIosCheckmarkCircle className="check-icon" />
                20GB Individual data for each
              </li>
            </ul>
            <Button variant="solid" text="Get Started" />
          </div>

          <div className="price active">
            <h5>Business</h5>
            <span>
              <h1>$20</h1>
              <p>
                Per User <br /> Per Month
              </p>
            </span>
            <p>Ideal for individual users and small teams.</p>
            <ul>
              <li>
                <IoIosCheckmarkCircle className="check-icon" />
                Access to basic features
              </li>
              <li>
                <IoIosCheckmarkCircle className="check-icon" />
                Basic Reporting and analytics
              </li>
              <li>
                <IoIosCheckmarkCircle className="check-icon" />
                Up to 10 Individual users
              </li>
              <li>
                <IoIosCheckmarkCircle className="check-icon" />
                20GB Individual data for each
              </li>
            </ul>
            <Button variant="solid" text="Get Started" />
          </div>
          <div className="price">
            <h5>Enterprise</h5>
            <span>
              <h1>$40</h1>
              <p>
                Per User <br /> Per Month
              </p>
            </span>
            <p>Ideal for individual users and small teams.</p>
            <ul>
              <li>
                <IoIosCheckmarkCircle className="check-icon" />
                Access to basic features
              </li>
              <li>
                <IoIosCheckmarkCircle className="check-icon" />
                Basic Reporting and analytics
              </li>
              <li>
                <IoIosCheckmarkCircle className="check-icon" />
                Up to 10 Individual users
              </li>
              <li>
                <IoIosCheckmarkCircle className="check-icon" />
                20GB Individual data for each
              </li>
            </ul>
            <Button variant="solid" text="Get Started" />
          </div>
        </div>
      </div>
      <Faqs />
      <Footer />
    </div>
  );
}
