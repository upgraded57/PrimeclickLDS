import "./button.css";
import { GoChevronLeft } from "react-icons/go";

export default function Button({
  variant,
  type,
  text,
  icon,
  clickEvent,
  bgColor,
  textClr,
}) {
  switch (variant) {
    case "solid":
      return (
        <button
          style={{ backgroundColor: bgColor, color: textClr }}
          type={type ? type : "button"}
          className="btn-tp solid-btn"
          onClick={clickEvent}
        >
          {icon && <span>{icon}</span>}
          {text}
        </button>
      );

    case "accent":
      return (
        <button
          style={{ backgroundColor: bgColor, color: textClr }}
          type={type ? type : "button"}
          className="btn-tp solid-btn accent"
          onClick={clickEvent}
        >
          {icon && <span>{icon}</span>}
          {text}
        </button>
      );

    case "outline":
      return (
        <button
          style={{ backgroundColor: bgColor, color: textClr }}
          type={type ? type : "button"}
          className="btn-tp outline-btn"
          onClick={clickEvent}
        >
          {icon && <span>{icon}</span>}
          {text}
        </button>
      );

    case "ghost":
      return (
        <button
          style={{ backgroundColor: bgColor, color: textClr }}
          type={type ? type : "button"}
          className="btn-tp ghost-btn"
          onClick={clickEvent}
        >
          {icon && <span>{icon}</span>}
          {text}
        </button>
      );

    case "pill":
      return (
        <button
          style={{ backgroundColor: bgColor, color: textClr }}
          type={type ? type : "button"}
          className="btn-tp pill-btn"
          onClick={clickEvent}
        >
          {icon && <span>{icon}</span>}
          {text}
        </button>
      );

    case "back":
      return (
        <button
          style={{ backgroundColor: bgColor, color: textClr }}
          type="button"
          className="button-back-btn"
          onClick={clickEvent}
        >
          <span>
            <GoChevronLeft />
          </span>
          <p>Back</p>
        </button>
      );

    default:
      return (
        <button
          style={{ backgroundColor: bgColor, color: textClr }}
          type={type ? type : "button"}
          onClick={clickEvent}
        >
          Default Button
        </button>
      );
  }
}
