import { useLang } from '@/hoc/with-intl/define';
import { Typography } from 'antd';
import { ContestsByMonthInterface } from '../define';
import ContestCard from './contest-card';
import styles from './index.module.scss';

interface Props {
  data: ContestsByMonthInterface[][] | undefined;
}
const { Title } = Typography;
const MonthlyContest = ({ data }: Props) => {
  const { format: t } = useLang();
  return (
    <div className={`${styles.content} container`}>
      <Title className={styles.title}>{t('ContestCalendar.Title')}</Title>
      {data?.map((items, i) => {
        return (
          <div key={items[i]?.month} className={styles.months}>
            {items?.map((item) => {
              return <ContestCard data={item} key={item?.month} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MonthlyContest;
