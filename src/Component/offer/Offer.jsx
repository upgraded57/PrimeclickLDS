import "./offer.css";
import offerbg from "../../assets/images/offerbg.png";
import card1img from "../../assets/images/lead.png";
import card2img from "../../assets/images/data.png";
import card3img from "../../assets/images/auto.png";

export default function Offer() {
  return (
    <div className="offer">
      <div className="offer-top">
        <h1>What We Offer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
      </div>
      <div className="offer-cards">
        <div className="offer-card">
          <img src={card1img} alt="image" />
          <h3>Lead Distribution</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
        </div>

        <div className="offer-card">
          <img src={card2img} alt="image" />
          <h3>Data recording</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
        </div>

        <div className="offer-card">
          <img src={card3img} alt="image" />
          <h3>Automated Follow up</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
        </div>
      </div>
    </div>
  );
}
