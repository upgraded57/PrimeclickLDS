import "./trustees.css";
import img1 from "../../assets/images/dominos.png";
import img2 from "../../assets/images/wellahealth.png";
import img3 from "../../assets/images/coldstone.png";
import img4 from "../../assets/images/pinkberry.png";

export default function Trustees() {
  return (
    <div className="trustees">
      <h1>Trusted By Pioneers</h1>
      <div className="trustees-imgs">
        <img src={img1} alt="Pioneer image" />
        <img src={img2} alt="Pioneer image" />
        <img src={img3} alt="Pioneer image" />
        <img src={img4} alt="Pioneer image" />
      </div>
    </div>
  );
}
