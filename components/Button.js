import React from "react";

export default function Button({ buttonType, children, className }) {
  const checkButtonType = (type) => {
    switch (type) {
      case "primary":
        return "bg-primary hover:bg-secondary";
      case "secondary":
        return "bg-secondary hover:bg-primary";

      default:
        return "bg-white";
    }
  };
  return (
    <div
      className={`${checkButtonType(
        buttonType
      )} text-center rounded-sm p-2  ${className}`}
    >
      {children}
    </div>
  );
}
