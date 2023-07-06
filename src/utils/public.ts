"use client";

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
  values: string[]
): T[] => {
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
