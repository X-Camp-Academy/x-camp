import { GetNewEvent } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import dayjs from 'dayjs';

enum MonthAbbreviation {
  Jan = 'Jan',
  Feb = 'Feb',
  Mar = 'Mar',
  Apr = 'Apr',
  May = 'May',
  Jun = 'Jun',
  Jul = 'Jul',
  Aug = 'Aug',
  Sep = 'Sep',
  Oct = 'Oct',
  Nov = 'Nov',
  Dec = 'Dec',
}

export interface ContestsByMonthInterface {
  month: MonthAbbreviation;
  contests?: StrapiResponseDataItem<GetNewEvent>[];
}

/**
 *
 * @param data
 * @returns 将data按照月份进行分组
 */
export const formatContestsByMonth = (
  data: StrapiResponseDataItem<GetNewEvent>[]
) => {
  const contestsByMonth: ContestsByMonthInterface[] = Object.values(
    MonthAbbreviation
  )?.map((v) => ({
    month: v,
    contests: [],
  }));
  data?.forEach((contest) => {
    const month = dayjs(contest.attributes.startDateTime).get('month');
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
  data: StrapiResponseDataItem<GetNewEvent>[],
  size: number
) => {
  return Array.from({ length: Math.ceil(12 / size) }, (_, i) =>
    formatContestsByMonth(data).slice(i * size, (i + 1) * size)
  );
};
