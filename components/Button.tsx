import React from "react";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullwidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  outlined?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullwidth,
  large,
  onClick,
  disabled,
  outlined,
}) => {
  return (
    <button
      className={`
     disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2 ${
       fullwidth ? "w-full" : "w-fit"
     } ${secondary ? "bg-white" : "bg-sky-500"} ${
        secondary ? "text-black" : "text-white"
      } ${secondary ? "bg-white" : "bg-sky-500"}
      ${secondary ? "border-black" : "border-sky-500"}
      ${large ? "text-xl" : "text-md"}
      ${large ? "px-5" : "px-4"}
      ${large ? "py-3" : "py-2"}
      ${outlined ? "bg-transparent" : ""}
      ${outlined ? "border-white" : ""}
      ${outlined ? "text-white" : ""}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
