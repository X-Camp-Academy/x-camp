'use client';
import { addAnimate, removeAnimate } from '@/utils';
import { Collapse } from 'antd';
import 'hover.css';
import React, { ReactNode, useRef } from 'react';

export interface ColorfulCardProps {
  border: 'top' | 'bottom';
  index: number;
  children: ReactNode;
  split?: number;
  reverse?: boolean;
  animate?: boolean;
  className?: string;
  collapse?: boolean;
}

const ColorfulCard: React.FC<ColorfulCardProps> = ({ border = 'top', index = 0, children = null, split = 3, reverse = false, animate = true, className = '', collapse = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const threeColors = ['#FFD600', '#FFAD11', '#D46B14'];
  const fourColors = ['#00A0E9', ...threeColors];
  const computedStyle = (border: 'top' | 'bottom', index: number, reverse: boolean) => {
    const defaultStyle = {
      borderRadius: 10,
      paddingTop: border === 'top' ? 6 : 0,
      paddingBottom: border === 'bottom' ? 6 : 0
    };
    const getBackGroundColor = (split: number, reverse: boolean) => {
      return split === 3 ? (reverse ? threeColors?.reverse()[index % 3] : threeColors[index % 3]) : reverse ? fourColors?.reverse()[index % 4] : fourColors[index % 4];
    };

    return {
      ...defaultStyle,
      backgroundColor: getBackGroundColor(split, reverse)
    };
  };

  return collapse ? (
    <Collapse style={computedStyle(border, index, reverse)} className={className} ghost>
      {children}
    </Collapse>
  ) : (
    <div ref={animate ? ref : null} style={computedStyle(border, index, reverse)} onMouseEnter={() => addAnimate(ref)} onMouseLeave={() => removeAnimate(ref)} className={className}>
      {children}
    </div>
  );
};

export default ColorfulCard;
