import { ButtonProps } from "@/types";
import { FC } from "react";

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  leftIcon,
  rightIcon,
}) => {
  if (variant === "solid") {
    return (
      <button className="py-1 rounded-md px-3 bg-[var(--primary-color)] text-white cursor-pointer  font-medium flex flex-row gap-2 items-center">
        {children}{rightIcon}
      </button>
    );
  }

  if (variant === "outlined") {
    return (
    <button className="px-3 py-1 rounded-md border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--white)] font-medium flex items-center flex-row gap-2">
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  }
};
