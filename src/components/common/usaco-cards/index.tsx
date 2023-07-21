"use client";
import React from "react";
import { Space, Row, Col, Typography } from "antd";
import styles from "./index.module.scss";
import { useLang } from "@/hoc/with-intl/define";
const { Text } = Typography;
export interface UsacoCardsProps {
  showTitle?: boolean;
}
const UsacoCards = ({ showTitle = false }: UsacoCardsProps) => {
  const { format: t } = useLang();
  const cardsData = [
    {
      count: "200+",
      title: t("USACOSilverAndAbove"),
      color: "#00A0E9",
    },
    {
      count: "30",
      title: t("USACOPlatinum"),
      color: "#FFD600",
    },
    {
      count: "12",
      title: t("USACOFinalist"),
      color: "#FFAD11",
    },
    {
      count: "1",
      title: t("USACOTeam"),
      color: "#D46B14",
    },
  ];

  return (
    <>
      {showTitle && (
        <Space direction={"vertical"} style={{ width: "100%" }} size={30}>
          <div className={styles.usacoTitle}>{t("USACOSpotlight")}</div>
          <div className={styles.usacoDesc}>{t("USACO.Desc")}</div>
        </Space>
      )}
      <Row gutter={16} className={styles.row}>
        {cardsData.map((item, index) => (
          <Col
            key={index}
            xs={24}
            sm={24}
            md={12}
            lg={6}
            className={index === 3 ? styles.col4 : styles.col}
          >
            <div className={styles.cardContainer}>
              <Space direction="vertical">
                <Text className={styles.count} style={{ color: item?.color }}>
                  {item?.count}
                </Text>
                <Text className={styles.cardTitle}>{item?.title}</Text>
              </Space>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default UsacoCards;
