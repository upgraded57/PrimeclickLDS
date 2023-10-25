import "./card.css";
import { PiDotsThreeOutline } from "react-icons/pi";
import { HiUsers } from "react-icons/hi2";

export default function Card({ text, qty }) {
  return (
    <div className="card">
      <div className="card__top">
        <p>{text}</p>
        <span>
          <PiDotsThreeOutline />
        </span>
      </div>
      <div className="card__bottom">
        <h1>{qty}</h1>
        <span>
          <HiUsers />
        </span>
      </div>
    </div>
  );
}
