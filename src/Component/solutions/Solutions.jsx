import "./solutions.css";
import solutionImg from "../../assets/images/solutionimg.png";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function Solutions() {
  const solutions = [
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet, consec adip iscing elit, sed do eius mod tempor incididunt ut labore et lorem ipsum dolor sit amet, consec adip iscing elit, sed do eius mod tempor incididunt ut labore et.",
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet, consec adip iscing elit, sed do eius mod tempor incididunt ut labore et lorem ipsum dolor sit amet, consec adip iscing elit, sed do eius mod tempor incididunt ut labore et.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet, consec adip iscing elit, sed do eius mod tempor incididunt ut labore et lorem ipsum dolor sit amet, consec adip iscing elit, sed do eius mod tempor incididunt ut labore et.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet, consec adip iscing elit, sed do eius mod tempor incididunt ut labore et lorem ipsum dolor sit amet, consec adip iscing elit, sed do eius mod tempor incididunt ut labore et.",
    },
  ];
  const [currentSol, setCurrentSol] = useState(1);
  return (
    <div className="solutions">
      <h1>Get an easy-to-use solution tailored to your daily operations</h1>
      <div className="solution">
        <div className="solution-left">
          {solutions.map((sol, idx) => (
            <div
              className={currentSol === idx ? "sol active" : "sol"}
              key={sol.id}
              onClick={() => setCurrentSol(idx)}
            >
              <span>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <button>
                  <FaChevronRight />
                </button>
              </span>
              <p>
                Lorem ipsum dolor sit amet, consec adip iscing elit, sed do eius
                mod tempor incididunt ut labore et lorem ipsum dolor sit amet,
                consec adip iscing elit, sed do eius mod tempor incididunt ut
                labore et.
              </p>
            </div>
          ))}
        </div>
        <div className="solution-right">
          <div className="solution-img">
            <img src={solutionImg} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
