import {
  Space,
  Row,
  Col,
  Card,
  Image,
  Typography,
  Carousel,
  Button,
  List,
} from "antd";
import { CarouselRef } from "antd/es/carousel";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import styles from "./USACOMedal.module.scss";
import React, { useRef } from "react";
import Link from "next/link";
import ColorfulCard from "@/components/common/colorful-card";
const { Title, Paragraph, Text } = Typography;

const USACOMedal: React.FC = () => {
  const carouselEL = useRef<CarouselRef>(null);

  const comments = [
    [
      {
        src: "/image/home/charlie-big.png",
        title: "Michael",
        comment: "2023 US Camp",
        borderColorIndex: 3,
      },
      {
        src: "/image/home/charlie-big.png",
        title: "Michael",
        comment: "2023 US Camp",
        borderColorIndex: 2,
      },
      {
        src: "/image/home/charlie-big.png",
        title: "Michael",
        comment: "2023 US Camp",
        borderColorIndex: 1,
      },
    ],
    [
      {
        src: "/image/home/charlie-big.png",
        title: "Michael",
        comment: "2023 US Camp",
        borderColorIndex: 3,
      },
      {
        src: "/image/home/charlie-big.png",
        title: "Michael",
        comment: "2023 US Camp",
        borderColorIndex: 2,
      },
      {
        src: "/image/home/charlie-big.png",
        title: "Michael",
        comment: "2023 US Camp",
        borderColorIndex: 1,
      },
    ],
  ];

  const cardData = [
    {
      number: "200+",
      numberColor: "#00A0E9",
      text: "USACO Silver and above",
      borderColorIndex: 4,
    },
    {
      number: "30",
      numberColor: "#FFD600",
      text: "USACO Platinum",
      borderColorIndex: 3,
    },
    {
      number: "12",
      numberColor: "#FFAD11",
      text: "USACO Finalist",
      borderColorIndex: 2,
    },
    {
      number: "1",
      numberColor: "#D46B14",
      text: "USACO Team",
      borderColorIndex: 1,
    },
  ];

  const listData = [
    {
      title: "In the 20/21 season",
      content: "one student made it to the USACO US Camp (USACO Finalist).",
    },
    {
      title: "In the 21/22 season",
      content:
        "four students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).",
    },
    {
      title: "In the last 22/23 season",
      content:
        "seven students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).",
    },
    {
      title: "The latest data for USACO 23 Season",
      content:
        "Includes 46 students who advanced from the Bronze to the Gold Division, 16 students who advanced from the Silver to the GoldDivision, and 10 students who advanced from the Gold to the Platinum Division.",
    },
  ];
  return (
    <>
      <div className={styles.USACOMedalContainer}>
        <div className={styles.container}>
          <Space direction="vertical" align="start">
            <Title className={styles.title}>USACO Medal</Title>
            <Text className={styles.intro}>
              Over the past 5 years, more than 200 X-Camp students have
              qualified for the USACO Silver division and above; including 30 in
              the Platinum division and 12 selected in the US Camp, out of which
              7 were fresh from the 2023 season.
            </Text>
          </Space>

          <div className={styles.medalIntro}>
            <Button
              className={styles.prev}
              onClick={() => {
                carouselEL?.current?.prev();
              }}
              icon={<LeftCircleTwoTone />}
            ></Button>

            <Carousel ref={carouselEL} dots={false}>
              {comments.map((page, index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <Row
                      gutter={40}
                      justify="center"
                      align="middle"
                      className={styles.row}
                    >
                      {page.map((item, index) => {
                        return (
                          <Col
                            key={index}
                            xs={24}
                            sm={24}
                            md={24}
                            lg={8}
                            className={styles.col}
                          >
                            <ColorfulCard
                              border="bottom"
                              index={item.borderColorIndex}
                            >
                              <Card
                                bodyStyle={{
                                  borderWidth: 2,
                                }}
                                className={styles.colCard}
                              >
                                <Space direction="vertical">
                                  <Image
                                    alt="image"
                                    src={item.src}
                                    className={styles.image}
                                  ></Image>
                                  <Title className={styles.cardTitle}>
                                    {item?.title}
                                  </Title>
                                  <Text className={styles.cardText}>
                                    {item?.comment}
                                  </Text>
                                </Space>
                              </Card>
                            </ColorfulCard>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                );
              })}
            </Carousel>

            <Button
              className={styles.next}
              onClick={() => {
                carouselEL?.current?.next();
              }}
              icon={<RightCircleTwoTone />}
            ></Button>
          </div>

          <div className={styles.timeLineContainer}>
            <div className={`${styles.timeLine} container`}>
              <Space direction="vertical" align="start">
                <Title className={styles.title}>Timeline</Title>
                <Text className={styles.intro}>
                  Nevertheless, our teaching principle is that the USACO is just
                  a side project for our students. We hope that they can lay a
                  solid foundation in computer algorithms and data structures
                  and challenge themselves during the learning process.
                </Text>
              </Space>

              <div className={styles.listContainer}>
                <List
                  dataSource={listData}
                  split={false}
                  renderItem={(item) => (
                    <List.Item className={styles.timeListItem}>
                      <List.Item.Meta
                        title={
                          <Text className={styles.timeListTitle}>
                            {item.title}
                          </Text>
                        }
                        description={
                          <Paragraph className={styles.timeListDetail}>
                            {item.content}
                          </Paragraph>
                        }
                      />
                    </List.Item>
                  )}
                />
              </div>

              <Link className={styles.download} href="/">
                <Image
                  alt="download"
                  src="/image/about-us/achievement/download-outlined.png"
                ></Image>
                <Text className={styles.downloadText}>
                  Download our free USACO Intro Package
                </Text>
              </Link>

              <Row className={styles.row} gutter={16}>
                {cardData.map((item) => {
                  return (
                    <Col
                      key={item.number}
                      xs={24}
                      sm={24}
                      md={12}
                      lg={6}
                      className={styles.col}
                    >
                      <ColorfulCard
                        border="bottom"
                        index={item.borderColorIndex}
                        className={styles.cardItem}
                        total={4}
                      >
                        <Card bodyStyle={{ padding: 40 }}>
                          <Space direction="vertical">
                            <Text
                              className={styles.title}
                              style={{ color: item.numberColor }}
                            >
                              {item.number}
                            </Text>
                            <Text className={styles.text}>{item.text}</Text>
                          </Space>
                        </Card>
                      </ColorfulCard>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default USACOMedal;
