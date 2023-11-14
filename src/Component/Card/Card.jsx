import "./card.css";
import { HiUsers } from "react-icons/hi2";

export default function Card({ text, qty }) {
  return (
    <div className="card">
      <div className="card__top">
        <span>
          <HiUsers />
        </span>
        <p>{text}</p>
      </div>
      <div className="card__bottom">
        <h1>{qty}</h1>
      </div>
    </div>
  );
}
