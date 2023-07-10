import React from "react";
import styles from "./index.module.scss";
import { Carousel } from "antd";
import ContestCard, { ContestCardAlign } from "./contest-card";
import { ContestsByMonthInterface, Quarter } from "../define";

interface Props {
  data: ContestsByMonthInterface[][] | undefined;
}

const MonthlyContest = ({ data }: Props) => {
  const align = ["left", "center", "right"] as ContestCardAlign[];
console.log(data)
  return (
    <div className={styles.content}>
      <div className="container">
        <Carousel
          autoplay={false}
          className={styles.carousel}
          dots={{ className: styles.dots }}
        >
          {data?.map((items, i) => {
            return (
              <div key={i} className={styles.months}>
                {items?.map((item, j) => {
                  return <ContestCard data={item} key={j} align={align[j]} />;
                })}
                <span className={styles.quarter}>{`Q${
                  Quarter[items?.[0]?.month]
                }`}</span>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default MonthlyContest;
