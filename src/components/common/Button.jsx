// src/components/common/Button.js
import React from "react";

const Button = ({ children, onClick, disabled = false, type = "button" }) => {
  const defaultClasses =
    " bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full";
  const combinedClasses = `${defaultClasses}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
