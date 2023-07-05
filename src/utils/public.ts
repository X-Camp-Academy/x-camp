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
export const classifyByAttribution = <T extends any[]>(
  data: T,
  field: string
): T[] => {
  const groupedData: T[] = [];

  data.forEach((item) => {
    const fieldValue = item?.attributes?.[field];
    const index = groupedData?.findIndex(
      (group) => group[0]?.attributes?.[field] === fieldValue
    );

    if (index === -1) {
      groupedData.push([item] as T);
    } else {
      groupedData[index].push(item);
    }
  });

  return groupedData;
};
