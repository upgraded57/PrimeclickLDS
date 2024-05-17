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
            Our features are specially curated to help our users maximize lead
            potentials so they never miss out on a conversion opportunity
          </p>
        </div>

        <div className="features-pg-cards">
          <div className="features-pg-cards-left">
            <div className="offer-card">
              <img src={card1img} alt="image" />
              <h3>Scalable Infrastructure</h3>
              <p>
                Scalable Infrastructure allows you to maximize performance while
                focusing on growing your business.
              </p>
            </div>
          </div>

          <div className="features-pg-cards-center">
            <div className="offer-card">
              <img src={card2img} alt="image" />
              <h3>Real-time Analytics</h3>
              <p>
                Track lead engagement, conversion rates, and overall campaign
                performance in real-time. An easy-to-use dashboard displays key
                metrics such as lead source, response time, and follow-up
                status.
              </p>
            </div>

            <div className="offer-card">
              <img src={card3img} alt="image" />
              <h3>Intuitive Interface</h3>
              <p>
                Access and update lead information, all in just a few clicks
                Track progress and prioritize follow-ups with all relevant data
                in one place.
              </p>
            </div>

            <div className="offer-card">
              <img src={card4img} alt="image" />
              <h3>24/7 Support</h3>
              <p>
                You'll never have to worry about being stuck or delayed in
                achieving your goals due to lack of assistance, we're always
                just a click or call away.
              </p>
            </div>
          </div>

          <div className="features-pg-cards-right">
            <div className="offer-card">
              <img src={card2img} alt="image" />
              <h3>Automated Workflows</h3>
              <p>
                Focus on building relationships with qualified prospects while
                leaving the administrative work in capable hands. Experience
                enhanced productivity and higher conversion rates.
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
