import React from "react";
import styles from "./index.module.scss";
import { partners } from "./define";
import { Button, Space, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;

const PartnersIntroduction = () => {
  return (
    <div className={styles.content}>
      <div className={"container"}>
        <Space direction="vertical" style={{ width: "100%" }} size={108}>
          {partners?.map((items, index) => (
            <div className={styles.partner} key={index}>
              <div className={styles.title}>{items?.title}</div>
              <Space direction="vertical" style={{ width: "100%" }} size={52}>
                {items?.cards?.map((card, index) => (

                    <div className={styles.card} key={index}>
                      <div className={styles.img}>
                        <img src={card?.img} alt="" />
                      </div>
                      <div className={styles.cardContent}>
                        <Title className={styles.cardTitle}>
                          {card?.title}
                        </Title>
                        <Paragraph
                          className={styles.cardDescription}
                          ellipsis={{ rows: 5 }}
                        >
                          {card?.content}
                        </Paragraph>
                        <Button className={styles.btn}>
                          {"Learn More "}
                          <RightOutlined style={{ color: '#333333' }} />
                        </Button>
                      </div>
                    </div>

                ))}
              </Space>
            </div>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default PartnersIntroduction;
