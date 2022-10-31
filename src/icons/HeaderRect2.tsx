import React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
};

function HeaderRect2({ className }: Props) {
  return (
    <svg
      className={clsx(className, "stroke-light-2")}
      width="221"
      height="222"
      viewBox="0 0 221 222"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect
          x="1"
          y="1.99402"
          width="108.261"
          height="108.261"
          stroke="#969696"
          strokeWidth="2"
        />
        <rect
          x="110.739"
          y="111.732"
          width="108.261"
          height="108.261"
          stroke="#969696"
          strokeWidth="2"
        />
        <line
          x1="40.8993"
          y1="110.505"
          x2="165.239"
          y2="220.278"
          stroke="#969696"
          strokeWidth="2"
        />
        <line
          x1="110.446"
          y1="2.22371"
          x2="1.23025"
          y2="111.44"
          stroke="#969696"
          strokeWidth="2"
        />
        <line
          x1="1.22967"
          y1="0.809495"
          x2="56.0989"
          y2="55.6787"
          stroke="#969696"
          strokeWidth="2"
        />
        <line
          x1="220.182"
          y1="111.964"
          x2="110.444"
          y2="221.18"
          stroke="#969696"
          strokeWidth="2"
        />
        <rect
          x="1"
          y="111.732"
          width="108.261"
          height="108.261"
          stroke="#969696"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

export default HeaderRect2;
