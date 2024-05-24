import { ButtonProps } from "@/types";
import { FC } from "react";

const Button: FC<ButtonProps> = ({
  children,
  variant,
  leftIcon,
  rightIcon,
}) => {
  if (variant === "solid") {
    return (
      <button className="py-1 rounded-md px-3 bg-white text-[var(--primary-bg-color)] cursor-pointer  font-medium flex flex-row gap-2 items-center">
        {children}
        {rightIcon}
      </button>
    );
  }

  if (variant === "outlined") {
    return (
      <button className="px-3 py-1 rounded-md border border-white text-white font-medium flex items-center flex-row gap-2 hover:text-[var(--primary-bg-color)] hover:bg-white">
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  }
};

export default Button;
