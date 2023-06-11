import { RefObject } from 'react';
import { Grid } from 'antd';

/**
 * xs 屏幕 < 576px
 * sm 屏幕 >= 576px
 * md 屏幕 >= 768px iPad Mini
 * lg 屏幕 >= 992px
 * @returns boolean
 */
export const useMobile = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const breakpoints = Object.entries(screens)?.filter(screen => !!screen[1])?.map(screen => screen[0]);
  // 屏幕 < 992px
  const isMobile = !breakpoints?.includes('md');
  return isMobile;
};

/**
 * 添加动画效果
 * @returns
 */
export const addAnimatePulse = (ref: RefObject<HTMLDivElement> | Array<RefObject<HTMLDivElement>>, index: number) => {
  if (Array.isArray(ref)) {
    (ref[index]?.current as HTMLDivElement)?.classList?.add('animate__animated', 'animate__pulse');
  } else {
    (ref?.current as HTMLDivElement)?.classList?.add('animate__animated', 'animate__pulse');
  }
};

/**
 * 移除动画效果
 * @returns
 */
export const removeAnimatePulse = (ref: RefObject<HTMLDivElement> | Array<RefObject<HTMLDivElement>>, index: number) => {
  if (Array.isArray(ref)) {
    (ref[index]?.current as HTMLDivElement)?.classList?.remove('animate__animated', 'animate__pulse');
  } else {
    (ref?.current as HTMLDivElement)?.classList?.remove('animate__animated', 'animate__pulse');
  }
};