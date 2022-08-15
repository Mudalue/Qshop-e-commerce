import React from "react";

const Button = ({ text, onclick, size, color, width, disabled }) => {
  return (
    <>
      <button
        className={`btn btn-${size} fw-bold text-light`}
        style={{
          backgroundColor: `${color}`,
          boxShadow: "none",
          padding: "8px 30px",
          width: `${width}`,
          fontSize: 16
        }}
        onClick={onclick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
