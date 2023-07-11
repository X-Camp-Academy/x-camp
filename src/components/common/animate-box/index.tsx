import React, { ReactNode, useRef } from "react";
import { addAnimate, removeAnimate } from "@/utils";

interface AnimateBoxProps {
  className?: string;
  children?: ReactNode;
}

const AnimateBox: React.FC<AnimateBoxProps> = ({ className, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={className}
      onMouseEnter={() => addAnimate(ref)}
      onMouseLeave={() => removeAnimate(ref)}
    >
      {children}
    </div>
  );
};

export default AnimateBox;
