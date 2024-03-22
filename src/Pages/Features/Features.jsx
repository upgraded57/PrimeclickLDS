import Header from "../../Component/header/Header";
import Testimonials from "../../Component/testimonials/Testimonials";
import "./features.css";
import Footer from "./../../Component/footer/Footer";
import "../../Component/offer/offer.css";
import card1img from "../../assets/images/featureimg1.png";
import card2img from "../../assets/images/featureimg2.png";
import card3img from "../../assets/images/featureimg3.png";
import card4img from "../../assets/images/featureimg4.png";
import Faqs from "../../Component/faqs/Faqs";

export default function Features() {
  return (
    <div className="features-pg">
      <Header />
      <div className="features-pg-section">
        <div className="features-pg-texts">
          <h1>Features</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="features-pg-cards">
          <div className="features-pg-cards-left">
            <div className="offer-card">
              <img src={card1img} alt="image" />
              <h3>Scalable Infrastructure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </div>

          <div className="features-pg-cards-center">
            <div className="offer-card">
              <img src={card2img} alt="image" />
              <h3>Real-time Analytics</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>

            <div className="offer-card">
              <img src={card3img} alt="image" />
              <h3>Intuitive Interface</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>

            <div className="offer-card">
              <img src={card4img} alt="image" />
              <h3>24/7 Support</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </div>

          <div className="features-pg-cards-right">
            <div className="offer-card">
              <img src={card2img} alt="image" />
              <h3>Automated Workflows</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Faqs />
      <Footer />
    </div>
  );
}
