"use client";
import React, { ReactNode, useRef } from "react";
import { Collapse } from "antd";
import { ClockCircleOutlined, BranchesOutlined, DownCircleOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
import { addAnimatePulse, removeAnimatePulse } from "@/utils";

interface Props {
  border: "top" | "bottom";
  index: number;
  children: ReactNode;
  total?: number;
  animate?: boolean;
  className?: string;
}
const CollapseColorfulCard: React.FC<Props> = ({
  border = "top",
  index = 0,
  children = null,
  total = 3,
  animate = true,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const threeColors = ["#D46B14", "#FFAD11", "#FFD600"];
  const fourColors = ["#00A0E9", ...threeColors];
  const computedStyle = (border: "top" | "bottom", index: number) => {
    const defaultStyle = {
      padding : 0,
      borderRadius: 10,
      paddingTop: border === "top" ? 6 : 0,
      paddingBottom: border === "bottom" ? 6 : 0,
    };
    return {
      ...defaultStyle,
      backgroundColor:
        total === 3 ? threeColors[index % 3] : fourColors[index % 4],
    };
  };

  return (
    <>
      {/*       <div
        ref={animate ? ref : null}
        style={computedStyle(border, index)}
        onMouseEnter={() => addAnimatePulse(ref)}
        onMouseLeave={() => removeAnimatePulse(ref)}
        className={className}
      >
        {children}
      </div> */}

      <Collapse
        ref={animate ? ref : null}
        style={computedStyle(border, index)}
        
        className={className}
        ghost={true}
        expandIcon={()=>{
          return <></>
        }}
      >
        {children}
      </Collapse>
    </>
  );
};

export default CollapseColorfulCard;
