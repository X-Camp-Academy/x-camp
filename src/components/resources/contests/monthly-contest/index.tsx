import React from "react";
import styles from "./index.module.scss";
import { Carousel } from "antd";
import ContestCard, { ContestCardAlign } from "./contest-card";

const MonthlyContest = () => {
  const data = [
    [
      {
        month: "Jan",
        contests: [
          {
            title: "USACO",
            description: "USACO USACO USACO",
            time: "2022/07/07",
            logo: "https://staticw.turingstar.com.cn/202304201542/19bd99559f79a6a6fa5b7a1a854b5058/5d0a5bf6-9346-440d-b872-86965f3bf19f",
          },
          {
            title: "USACO",
            description: "USACO USACO USACO",
            time: "2022/07/07",
            logo: "https://staticw.turingstar.com.cn/202304201542/19bd99559f79a6a6fa5b7a1a854b5058/5d0a5bf6-9346-440d-b872-86965f3bf19f",
          },
          {
            title: "USACO",
            description: "USACO USACO USACO",
            time: "2022/07/07",
          },
        ],
      },
      {
        month: "Feb",
        contests: [
          {
            title: "USACO",
            description: "USACO USACO USACO",
            time: "2022/07/07",
          },
        ],
      },
      {
        month: "Mar",
        contests: [
          {
            title: "USACO",
            description: "USACO USACO USACO",
            time: "2022/07/07",
          },
        ],
      },
    ],
    [
      {
        month: "Apr",
        contests: [
          {
            title: "USACO",
            description: "USACO USACO USACO",
            time: "2022/07/07",
          },
        ],
      },
      {
        month: "May",
        contests: [
          {
            title: "USACO",
            description: "USACO USACO USACO",
            time: "2022/07/07",
          },
        ],
      },
      {
        month: "Jun",
        contests: [
          {
            title: "USACO",
            description: "USACO USACO USACO",
            time: "2022/07/07",
          },
        ],
      },
    ],
    [
      {
        month: "Jul",
        contests: [
          {
            title: "USACO",
            description: "USACO USACO USACO",
            time: "2022/07/07",
          },
        ],
      },
      {
        month: "Aug",
        contests: [
          {
            title: "USACO",
            description: "USACO USACO USACO",
            time: "2022/07/07",
          },
        ],
      },
      {
        month: "Sep",
        contests: [
          {
            title: "USACO",
            description: "USACO USACO USACO",
            time: "2022/07/07",
          },
        ],
      },
    ],
    [
      {
        month: "Oct",
        contests: [
          {
            title: "USACO",
            description: "USACO USACO USACO",
            time: "2022/07/07",
          },
        ],
      },
      {
        month: "Nov",
        contests: [
          {
            title: "USACO",
            description: "USACO USACO USACO",
            time: "2022/07/07",
          },
        ],
      },
      {
        month: "Dec",
        contests: [
          {
            title: "USACO",
            description: "USACO USACO USACO",
            time: "2022/07/07",
          },
        ],
      },
    ],
  ];
  const align = ["left", "center", "right"] as ContestCardAlign[];

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
                <span className={styles.quarter}>{`Q${i + 1}`}</span>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default MonthlyContest;
