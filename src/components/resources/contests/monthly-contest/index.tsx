import { ContestsByMonthInterface } from '../define';
import ContestCard from './contest-card';
import styles from './index.module.scss';

interface Props {
  data: ContestsByMonthInterface[][] | undefined;
}

const MonthlyContest = ({ data }: Props) => {
  return (
    <div className={`${styles.content} container`}>
      {data?.map((items, i) => {
        return (
          <div key={i} className={styles.months}>
            {items?.map((item, j) => {
              return <ContestCard data={item} key={j} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MonthlyContest;
