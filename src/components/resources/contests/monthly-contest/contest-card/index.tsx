import React from "react";
import styles from "./index.module.scss";
import { Space } from "antd";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export enum ContestCardAlign {
  Center = "center",
  Left = "left",
  Right = "right",
}

interface Props {
  data: {
    month: string;
    contests: {
      title: string;
      description?: string;
      time: string;
      logo?: string;
    }[];
  };
  align?: ContestCardAlign;
}

const ContestCard = ({ data, align }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.month}>{data?.month}</div>
      <Space
        size={"middle"}
        direction="vertical"
        className={cx(
          styles.content,
          align === ContestCardAlign.Left && styles.contentLeft,
          align === ContestCardAlign.Center && styles.contentCenter,
          align === ContestCardAlign.Right && styles.contentRight
        )}
      >
        {data?.contests?.map((v, index) => (
          <div
            className={cx(styles.item, index % 2 === 1 && styles.itemEven)}
            key={index}
          >
            <div className={styles.title}>{v?.title}</div>
            <div className={styles.description}>{v?.description}</div>
            <div className={styles.bottom}>
              <div className={styles.time}>{v?.time}</div>
              {v?.logo && (
                <div className={styles.logo}>
                  <img src={v?.logo} alt="" />
                </div>
              )}
            </div>
          </div>
        ))}
      </Space>
    </div>
  );
};

export default ContestCard;
