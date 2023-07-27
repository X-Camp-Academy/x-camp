import React from "react";
import styles from "./index.module.scss";
import ContestCard from "./contest-card";
import { ContestsByMonthInterface } from "../define";

interface Props {
  data: ContestsByMonthInterface[][] | undefined;
}

const MonthlyContest = ({ data }: Props) => {
  return (
    <div className={styles.content}>
      <div className="container">
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
    </div>
  );
};

export default MonthlyContest;
