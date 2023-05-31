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
  const isMobile = !breakpoints?.includes('lg'); 
  return isMobile;
};
