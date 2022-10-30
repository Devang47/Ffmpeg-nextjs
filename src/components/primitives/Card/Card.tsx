import React from "react";
import clsx from "clsx";
import ParallelLines from "~/icons/ParallelLines";
import Rect1 from "~/icons/Rect1";
import Circle1 from "~/icons/Circle1";

type Props = {
  children: React.ReactNode;
  className: string;
};

function Card({ children, className }: Props) {
  return (
    <div
      className={clsx(
        "bg-white bg-opacity-[1.5%] border border-white/10 rounded-[12px] py-4 px-6 relative overflow-hidden",
        className
      )}
    >
      <ParallelLines className="w-[100px] absolute top-[-6px] left-[-6px] z-[-1]" />
      <Rect1 className="w-[90px] absolute top-[45%] right-0 z-[-1]" />
      <Circle1 className="w-[130px] absolute bottom-[-5px] left-[-10px] z-[-1]" />

      {children}
    </div>
  );
}

export default Card;
