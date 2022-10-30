import React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
};

function CrossIcon({ className }: Props) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 22 22"
      fill="none"
      className={clsx(className, "stroke-light-1")}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21L1 1M21 1L1 21"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CrossIcon;
