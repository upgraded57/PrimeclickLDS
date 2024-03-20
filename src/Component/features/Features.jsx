import "./features.css";
import featureImg from "../../assets/images/featureimg.png";

export default function Features() {
  return (
    <div className="features">
      <div className="features-highlight">
        <img src={featureImg} alt="image" />
        <div className="highlights">
          <h4>
            Over <span>+30,000 net</span>
          </h4>
          <h4>
            “Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
            eius mod tempor incididunt ut labore et.”
          </h4>
          <h4>- Temitayo (Surname Here)</h4>
        </div>
      </div>

      <div className="features-counts">
        <div className="count">
          <h1>3.5k</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
          </p>
        </div>
        <div className="count">
          <h1>20million</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
          </p>
        </div>
        <div className="count">
          <h1>3000+</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
          </p>
        </div>
      </div>
    </div>
  );
}
