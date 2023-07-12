import { ClockCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Card, Space, Button, Typography } from "antd";
import React from "react";
import ColorfulCard, { ColorfulCardProps } from "../colorful-card";
import styles from "./index.module.scss";
const { Title, Paragraph } = Typography;

type ClassCardProps = Omit<ColorfulCardProps, "children"> & {
  index: number;
  title: string;
  href: string;
  list: string[];
  time: string;
  children?: React.ReactNode;
};

const ClassCard = ({ index, href, title, list, time }: ClassCardProps) => {
  return (
    <ColorfulCard
      border={"bottom"}
      index={index}
      animate={false}
      className={styles.colorfulCard}
    >
      <Card className={styles.card}>
        <Space
          direction="vertical"
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Title className={styles.cardTitle}>{title}</Title>
          <Paragraph ellipsis={{ rows: 4 }}>
            {list?.map((v, index) => (
              <div key={index} className={styles.list}>
                {v}
              </div>
            ))}
          </Paragraph>
          <Space className={styles.bottom}>
            <Space className={styles.week} size={5}>
              <ClockCircleOutlined />
              <span>{time}</span>
            </Space>
            <Button
              href={href}
              icon={<RightCircleOutlined />}
              className={styles.link}
              type="link"
            />
          </Space>
        </Space>
      </Card>
    </ColorfulCard>
  );
};

export default ClassCard;
