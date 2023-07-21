import React, { useEffect, useRef } from "react";
import styles from "./index.module.scss";
import { Carousel } from "antd";
import ContestCard, { ContestCardAlign } from "./contest-card";
import { ContestsByMonthInterface, Quarter } from "../define";
import dayjs from "dayjs";
import { CarouselRef } from "antd/es/carousel";
import { useMobile } from "@/utils";

interface Props {
  data: ContestsByMonthInterface[][] | undefined;
}

const MonthlyContest = ({ data }: Props) => {
  const align = ["left", "center", "right"] as ContestCardAlign[];
  const defaultSlideToThisMonth =  Math.floor(dayjs().month() / 3); 
  const ref = useRef<CarouselRef>(null);
  useEffect(() => {
    ref?.current?.goTo(defaultSlideToThisMonth);//默认跳转当前月份的page
  }, [])

  return (
    <div className={styles.content}>
      <div className="container">
        <Carousel
          autoplay={false}
          className={styles.carousel}
          dots={{ className: styles.dots }}
          ref={ref}
        >
          {data?.map((items, i) => {
            return (
              <div key={i} className={styles.months}>
                {items?.map((item, j) => {
                  return <ContestCard data={item} key={j} align={align[j]} />;
                })}
                <span className={styles.quarter}>{`Q${Quarter[items?.[0]?.month]
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
