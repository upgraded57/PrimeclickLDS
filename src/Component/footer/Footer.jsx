import "./footer.css";
import logo from "../../assets/images/logo-alt.png";
import Input from "./../Input/Input";
import Button from "./../button/Button";

import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="subfooter">
        <img src={logo} alt="logo" />
        <p>
          Bid farewell to protracted wait times and Unreliable lead management,
          and welcome to smooth, customized experiences for your clients.
        </p>
      </div>

      <footer>
        <div className="links">
          <div className="link">
            <h5>Product</h5>
            <Link to="/features">
              <p>Features</p>
            </Link>
            <Link to="/pricing">
              <p>Pricing</p>
            </Link>
            <Link to="/#">
              <p>Reviews</p>
            </Link>
            <Link to="/#">
              <p>Updates</p>
            </Link>
          </div>
          <div className="link">
            <h5>Company</h5>
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/contact">
              <p>Contact Us</p>
            </Link>
            <Link to="/career">
              <p>Careers</p>
            </Link>
          </div>
          <div className="link">
            <h5>Support</h5>
            <p>Getting Started</p>
            <p>Help Center</p>
            <p>Chat Support</p>
          </div>
          <div className="link newsletter">
            <h5>Subscribe to our newsletter</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
              mauris sed ma
            </p>
            <span>
              <Input placeholder="Enter your email" />
              <Button variant="solid" text="Subscribe" />
            </span>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2024 Primeclick media | All Rights Reserved</p>
          <div className="social">
            <FaFacebookSquare />
            <FaTwitter />
            <AiFillInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
      </footer>
    </>
  );
}
