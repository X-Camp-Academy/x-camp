"use client";

import { useLang } from "@/hoc/with-intl/define";
import dayjs, { Dayjs, tz } from "dayjs";

/**
 * 选择语言
 * @param lang 语言
 * @param zhText 中文字段
 * @param enText 英文字段
 * @returns string
 */
export const getTransResult = (
  lang: "zh" | "en",
  zhText: string | undefined,
  enText: string | undefined
) => {
  if (zhText === undefined && enText === undefined) return "";
  if (lang == "zh") return zhText ? zhText : enText;
  else return enText ? enText : zhText;
};

/**
 * 将扁平化数据根据某个字段分类
 */
export const classifyByAttribution = <T extends { attributes: any }>(
  data: T[],
  field: string
): T[][] => {
  const groupedData: T[][] = [];

  data.forEach((item) => {
    const fieldValue = item?.attributes?.[field];
    const index = groupedData?.findIndex(
      (group) => group[0]?.attributes?.[field] === fieldValue
    );

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
export const filterByAttribution = <T extends { attributes: any }>(
  data: T[],
  attribution: keyof T["attributes"] & string,
  values?: string[]
): T[] => {
  if (values === undefined) return data;
  const filteredData: T[] = data?.filter((item) => {
    const fieldValue = item?.attributes?.[attribution];
    const formattedFieldValue: string[] = fieldValue?.split(",") ?? [];
    if (
      formattedFieldValue?.length === 0 ||
      values?.some((value) => formattedFieldValue?.includes(value))
    ) {
      // 这一项空的没填，或者填的内容分割之后在values中则留下
      return true;
    }
    return false;
  });
  return filteredData;
};

/**
 *
 * @param array
 * @returns 数组去重，重复的判定标准是每个对象的id属性
 */
export const deduplicateArray = <
  T extends {
    id: number;
  }
>(
  array: T[]
): T[] => {
  const deduplicatedArray: T[] = [];
  const idSet = new Set<number>();
  for (const item of array) {
    if (!idSet.has(item?.id)) {
      deduplicatedArray.push(item);
      idSet.add(item?.id);
    }
  }

  return deduplicatedArray;
};
export enum TimeZone {
  CST = 8,
  EDT = -4,
  PDT = -7,
  PST = -8,
  EST = -5,
}

/**
 * 时区转换钩子
 * - 举例1 (夏令时)
  - 输入本地时间    2023-07-12T16:00:00.000Z  注意Strapi会自动帮你转到零点
  - 官网显示结果
    - 太平洋时区 ：  2023-07-12 16:00:00 PDT
    - 美东时间（夏令时）：2023-07-12 19:00:00 EDT 
    - 中国时间：2023-07-13 07:00:00 CST
    - 美国中部时间: 2023-07-12 18:00:00 (UTC-5)
 * @param weekVisible 
 * @returns 
 */
export const formatTimezone = (original: string | undefined) => {
  const utcOffset = dayjs().utcOffset() / 60;
  const utcTime = dayjs.utc(original).utcOffset(utcOffset);
  //特殊时区转化描述
  const convertTimeZone = () => {
    switch (utcOffset) {
      case TimeZone.CST:
        return "CST";
      case TimeZone.EDT:
        return "EDT";
      case TimeZone.EST:
        return "EST";
      case TimeZone.PST:
        return "PST";
      case TimeZone.PDT:
        return "PDT";
      default:
        return `GMT${utcOffset >= 0 ? `+${utcOffset}` : utcOffset}`;
    }
  };
  return {
    timezone: convertTimeZone(),
    utcTime,
  } as const;
};
