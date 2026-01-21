import React from "react";

interface ButtonProps {
  text: string;
  classes?: string;
  type?: "primary" | "secondary" | "ghost";
  btnAction?: "submit" | "button";
  isLoading?: boolean;
}

const variants: Record<NonNullable<ButtonProps["type"]>, string> = {
  primary:
    "bg-[#0AE360] text-black hover:bg-[#08c956] transition-colors",
  secondary:
    "bg-black text-white hover:bg-neutral-800 transition-colors",
  ghost:
    "bg-transparent text-black border border-black/10 hover:bg-black/5 transition-colors",
};

const Button: React.FC<ButtonProps> = ({
  text,
  classes = "",
  type = "primary",
  btnAction = "button",
  isLoading = false,
}) => {
  return (
    <button
      type={btnAction === "submit" ? "submit" : "button"}
      className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold cursor-pointer ${variants[type]} ${classes}`}
      disabled={isLoading}
   >
      {isLoading ? "Please wait..." : text}
    </button>
  );
};

export default Button;
