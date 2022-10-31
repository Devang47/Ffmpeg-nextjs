import React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
};

function Logo({ className }: Props) {
  return (
    <span>
      <svg
        className={clsx(className)}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Layer_1"
        height={"40px"}
        viewBox="0 0 48 48"
        xmlSpace="preserve"
      >
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M8.5 8.5h9l-9 9v11l20-20h11l-31 31h11l20-20v11l-9 9h9"
        />
      </svg>
    </span>
  );
}

export default Logo;
