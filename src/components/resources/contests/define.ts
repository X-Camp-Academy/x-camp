import { GetResourcesContest } from "@/apis/strapi-client/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import dayjs from "dayjs";

enum MonthAbbreviation {
  Jan = "Jan",
  Feb = "Feb",
  Mar = "Mar",
  Apr = "Apr",
  May = "May",
  Jun = "Jun",
  Jul = "Jul",
  Aug = "Aug",
  Sep = "Sep",
  Oct = "Oct",
  Nov = "Nov",
  Dec = "Dec",
}

/**
 * 映射为对应的季度
 */
export const Quarter = {
  [MonthAbbreviation.Jan]: 1,
  [MonthAbbreviation.Feb]: 1,
  [MonthAbbreviation.Mar]: 1,
  [MonthAbbreviation.Apr]: 2,
  [MonthAbbreviation.May]: 2,
  [MonthAbbreviation.Jun]: 2,
  [MonthAbbreviation.Jul]: 3,
  [MonthAbbreviation.Aug]: 3,
  [MonthAbbreviation.Sep]: 3,
  [MonthAbbreviation.Oct]: 4,
  [MonthAbbreviation.Nov]: 4,
  [MonthAbbreviation.Dec]: 4,
};

export interface ContestsByMonthInterface {
  month: MonthAbbreviation;
  contests?: StrapiResponseDataItem<GetResourcesContest>[];
}

/**
 *
 * @param data
 * @returns 将data按照月份进行分组
 */
export const formatContestsByMonth = (
  data: StrapiResponseDataItem<GetResourcesContest>[]
) => {
  const contestsByMonth: ContestsByMonthInterface[] = Object.values(
    MonthAbbreviation
  )?.map((v) => ({
    month: v,
    contests: [],
  }));
  data?.forEach((contest) => {
    const month = dayjs(contest.attributes.contestDate).get("month");
    if (!isNaN(month)) {
      contestsByMonth?.[month]?.contests?.push(contest);
    }
  });
  return contestsByMonth;
};

/**
 *
 * @param data
 * @returns 将data按照月份进行分组，然后按照size进行分组
 */
export const formatContestsByQuarter = (
  data: StrapiResponseDataItem<GetResourcesContest>[],
  size: number
) => {
  return Array.from({ length: Math.ceil(12 / size) }, (_, i) =>
    formatContestsByMonth(data).slice(i * size, (i + 1) * size)
  );
};
