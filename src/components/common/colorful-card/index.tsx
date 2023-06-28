"use client";
import React, { ReactNode, useRef } from "react";
import { addAnimate, removeAnimate } from "@/utils";
import "hover.css";

interface Props {
  border: "top" | "bottom";
  index: number;
  children: ReactNode;
  total?: number;
  reverse?: boolean;
  animate?: boolean;
  className?: string;
}

const ColorfulCard: React.FC<Props> = ({
  border = "top",
  index = 0,
  children = null,
  total = 3,
  reverse = false,
  animate = true,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const threeColors = ["#D46B14", "#FFAD11", "#FFD600"];
  const fourColors = ["#00A0E9", ...threeColors];
  const computedStyle = (
    border: "top" | "bottom",
    index: number,
    reverse: boolean
  ) => {
    const defaultStyle = {
      borderRadius: 10,
      paddingTop: border === "top" ? 6 : 0,
      paddingBottom: border === "bottom" ? 6 : 0,
    };
    const getBackGroundColor = (total: number, reverse: boolean) => {
      return total === 3
        ? reverse
          ? threeColors.reverse()[index % 3]
          : threeColors[index % 3]
        : reverse
        ? fourColors.reverse()[index % 4]
        : fourColors[index % 4];
    };

    return {
      ...defaultStyle,
      backgroundColor: getBackGroundColor(total, reverse),
    };
  };

  return (
    <div
      ref={animate ? ref : null}
      style={computedStyle(border, index, reverse)}
      onMouseEnter={() => addAnimate(ref)}
      onMouseLeave={() => removeAnimate(ref)}
      className={className}
    >
      {children}
    </div>
  );
};

export default ColorfulCard;
