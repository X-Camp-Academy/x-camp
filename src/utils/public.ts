'use client';
import { FrequencyCategory } from '@/apis/strapi-client/define';
import dayjs, { Dayjs } from 'dayjs';

export const defaultVideoUrl = 'https://media.strapi.turingstar.com.cn/production/2023/7/20230726_162259_bac67c1a78.mp4?autoplay=0';
export const monthNameEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const monthNameZH = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

/**
 * 选择语言
 * @param lang 语言
 * @param zhText 中文字段
 * @param enText 英文字段
 * @returns string
 */
export const getTransResult = (lang: 'zh' | 'en', zhText: string | undefined, enText: string | undefined) => {
  if (zhText === undefined && enText === undefined) return '';
  if (lang === 'zh') return zhText ? zhText : enText;
  else return enText ? enText : zhText;
};

/**
 * 选择语言
 * @param lang 语言
 * @param zhText 中文数据
 * @param enText 英文数据
 * @returns string[]
 */
export const getLangResult = <T>(lang: 'zh' | 'en', zhData?: T, enData?: T) => {
  if (zhData === null && enData === null) {
    return [];
  } else {
    if (lang === 'zh') {
      return zhData ? zhData : enData;
    } else {
      return enData ? enData : zhData;
    }
  }
};

/**
 * 根据指定语言获取相应的内容。
 *
 * @param lang 指定的语言，只能是'zh'或'en'。
 * @param zhContent 中文内容，可能为null或undefined。
 * @param enContent 英文内容，可能为null或undefined。
 * @returns 返回指定语言的内容，如果指定语言的内容不存在且另一项内容存在，则返回另一项内容；如果两项内容都不存在或语言参数不是'zh'或'en'，则返回null。
 */
export function getTransContent<T>(lang: 'zh' | 'en', zhContent: T | null, enContent: T | null): T | null {
  // 检查内容是否合法
  const isContentValid = (content: T | null) => {
    if (content === null || content === undefined) {
      return false;
    }
    if (Array.isArray(content) && content.length === 0) {
      return false;
    }
    return true;
  };

  // 根据语言返回对应的内容，如果内容不合法则返回另一项
  if (lang === 'zh') {
    return isContentValid(zhContent) ? zhContent : enContent;
  } else if (lang === 'en') {
    return isContentValid(enContent) ? enContent : zhContent;
  }

  // 如果语言不是'zh'也不是'en'，则返回null
  return null;
}

/**
 * 将扁平化数据根据某个字段分类
 */
export const classifyByAttribution = <T extends { attributes: any }>(data: T[], field: string): T[][] => {
  const groupedData: T[][] = [];
  data.forEach((item) => {
    const fieldValue = item?.attributes?.[field];
    const index = groupedData?.findIndex((group) => group[0]?.attributes?.[field] === fieldValue);

    if (index === -1) {
      groupedData.push([item]);
    } else {
      groupedData[index].push(item);
    }
  });
  return groupedData;
};

/**
 *
 * @param data 数据源
 * @param attribution 要筛选的属性
 * @param values 筛选的属性值
 * @returns
 */
export const filterByAttribution = <T extends { attributes: any }>(data: T[], attribution: keyof T['attributes'] & string, values?: string[]): T[] => {
  if (values === undefined) return data;
  const filteredData: T[] = data?.filter((item) => {
    const fieldValue = item?.attributes?.[attribution];
    const formattedFieldValue: string[] = fieldValue?.split(',') ?? [];
    if (formattedFieldValue?.length === 0 || values?.some((value) => formattedFieldValue?.includes(value))) {
      // 这一项空的没填，或者填的内容分割之后在values中则留下
      return true;
    }
    return false;
  });
  return filteredData;
};

