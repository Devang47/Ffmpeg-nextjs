import React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
};

function HeaderRect({ className }: Props) {
  return (
    <svg
      className={clsx(className, "stroke-light-2")}
      width="293"
      height="226"
      viewBox="0 0 293 226"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect
          x="1"
          y="2"
          width="289"
          height="222.431"
          stroke="#969696"
          strokeWidth="2"
        />
        <line
          x1="146.346"
          y1="0.997015"
          x2="147.016"
          y2="225.429"
          stroke="#969696"
          strokeWidth="2"
        />
        <line
          x1="1.90222"
          y1="137.953"
          x2="290.163"
          y2="137.953"
          stroke="#969696"
          strokeWidth="2"
        />
        <line
          x1="291.607"
          y1="1.79436"
          x2="0.607446"
          y2="224.324"
          stroke="#969696"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

export default HeaderRect;
