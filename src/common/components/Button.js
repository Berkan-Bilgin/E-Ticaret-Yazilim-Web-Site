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
    "primary-outline":
      "border-2 border-primary text-primary bg-transparent  hover:bg-white",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    "secondary-outline":
      "border border-gray-500 text-gray-500 bg-transparent hover:bg-gray-100",
    danger: "bg-red-500 text-white hover:bg-red-600",
    "danger-outline":
      "border border-red-500 text-red-500 bg-transparent hover:bg-red-100",
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
