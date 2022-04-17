import React from "react";

interface ButtonProps {
  children?: React.ReactNode | React.ReactNode[];
  type?: "button" | "submit" | "reset";
  shade?: "light" | "normal" | "dark";
  variant?: "primary" | "secondary" | "danger" | "success";
  className?: string;
  onClick?: () => void;
}

  const colorShades = {
    // have to make this a string so that the argument and the key match
    light: "300",
    normal: "500",
    dark: "700",
  };

export default function Button({
  children,
  type = "button",
  shade = "normal",
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {

  const mainClsName = `btn-${variant}-${shade}`;
  
  return (
    <button
      className={`btn ${mainClsName} ${className}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
