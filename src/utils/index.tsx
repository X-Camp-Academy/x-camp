import { RefObject } from "react";
import { Grid } from "antd";

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
  const breakpoints = Object.entries(screens)
    ?.filter((screen) => !!screen[1])
    ?.map((screen) => screen[0]);
  const isMobile = !breakpoints?.includes("md");
  return isMobile;
};

/**
 * 添加动画效果
 * ref dom节点
 * name 动画名
 * @returns
 */
export const addAnimate = (
  ref: RefObject<HTMLDivElement>,
  name: string = "hvr-float"
) => {
  (ref?.current as HTMLDivElement)?.classList?.add(name);
};

/**
 * 移除动画效果
 * ref dom节点
 * name 动画名
 * @returns
 */
export const removeAnimate = (
  ref: RefObject<HTMLDivElement>,
  name: string = "hvr-float"
) => {
  (ref?.current as HTMLDivElement)?.classList?.remove(name);
};
