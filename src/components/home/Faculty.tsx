"use client";
import React, { useRef } from "react";
import { Space, Typography, Row, Col, Card, Image, Button } from "antd";
import styles from "./Faculty.module.scss";
import {
  LeftOutlined,
  RightOutlined,
  SwapLeftOutlined,
  SwapRightOutlined,
} from "@ant-design/icons";
import { useSize } from "ahooks";
import { addAnimatePulse, removeAnimatePulse, useMobile } from "@/utils";

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const Faculty: React.FC = () => {
  const facultyData = [
    {
      name: "Ryan",
      description: "10+ years programming language",
      avatar: "/image/home/ryan.png",
    },
    {
      name: "Ryan",
      description: "10+ years programming language",
      avatar: "/image/home/ryan.png",
    },
    {
      name: "Ryan",
      description: "10+ years programming language",
      avatar: "/image/home/ryan.png",
    },
  ];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const refs = facultyData.map(() => useRef<HTMLDivElement>(null));

  const computedStyle = (index: number) => {
    const cardDefaultStyle = {
      borderRadius: 10,
      paddingBottom: 6,
      marginTop: 48,
    };
    const iconDefaultStyle = {
      color: "#d46b14",
      borderColor: "#d46b14",
    };
    const colors = ["#D46B14", "#FFAD11", "#FFD600"];
    const cardStyle = {
      ...cardDefaultStyle,
      backgroundColor: colors[index % 3],
    };
    const iconStyle = {
      ...iconDefaultStyle,
      color: colors[index % 3],
      borderColor: colors[index % 3],
    };
    return {
      cardStyle,
      iconStyle,
    };
  };

  const ref = useRef(null);
  const size = useSize(ref);
  console.log(size);
  const isMobile = useMobile();

  return (
    <div className={`${styles.faculty} container`}>
      <Space direction="vertical" align="center">
        <Title className={styles.title}>Faculty</Title>
        <Paragraph className={styles.paragraph}>
          X-Camp has its own Art of Python Programming contest 4.0 award and
          other projects and event every quarter to inspire students . It is a
          great opportunity for students to showcase what they have learned from
          classes .
        </Paragraph>
        <Row
          className={styles.row}
          gutter={40}
          justify="center"
          align="middle"
          ref={ref}
        >
          {facultyData.map((item, index) => {
            return (
              <Col
                key={index}
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <div
                  ref={refs[index]}
                  onMouseEnter={() => addAnimatePulse(refs, index)}
                  onMouseLeave={() => removeAnimatePulse(refs, index)}
                  style={computedStyle(index)?.cardStyle}
                >
                  <Card
                    bodyStyle={{
                      paddingBottom: 0,
                    }}
                  >
                    <Space>
                      <Space direction="vertical">
                        <Text className={styles.name}>{item?.name}</Text>
                        <Paragraph
                          ellipsis={{ rows: 5 }}
                          className={styles.description}
                        >
                          {item?.description}
                        </Paragraph>
                        <Button
                          type="primary"
                          size="small"
                          ghost={true}
                          shape="circle"
                          style={computedStyle(index)?.iconStyle}
                        >
                          <RightOutlined />
                        </Button>
                      </Space>
                      <Image
                        src={item?.avatar}
                        alt="avatar"
                        preview={false}
                        className={styles.cardImage}
                      />
                    </Space>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Space>
    </div>
  );
};

export default Faculty;
