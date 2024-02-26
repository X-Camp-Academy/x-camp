import { useLang } from '@/hoc/with-intl/define';
import { ContestsByMonthInterface } from '../define';
import styles from './index.module.scss';
import { getTransResult } from 'x-star-utils';
import { formatTimezone } from '@/utils/public';
import dayjs, { Dayjs } from 'dayjs';

interface Props {
  data: ContestsByMonthInterface[][] | undefined;
}
const MonthlyContest = ({ data }: Props) => {
  const { lang } = useLang();
  return (
    <div className={`${styles.content} container`}>
      <div className={styles.title}>Contest <span style={{ color: '#FFAD12' }}>Calendar</span></div>
      {
        data?.map(item => (
          item[0]?.contests && item[0]?.contests?.length > 0 &&
          <div className={styles.card} key={item[0]?.month}>
            <div className={styles.month}>{item[0]?.month}</div>
            {
              item[0].contests?.map(contest => {
                const { dayjsTime: startDateTime } = formatTimezone(contest?.attributes?.startDateTime);
                const { dayjsTime: endDateTime } = formatTimezone(contest?.attributes?.endDateTime);
                const noInvalid = (dateTime: Dayjs) => dayjs(dateTime).toString() !== 'Invalid Date';
                return (
                  <div key={contest.id} className={styles.contestItem} style={{ backgroundColor: '#EEF2FE' }} onClick={() => window.open(contest?.attributes?.contestLink)}>
                    <img className={styles.contestLogo} src={contest?.attributes?.mobileLogo?.data?.attributes?.url} alt="" />
                    <div className={styles.contestTitle}>
                      <div>{getTransResult(lang, contest?.attributes?.titleZh, contest?.attributes?.titleEn)}</div>
                      <div className={styles.time}>
                        {noInvalid(startDateTime) && dayjs(startDateTime).format('ddd, MMM DD')}
                        {noInvalid(endDateTime) && `-${dayjs(endDateTime).format('ddd, MMM DD')}`}
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        ))
      }
    </div>
  );
};

export default MonthlyContest;
