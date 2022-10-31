import React from "react";
import clsx from "clsx";

type Props = {
  label: string;
  className?: string;
  children?: React.ReactNode;
  primary?: boolean;
  disabled?: boolean;
  withBorder?: boolean;
  onClick?: () => void;
};

function Button({
  label,
  className = "",
  children = "Button",
  onClick,
  disabled,
  primary,
  withBorder,
}: Props) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={clsx(
        "font-semibold py-2 px-4 text-center text-sm bg-dark-1 text-light-1 border rounded border-light-4 duration-75 flex items-center gap-1.5 justify-center custom-border",
        primary && "primary bg-highlight border-highlight",
        disabled && "opacity-50",
        withBorder && "withborder",
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
