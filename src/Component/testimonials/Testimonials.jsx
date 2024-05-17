import { useState } from "react";
import "./testimonials.css";
import testimonialImg from "../../assets/images/faqimg.png";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const Testimonials = [
    {
      id: 0,
      img: testimonialImg,
      content:
        "I highly recommend the Autoleads follow up tool for anyone looking to streamline their communication processes and close deals faster. Trust me, you won't be disappointed!",
      user: "Sebastian Westergren",
      post: "Development Director",
    },
    {
      id: 1,
      img: testimonialImg,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto vel illum debitis quia optio, recusandae dicta expedita necessitatibus, repudiandae odio voluptates itaque error perspiciatis hic ducimus laudantium nobis sint.",
      user: "Sebastian Westergren",
      post: "Development Director",
    },
    {
      id: 2,
      img: testimonialImg,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto vel illum debitis quia optio, recusandae dicta expedita necessitatibus, repudiandae odio voluptates itaque error perspiciatis hic ducimus laudantium nobis sint.",
      user: "Sebastian Westergren",
      post: "Development Director",
    },
    {
      id: 3,
      img: testimonialImg,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto vel illum debitis quia optio, recusandae dicta expedita necessitatibus, repudiandae odio voluptates itaque error perspiciatis hic ducimus laudantium nobis sint.",
      user: "Sebastian Westergren",
      post: "Development Director",
    },
    {
      id: 4,
      img: testimonialImg,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto vel illum debitis quia optio, recusandae dicta expedita necessitatibus, repudiandae odio voluptates itaque error perspiciatis hic ducimus laudantium nobis sint.",
      user: "Sebastian Westergren",
      post: "Development Director",
    },
    {
      id: 5,
      img: testimonialImg,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto vel illum debitis quia optio, recusandae dicta expedita necessitatibus, repudiandae odio voluptates itaque error perspiciatis hic ducimus laudantium nobis sint.",
      user: "Sebastian Westergren",
      post: "Development Director",
    },
    {
      id: 6,
      img: testimonialImg,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto vel illum debitis quia optio, recusandae dicta expedita necessitatibus, repudiandae odio voluptates itaque error perspiciatis hic ducimus laudantium nobis sint.",
      user: "Sebastian Westergren",
      post: "Development Director",
    },
    {
      id: 7,
      img: testimonialImg,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto vel illum debitis quia optio, recusandae dicta expedita necessitatibus, repudiandae odio voluptates itaque error perspiciatis hic ducimus laudantium nobis sint.",
      user: "Sebastian Westergren",
      post: "Development Director",
    },
    {
      id: 8,
      img: testimonialImg,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto vel illum debitis quia optio, recusandae dicta expedita necessitatibus, repudiandae odio voluptates itaque error perspiciatis hic ducimus laudantium nobis sint.",
      user: "Sebastian Westergren",
      post: "Development Director",
    },
    {
      id: 9,
      img: testimonialImg,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto vel illum debitis quia optio, recusandae dicta expedita necessitatibus, repudiandae odio voluptates itaque error perspiciatis hic ducimus laudantium nobis sint.",
      user: "Sebastian Westergren",
      post: "Development Director",
    },
    {
      id: 10,
      img: testimonialImg,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto vel illum debitis quia optio, recusandae dicta expedita necessitatibus, repudiandae odio voluptates itaque error perspiciatis hic ducimus laudantium nobis sint.",
      user: "Sebastian Westergren",
      post: "Development Director",
    },
    {
      id: 11,
      img: testimonialImg,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto vel illum debitis quia optio, recusandae dicta expedita necessitatibus, repudiandae odio voluptates itaque error perspiciatis hic ducimus laudantium nobis sint.",
      user: "Sebastian Westergren",
      post: "Development Director",
    },
    {
      id: 12,
      img: testimonialImg,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto vel illum debitis quia optio, recusandae dicta expedita necessitatibus, repudiandae odio voluptates itaque error perspiciatis hic ducimus laudantium nobis sint.",
      user: "Sebastian Westergren",
      post: "Development Director",
    },
    {
      id: 13,
      img: testimonialImg,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto vel illum debitis quia optio, recusandae dicta expedita necessitatibus, repudiandae odio voluptates itaque error perspiciatis hic ducimus laudantium nobis sint.",
      user: "Sebastian Westergren",
      post: "Development Director",
    },
  ];

  const nextTestimonial = () => {
    if (currentTestimonial === Testimonials.length - 1) return;
    setCurrentTestimonial((prev) => prev + 1);
  };

  const prevTestimonial = () => {
    if (currentTestimonial === 0) return;
    setCurrentTestimonial((prev) => prev - 1);
  };

  return (
    <div className="testimonials">
      <h1>How we&apos;ve helped other businesses</h1>
      <div className="testimonial">
        <div className="testimonial-left">
          <div className="testimonial-texts">
            <p>{Testimonials[currentTestimonial].content}</p>

            <h4>{Testimonials[currentTestimonial].user}</h4>
            <p>{Testimonials[currentTestimonial].post}</p>
          </div>
          <div className="testimonial-btns">
            <button onClick={prevTestimonial}>
              <FaArrowLeftLong />
            </button>
            <h2>
              {currentTestimonial < 9
                ? `0${currentTestimonial + 1}`
                : currentTestimonial + 1}{" "}
              / {Testimonials.length}
            </h2>
            <button onClick={nextTestimonial}>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="testimonial-right">
          <div className="testionial-bd"></div>
          <div className="testimonial-img">
            <img src={Testimonials[currentTestimonial].img} alt="User Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
