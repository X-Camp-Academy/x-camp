"use client";
import React from "react";
import { Space, Row, Col, Typography, Image } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import styles from "./index.module.scss";

const { Title, Text } = Typography;

interface USACOMedalProps {
  showTitle?: boolean;
}

const USACOMedal: React.FC<USACOMedalProps> = ({ showTitle = true }) => {
  const { format: t } = useLang();
  const data = [
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
      title: t("EGOIGoldMedalist"),
      color: "#D46B14",
    },
  ];

  return (
    <Row gutter={16} className={styles.row}>
      <Col
        xs={24}
        sm={24}
        md={4}
        lg={4}
      >
        <Image
          alt=""
          preview={false}
          src={"/image/common/x-camp-logo.png"}
          className={styles.logo}
        />
      </Col>

      {
        showTitle && <div className={styles.titleContainer}>
          <Title className={styles.title}>
            Our&nbsp;
            <Text className={styles.title} style={{ color: "#ffad11" }}>Achievements</Text>
          </Title>
        </div>
      }

      {data?.map((item, index) => (
        <Col
          key={index}
          xs={24}
          sm={24}
          md={5}
          lg={5}
        >
          <div className={styles.medalContainer}>
            <Space direction="vertical">
              <Text className={styles.medalCount} style={{ color: item?.color }}>
                {item?.count}
              </Text>
              <Text className={styles.medalTitle}>{item?.title}</Text>
            </Space>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default USACOMedal;
