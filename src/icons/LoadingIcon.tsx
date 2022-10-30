import React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
};

function LoadingIcon({ className }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={clsx(className, "stroke-light-2 animate-spin")}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33325 8.00001C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LoadingIcon;
