import "./button.css";

export default function Button({ variant, type, text, icon }) {
  switch (variant) {
    case "solid":
      return (
        <button type={type ? type : "button"} className="solid-btn">
          <span>{icon}</span>
          {text}
        </button>
      );

    case "outline":
      return (
        <button type={type ? type : "button"} className="outline-btn">
          <span>{icon}</span>
          {text}
        </button>
      );

    default:
      return <button type={type ? type : "button"}>Default Button</button>;
  }
}