export const scrollIntoView = (id: string) => {
  const dom = document.getElementById(id);
  dom?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

export const getWeeksDays = (frequency?: FrequencyCategory) => {
  switch (frequency) {
    case FrequencyCategory.Daily:
      return 'days';
    case FrequencyCategory.Weekly:
      return 'weeks';
    case FrequencyCategory.Once:
      return 'once';
    default:
      return 'days';
  }
};

export const formatFinance = (number?: number | string) => {
  if (number === undefined) return;
  return number?.toString()?.replace(/\B(?=(\d{3})+$)/g, ',');
};

export enum StandardTimeZone {
  HawaiiStandardTime = -10, // North America  Pacific
  MountainStandardTime = -7, // North America
  PacificStandardTime = -8, // North America
  CentralStandardTime = -6, // North America  Central America
  EasternStandardTime = -5, // North America  Caribbean  Central America
  ChinaStandardTime = 8 // 	Asia
}

export enum DaylightTimeZone {
  HawaiiDaylightTime = -9, // North America  Pacific
  PacificDaylightTime = -7, // North America
  MountainDaylightTime = -6, // North America
  CentralDaylightTime = -5, // North America  Central America
  EasternDaylightTime = -4, // North America  Caribbean  Central America
  ChinaStandardTime = 8 // 	Asia
}

/**
 * @param date
 * @returns 判断是否是夏令时，用dayjs判断“每年3月的第二个星期日到11月的第一个星期日期间”
 */
const isSummerTime = (date: Dayjs): boolean => {
  const currentYear = date.year();
  const currentDay = date.valueOf();
  // 判断是否是第二个星期日到第一个星期日之间
  const novemberFirstSunday = dayjs().year(currentYear).month(10).startOf('month').add(1, 'week').day(0).valueOf();
  // console.log('novemberFirstSunday', novemberFirstSunday);

  const marchSecondSunday = dayjs().year(currentYear).month(2).startOf('month').add(2, 'week').day(0).valueOf();
  // console.log('marchSecondSunday', marchSecondSunday);

  // currentDay >= 2024-03-10 00:00:00 && currentDay <= 2023-11-03 00:00:00
  return currentDay >= marchSecondSunday && currentDay <= novemberFirstSunday;
};

/**
 * 时区转换函数
 * utcOffset 获取传入的时间相对于utc零时的时区偏移量，dayjs会自动处理冬夏令时，自动匹配时区
 * @returns
 */
export const formatTimezone = (original: string | undefined) => {
  const utcOffset = dayjs(original).utcOffset() / 60;
  const dayjsTime = dayjs(original);

  const convertTimeZone = () => {
    if (isSummerTime(dayjsTime)) {
      switch (utcOffset) {
        case DaylightTimeZone.HawaiiDaylightTime:
          return 'HDT';
        case DaylightTimeZone.PacificDaylightTime:
          return 'PDT';
        case DaylightTimeZone.MountainDaylightTime:
          return 'MDT';
        case DaylightTimeZone.CentralDaylightTime:
          return 'CDT';
        case DaylightTimeZone.EasternDaylightTime:
          return 'EDT';
        case DaylightTimeZone.ChinaStandardTime:
          return 'CST';
        default:
          return `GMT${utcOffset >= 0 ? `+${utcOffset}` : utcOffset}`;
      }
    } else {
      switch (utcOffset) {
        case StandardTimeZone.HawaiiStandardTime:
          return 'HST';
        case StandardTimeZone.PacificStandardTime:
          return 'PST';
        case StandardTimeZone.MountainStandardTime:
          return 'MST';
        case StandardTimeZone.CentralStandardTime:
          return 'CST';
        case StandardTimeZone.EasternStandardTime:
          return 'EST';
        case DaylightTimeZone.ChinaStandardTime:
          return 'CST';
        default:
          return `GMT${utcOffset >= 0 ? `+${utcOffset}` : utcOffset}`;
      }
    }
  };

  return {
    timezone: convertTimeZone(),
    dayjsTime
  } as const;
};
