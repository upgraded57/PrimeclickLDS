import "./loader.css";

export default function Loader({ type }) {
  switch (type) {
    case "placeholder":
      return (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      );

    case "spinner":
      return (
        <div className="loader_spinner">
          <span className="loader spinner"></span>
        </div>
      );
    default:
      return (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      );
  }
}
