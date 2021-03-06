import React from "react";

const Button = ({ type, title, className }) => {
  return (
    <button type={type} className={className}>
      {title}
    </button>
  );
};

export default Button;
