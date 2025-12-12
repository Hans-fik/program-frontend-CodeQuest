import React from "react";

const Button = ({ label, onClick, customStyle }) => {
  return (
    <button
      onClick={onClick}
      style={{
        
        padding: "10px 32px",
        background: "linear-gradient(180deg, #FFD200 0%, #F7971E 100%)",
        borderRadius: "136px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "24px",
        color: "#FFF",
        cursor: "pointer",
        ...customStyle,
      }}
    >
      {label}
    </button>
  );
};

export default Button;