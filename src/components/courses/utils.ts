export const getWeeksDays = (frequency?: string) => {
  return frequency === "Daily" ? "days" : "weeks";
};
