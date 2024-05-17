import "./solutions.css";
import solutionImg from "../../assets/images/solutionimg.png";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function Solutions() {
  const solutions = [
    {
      id: 1,
      title: "Customizable Web forms",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nisi optio, at fugit totam assumenda consequatur. Beatae cum consequatur dicta architecto aspernatur at numquam optio, quasi minima ex. Fuga optio saepe doloremque sapiente modi, deserunt iste ratione qui animi voluptatem alias nostrum commodi a labore! Cum omnis est, libero eius maiores excepturi quisquam quas nulla illum neque, molestiae voluptates ipsam perferendis accusamus odio possimus officiis dignissimos ad tempora, blanditiis natus ut illo soluta! Quae, saepe architecto! Minus quam deleniti, qui voluptatem nulla minima natus consectetur vel sapiente quis, nisi ipsam nihil architecto tenetur debitis rerum velit veritatis quasi impedit voluptates.",
    },
    {
      id: 2,
      title: "Accurate report analytics",
      text: "Our platform provides accurate and detailed reports on customer interactions and conversion rates to help brands make informed business decisions",
    },
    {
      id: 3,
      title: "Recordings of customer Interactions",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nisi optio, at fugit totam assumenda consequatur. Beatae cum consequatur dicta architecto aspernatur at numquam optio, quasi minima ex. Fuga optio saepe doloremque sapiente modi, deserunt iste ratione qui animi voluptatem alias nostrum commodi a labore! Cum omnis est, libero eius maiores excepturi quisquam quas nulla illum neque, molestiae voluptates ipsam perferendis accusamus odio possimus officiis dignissimos ad tempora, blanditiis natus ut illo soluta! Quae, saepe architecto! Minus quam deleniti, qui voluptatem nulla minima natus consectetur vel sapiente quis, nisi ipsam nihil architecto tenetur debitis rerum velit veritatis quasi impedit voluptates.",
    },
    {
      id: 4,
      title: "User friendly Interface",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nisi optio, at fugit totam assumenda consequatur. Beatae cum consequatur dicta architecto aspernatur at numquam optio, quasi minima ex. Fuga optio saepe doloremque sapiente modi, deserunt iste ratione qui animi voluptatem alias nostrum commodi a labore! Cum omnis est, libero eius maiores excepturi quisquam quas nulla illum neque, molestiae voluptates ipsam perferendis accusamus odio possimus officiis dignissimos ad tempora, blanditiis natus ut illo soluta! Quae, saepe architecto! Minus quam deleniti, qui voluptatem nulla minima natus consectetur vel sapiente quis, nisi ipsam nihil architecto tenetur debitis rerum velit veritatis quasi impedit voluptates.",
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
                <h3>{sol.title}</h3>
                <button>
                  <FaChevronRight />
                </button>
              </span>
              <p>{sol.text}</p>
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
