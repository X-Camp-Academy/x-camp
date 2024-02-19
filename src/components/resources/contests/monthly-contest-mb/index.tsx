import { useLang } from '@/hoc/with-intl/define';
import { ContestsByMonthInterface } from '../define';
import styles from './index.module.scss';
import { getTransResult } from 'x-star-utils';

interface Props {
  data: ContestsByMonthInterface[][] | undefined;
}
const MonthlyContest = ({ data }: Props) => {
  const { lang } = useLang();
  return (
    <div className={`${styles.content} container`}>
      <div>Contest <span style={{ color: '#FFAD12' }}>Calendar</span></div>
      {
        data?.map(item => (
          item[0]?.contests && item[0]?.contests?.length > 0 &&
          <div className={styles.card} key={item[0]?.month}>
            <div className={styles.month}>{item[0]?.month}</div>
            {
              item[0].contests?.map(contest => (
                <div key={contest.id} className={styles.contestItem} onClick={() => window.open(contest?.attributes?.contestLink)}>
                  <img className={styles.contestLogo} src={contest?.attributes?.contestLogo?.data?.attributes?.url} alt="" />
                  <div className={styles.contestTitle}>{getTransResult(lang, contest?.attributes?.titleZh, contest?.attributes?.titleEn)}</div>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default MonthlyContest;
