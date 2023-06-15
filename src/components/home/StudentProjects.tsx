"use client";
import React from "react";
import { Space, Typography, Row, Col, Card, Image, Button } from "antd";
import styles from "./StudentProjects.module.scss";
import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";
import { useMobile } from "@/utils";

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const StudentProjects: React.FC = () => {
  const isMobile = useMobile();
  return (
    <div className={`${styles.studentProjects} container`}>
      <Space direction="vertical" align="center">
        <Title className={styles.title}>
          <Text className={styles.titleText}>Student</Text> Projects
        </Title>
        <Paragraph className={styles.paragraph}>
          X-Camp has its own Art of Python Programming contest 4.0 award and
          other projects and event every quarter to inspire students . It is a
          <Text className={styles.paragraphText}> great opportunity </Text>
          for students to showcase what they have learned fProm classes .
        </Paragraph>

        <Row gutter={16} className={styles.row}>
          <Col xs={24} sm={24} md={24} lg={12}>
            <iframe
              width="100%"
              height="100%"
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
              title="X-Camp Academy Intro - 2023"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12}>
            <Space direction="horizontal">
              <Card
                className={styles.card}
                bodyStyle={
                  isMobile
                    ? {
                        padding: 8,
                      }
                    : {
                        padding: 40,
                      }
                }
                cover={
                  <iframe
                    width="100%"
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                    title="X-Camp Academy Intro - 2023"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                }
              >
                <Space direction="vertical" size={24}>
                  <Meta
                    title="The Viper Game"
                    description="Chengry H. Zenan L. and Eric G. Second Place, Art of Programming"
                    className={styles.cardMeta}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    className={styles.cardButton}
                  >
                    <SwapLeftOutlined />
                  </Button>
                </Space>
              </Card>
              <Card
                className={styles.card}
                bodyStyle={
                  isMobile
                    ? {
                        padding: 8,
                      }
                    : {
                        padding: 40,
                      }
                }
                cover={
                  <iframe
                    width="100%"
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                    title="X-Camp Academy Intro - 2023"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                }
              >
                <Space direction="vertical" size={24}>
                  <Meta
                    title="The Viper Game"
                    description="Chengry H. Zenan L. and Eric G. Second Place, Art of Programming"
                    className={styles.cardMeta}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    ghost
                    className={styles.cardButton}
                  >
                    <SwapRightOutlined />
                  </Button>
                </Space>
              </Card>
            </Space>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default StudentProjects;
