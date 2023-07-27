export const getWeeksDays = (frequency?: string) => {
  return frequency === "Daily" ? "days" : "weeks";
};

// 获取非空数据
export const getLangResult = (
  lang: "zh" | "en",
  zhData?: string[],
  enData?: string[]
) => {
  if (zhData === null && enData === null) {
    return [];
  } else {
    if (lang === "zh") {
      return zhData ? zhData : enData;
    } else {
      return enData ? enData : zhData;
    }
  }
};
