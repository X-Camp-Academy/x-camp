import React from "react";
import styles from "./index.module.scss";
import { news } from "./define";
import ColorfulCard from "@/components/common/colorful-card";
import { Button, Col, Pagination, Row, Space, Typography } from "antd";
import {
  FieldTimeOutlined,
  PercentageOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
const { Title, Paragraph, Text } = Typography;

const NewsCard = () => {
  return (
    <div className={styles.content}>
      <div className={"container"}>
        <div className={styles.partner}>
          <Space direction="vertical" style={{ width: "100%" }} size={52}>
            {news?.map((item, index) => (
              <ColorfulCard
                key={index}
                border={"bottom"}
                index={index}
                animate={false}
              >
                <div className={styles.card}>
                  <div className={styles.img}>
                    <img src={item?.img} alt="" />
                  </div>
                  <div className={styles.cardContent}>
                    <Title className={styles.cardTitle}>{item?.title}</Title>
                    <Paragraph
                      className={styles.cardDescription}
                      ellipsis={{ rows: 2 }}
                    >
                      {item?.content}
                    </Paragraph>

                    <Row justify="space-around" style={{ marginTop: 80 }}>
                      <Col span={20}>
                        <Space size={30}>
                          <Text type="secondary">
                            <FieldTimeOutlined /> {item?.time}
                          </Text>

                          <Text type="secondary">
                            <PercentageOutlined /> {item?.editor}
                          </Text>
                        </Space>
                      </Col>
                      <Col span={4} style={{ textAlign: "end" }}>
                        <Button icon={<RightCircleOutlined />} type="link" />
                      </Col>
                    </Row>
                  </div>
                </div>
              </ColorfulCard>
            ))}
          </Space>
        </div>

        <Pagination
          defaultCurrent={6}
          total={500}
          className={styles.pagination}
        />
      </div>
    </div>
  );
};

export default NewsCard;
