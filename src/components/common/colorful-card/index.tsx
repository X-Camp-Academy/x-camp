"use client";
import React, { ReactNode, useRef } from "react";
import { addAnimatePulse, removeAnimatePulse } from "@/utils";

interface Props {
  gap: "top" | "bottom";
  index: number;
  children: ReactNode;
  three?: boolean;
  animate?: boolean;
  className?: string;
}
const ColorfulCard: React.FC<Props> = ({
  gap = "top",
  index = 0,
  children = null,
  three = true,
  animate = true,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const threeColors = ["#D46B14", "#FFAD11", "#FFD600"];
  const fourColors = ["#00A0E9", ...threeColors];
  const computedStyle = (gap: "top" | "bottom", index: number) => {
    const defaultStyle = {
      borderRadius: 10,
      paddingTop: gap === "top" ? 6 : 0,
      paddingBottom: gap === "bottom" ? 6 : 0,
    };
    return {
      ...defaultStyle,
      backgroundColor: three ? threeColors[index % 3] : fourColors[index % 4],
    };
  };

  return (
    <div
      ref={animate ? ref : null}
      style={computedStyle(gap, index)}
      onMouseEnter={() => addAnimatePulse(ref)}
      onMouseLeave={() => removeAnimatePulse(ref)}
      className={className}
    >
      {children}
    </div>
  );
};

export default ColorfulCard;
