import React from "react";
import styles from "./index.module.scss";
import { Divider, Popover, Space, Typography } from "antd";
import classNames from "classnames/bind";
import { CalendarOutlined } from "@ant-design/icons";
import { ContestsByMonthInterface } from "../../define";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
const cx = classNames.bind(styles);
const { Paragraph } = Typography;

export enum ContestCardAlign {
  Center = "center",
  Left = "left",
  Right = "right",
}

interface Props {
  data: ContestsByMonthInterface;
  align?: ContestCardAlign;
}

const ContestCard = ({ data, align }: Props) => {
  const { lang } = useLang();
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
                  <div className={styles.title}>
                    {getTransResult(
                      lang,
                      v?.attributes?.titleZh,
                      v?.attributes?.titleEn
                    )}
                  </div>
                  <Space className={styles.time}>
                    <CalendarOutlined />
                    <span>{v?.attributes?.contestDate}</span>
                  </Space>
                </div>
                <div className={styles.right}>
                  {v?.attributes?.logo?.data && (
                    <img
                      src={v?.attributes?.logo?.data?.attributes?.url}
                      alt=""
                    />
                  )}
                </div>
              </div>
            }
            content={
              <div className={styles.popoverContent}>
                <Divider className={styles.divider} />
                <div className={styles.description}>{"Description"}</div>
                <div className={styles.descriptionContent}>
                  <Paragraph ellipsis={{ rows: 8 }}>
                    {getTransResult(
                      lang,
                      v?.attributes?.descriptionZh,
                      v?.attributes?.descriptionEn
                    )}
                  </Paragraph>
                </div>
              </div>
            }
            arrow={false}
            placement="right"
            key={index}
          >
            <div
              className={cx(styles.item, index % 2 === 1 && styles.itemEven)}
              onClick={() => {
                // 滚动到对应的比赛
                const element = document.getElementById(`contest-${v?.id}`);
                element?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
              }}
            >
              <div className={styles.title}>
                {getTransResult(
                  lang,
                  v?.attributes?.titleZh,
                  v?.attributes?.titleEn
                )}
              </div>
              <div className={styles.description}>
                {getTransResult(
                  lang,
                  v?.attributes?.titleExplanationZh,
                  v?.attributes?.titleExplanationEn
                )}
              </div>
              <div className={styles.bottom}>
                <div className={styles.time}>{v?.attributes?.contestDate}</div>
                {v?.attributes?.logo?.data && (
                  <div className={styles.logo}>
                    <img
                      src={v?.attributes?.logo?.data?.attributes?.url}
                      alt=""
                    />
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
