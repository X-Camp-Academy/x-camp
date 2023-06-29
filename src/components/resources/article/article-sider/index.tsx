import React from "react";
import styles from "./index.module.scss";
import { Button, Card, Row, Space, Typography, Image } from "antd";
const { Text, Paragraph, Title } = Typography;
import ActivityCalendar from "@/components/common/activity-calendar";
import ColorfulCard from "@/components/common/colorful-card";
import { RightCircleOutlined, AlignRightOutlined } from "@ant-design/icons";

const ArticleSider = () => {

  const activityData = [
    {
      img: "/image/about-us/introduction/top-banner.png",
      title: "2023 Spring APCS Class series are now",

    },
    {
      img: "/image/about-us/introduction/top-banner.png",
      title: "2023 Spring APCS Class series are now",

    },
    {
      img: "/image/about-us/introduction/top-banner.png",
      title: "2023 Spring APCS Class series are now",

    },
  ]
  return (
    <div className={styles.content}>
      <div className={styles.calendarContainer}>
        <ActivityCalendar className={styles.activityCalendar} />
      </div>


      <div className={styles.inDayAcyvityContainer}>
        <Space direction="vertical" className={styles.calendarSpace}>
          <Space className={styles.spaceDate}>
            <Text className={styles.text}>May 29</Text>
            <div className={styles.line}></div>
          </Space>
          {[1, 2, 3].map((item) => {
            return (
              <Space
                key={item}
                direction="vertical"
                className={styles.calendarItem}
              >
                <Text className={styles.itemDate}>
                  4:00PM - 8:00PM PST
                </Text>
                <Paragraph className={styles.itemParagraph}>
                  {
                    "USACO Director Brian Dean's Q&A Session - Webinar Recording"
                  }
                </Paragraph>
                <div className={styles.itemLine}></div>
              </Space>
            );
          })}
        </Space>
      </div>

      <div className={styles.activityCardContainer}>
        {activityData?.map((v, index) => {
          return (
            <ColorfulCard border={"bottom"} animate={false} index={index} className={styles.card} key={index}>
              <Card >
                <Space direction="vertical" style={{ width: '100%' }}>

                  <Image
                    src={v.img}
                    alt="image"
                    preview={false}
                  />

                  <Row>
                    <Title className={styles.title}>{v.title}</Title>
                  </Row>
                  <Row style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'

                  }}>
                    <div >
                      <AlignRightOutlined style={{ fontSize: 16 }} />
                      <Text className={styles.description}>Coding Education</Text>
                    </div>
                    <Button
                      type="link"
                      className={styles.btn}
                      icon={<RightCircleOutlined />}
                      style={{ color: '#FFAD11', fontSize: 24 }}
                    />
                  </Row>

                </Space>

              </Card>
            </ColorfulCard>
          )
        })}
      </div>

    </div>
  )

};

export default ArticleSider;
