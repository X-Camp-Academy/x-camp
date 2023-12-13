import { GetContests } from '@/apis/strapi-client/define';
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
  Dec = 'Dec'
}

export interface ContestsByMonthInterface {
  month: MonthAbbreviation;
  contests?: StrapiResponseDataItem<GetContests>[];
}

export const formatContestsByMonth = (data: StrapiResponseDataItem<GetContests>[]) => {
  const contestsByMonth: ContestsByMonthInterface[] = Object.values(MonthAbbreviation)?.map((v) => ({
    month: v,
    contests: []
  }));
  data?.forEach((contest) => {
    const month = dayjs(contest.attributes.startDateTime).get('month');
    if (!isNaN(month)) {
      contestsByMonth?.[month]?.contests?.push(contest);
    }
  });
  return contestsByMonth;
};

export const filterContest = (data?: StrapiResponseDataItem<GetContests>[]) => {
  return data?.filter((item) => !item?.attributes?.isContestEvent);
};

export const formatContestsByQuarter = (data: StrapiResponseDataItem<GetContests>[], size: number) => {
  return Array.from({ length: Math.ceil(12 / size) }, (_, i) => formatContestsByMonth(data).slice(i * size, (i + 1) * size));
};
