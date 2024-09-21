import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
}) => {
  const baseClasses =
    "rounded-md  focus:outline-none transition-colors duration-200 flex items-center space-x-2";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-green-800",
    "primary-outline": "bg-white text-primary hover:bg-gray-100",
    "primary-bordered":
      "border-2 border-primary text-primary bg-white hover:bg-gray-100",

    secondary: "bg-secondary text-white hover:bg-gray-600",
    "secondary-outline": "bg-white text-secondary hover:bg-gray-100",
    "secondary-bordered":
      "border-2 border-secondary text-secondary bg-white hover:bg-gray-100",

    danger: "bg-red-500 text-white hover:bg-red-600",
    "danger-outline": "bg-white text-red-500 hover:bg-gray-100",
    "danger-bordered":
      "border-2 border-red-500 text-red-500 bg-white hover:bg-gray-100",

    neutral: "bg-neutral text-white hover:neutralHover",
    "neutral-outline": "bg-white text-neutral hover:text-primary",
    "neutral-bordered":
      "border-2 border-black text-text-primary bg-white hover:text-text-primary",
  }[variant];

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
  }[size];

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:opacity-90";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
