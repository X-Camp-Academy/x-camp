import React from "react";
import styles from "./index.module.scss";
import { Divider, Popover, Space } from "antd";
import classNames from "classnames/bind";
import { CalendarOutlined } from "@ant-design/icons";
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
          <Popover
            title={
              <div className={styles.popoverTitle}>
                <div className={styles.left}>
                  <div className={styles.title}>{v?.title}</div>
                  <Space className={styles.time}>
                    <CalendarOutlined />
                    <span>{v?.time}</span>
                  </Space>
                </div>
                <div className={styles.right}>
                  {v?.logo && <img src={v?.logo} alt="" />}
                </div>
              </div>
            }
            content={
              <div className={styles.popoverContent}>
                <Divider className={styles.divider} />
                <div className={styles.description}>{"Description"}</div>
                <div className={styles.descriptionContent}>
                  {v?.description}
                </div>
              </div>
            }
            arrow={false}
            placement="right"
            key={index}
          >
            <div
              className={cx(styles.item, index % 2 === 1 && styles.itemEven)}
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
          </Popover>
        ))}
      </Space>
    </div>
  );
};

export default ContestCard;
