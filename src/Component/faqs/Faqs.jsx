import { useState } from "react";
import "./faqs.css";

import { FaPlus, FaMinus } from "react-icons/fa6";

export default function Faqs() {
  const [currentFaq, setCurrentFaq] = useState(0);

  const faqs = [
    {
      id: 1,
      title: "How does the Autoleads work?",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nisi optio, at fugit totam assumenda consequatur. Beatae cum consequatur dicta architecto aspernatur at numquam optio, quasi minima ex. Fuga optio saepe doloremque sapiente modi, deserunt iste ratione qui animi voluptatem alias nostrum commodi a labore! Cum omnis est, libero eius maiores excepturi quisquam quas nulla illum neque, molestiae voluptates ipsam perferendis accusamus odio possimus officiis dignissimos ad tempora, blanditiis natus ut illo soluta! Quae, saepe architecto! Minus quam deleniti, qui voluptatem nulla minima natus consectetur vel sapiente quis, nisi ipsam nihil architecto tenetur debitis rerum velit veritatis quasi impedit voluptates.",
    },
    {
      id: 2,
      title: "What kind of customer data does it require?",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nisi optio, at fugit totam assumenda consequatur. Beatae cum consequatur dicta architecto aspernatur at numquam optio, quasi minima ex. Fuga optio saepe doloremque sapiente modi, deserunt iste ratione qui animi voluptatem alias nostrum commodi a labore! Cum omnis est, libero eius maiores excepturi quisquam quas nulla illum neque, molestiae voluptates ipsam perferendis accusamus odio possimus officiis dignissimos ad tempora, blanditiis natus ut illo soluta! Quae, saepe architecto! Minus quam deleniti, qui voluptatem nulla minima natus consectetur vel sapiente quis, nisi ipsam nihil architecto tenetur debitis rerum velit veritatis quasi impedit voluptates.",
    },
    {
      id: 3,
      title:
        "How accurate and reliable is the platform in providing solutions or answers?",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nisi optio, at fugit totam assumenda consequatur. Beatae cum consequatur dicta architecto aspernatur at numquam optio, quasi minima ex. Fuga optio saepe doloremque sapiente modi, deserunt iste ratione qui animi voluptatem alias nostrum commodi a labore! Cum omnis est, libero eius maiores excepturi quisquam quas nulla illum neque, molestiae voluptates ipsam perferendis accusamus odio possimus officiis dignissimos ad tempora, blanditiis natus ut illo soluta! Quae, saepe architecto! Minus quam deleniti, qui voluptatem nulla minima natus consectetur vel sapiente quis, nisi ipsam nihil architecto tenetur debitis rerum velit veritatis quasi impedit voluptates.",
    },
    {
      id: 4,
      title:
        "Can I integrate this platform with other existing customer support tools or systems?",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nisi optio, at fugit totam assumenda consequatur. Beatae cum consequatur dicta architecto aspernatur at numquam optio, quasi minima ex. Fuga optio saepe doloremque sapiente modi, deserunt iste ratione qui animi voluptatem alias nostrum commodi a labore! Cum omnis est, libero eius maiores excepturi quisquam quas nulla illum neque, molestiae voluptates ipsam perferendis accusamus odio possimus officiis dignissimos ad tempora, blanditiis natus ut illo soluta! Quae, saepe architecto! Minus quam deleniti, qui voluptatem nulla minima natus consectetur vel sapiente quis, nisi ipsam nihil architecto tenetur debitis rerum velit veritatis quasi impedit voluptates.",
    },
    {
      id: 5,
      title: "Can I track the status of the calls made?",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nisi optio, at fugit totam assumenda consequatur. Beatae cum consequatur dicta architecto aspernatur at numquam optio, quasi minima ex. Fuga optio saepe doloremque sapiente modi, deserunt iste ratione qui animi voluptatem alias nostrum commodi a labore! Cum omnis est, libero eius maiores excepturi quisquam quas nulla illum neque, molestiae voluptates ipsam perferendis accusamus odio possimus officiis dignissimos ad tempora, blanditiis natus ut illo soluta! Quae, saepe architecto! Minus quam deleniti, qui voluptatem nulla minima natus consectetur vel sapiente quis, nisi ipsam nihil architecto tenetur debitis rerum velit veritatis quasi impedit voluptates.",
    },
  ];

  return (
    <div className="faqs">
      <small>Want to know more?</small>
      <h1>Frequently asked questions</h1>

      {faqs.map((faq, idx) => (
        <div
          className={currentFaq === idx + 1 ? "faq active" : "faq"}
          key={faq.id}
          onClick={() => setCurrentFaq(idx + 1)}
        >
          <span>
            <h4>{faq.title}</h4>
            <button>{currentFaq === idx + 1 ? <FaMinus /> : <FaPlus />}</button>
          </span>
          <p>{faq.text}</p>
        </div>
      ))}
    </div>
  );
}
