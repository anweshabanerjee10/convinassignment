import React from "react";
import "./button.css";
function Button({ children, onClick, outlined, inverted, style }) {
  return (
    <button
      className={`button ${outlined ? "outlined" : ""} ${
        inverted ? "inverted" : ""
      }`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
