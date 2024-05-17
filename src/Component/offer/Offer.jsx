import "./offer.css";
import card1img from "../../assets/images/lead.png";
import card2img from "../../assets/images/data.png";
import card3img from "../../assets/images/auto.png";

export default function Offer() {
  return (
    <div className="offer">
      <div className="offer-top">
        <h1>What We Offer</h1>
        <p>
          We offer a seamless experience that prioritizes accurate data
          recording and proper lead distribution
        </p>
      </div>
      <div className="offer-cards">
        <div className="offer-card">
          <img src={card1img} alt="image" />
          <h3>Lead Distribution</h3>
          <p>
            An effective lead management system that automatically categorizes 
            leads or customer inquiries based on feedback to the most suitable
            status
          </p>
        </div>

        <div className="offer-card">
          <img src={card2img} alt="image" />
          <h3>Data recording</h3>
          <p>
            Capture and record relevant information about customer interactions,
            inquiries, complaints, and feedbacks.
          </p>
        </div>

        <div className="offer-card">
          <img src={card3img} alt="image" />
          <h3>Automated Follow up</h3>
          <p>
            Automate your customer follow up process with the use of automated
            calls and save time forand improves overall customer satisfaction by
            ensuring timely communication.
          </p>
        </div>
      </div>
    </div>
  );
}
