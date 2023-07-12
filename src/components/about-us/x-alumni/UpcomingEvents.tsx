"use client";
import React, { useState } from "react";
import { Space, Row, Col, Card, Image, Button, Typography } from "antd";
import styles from "./UpcomingEvents.module.scss";
import ColorfulCard from "@/components/common/colorful-card";
import {
  HistoryOutlined,
  LaptopOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";
import { NewEventCategory } from "@/apis/strapi-client/define";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import { getTransResult } from "@/utils/public";
import dayjs from "dayjs";

const { Title, Paragraph, Text } = Typography;

const UpcomingEvents: React.FC = () => {
  const pageSize = 25;
  const { lang } = useLang();
  const [current, setCurrent] = useState<number>(1);
  const [tag, setTag] = useState<NewEventCategory>(NewEventCategory.Event);

  const monthNameEn = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formatDate = (dateString: string, lang: string) => {
    const weekdaysZh = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const weekdaysEn = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let formatString = "";
    let formattedDate = "";
    const dayInfo = dayjs(dateString);
    if (lang === "zh") {
      formatString = "YYYY年MM月DD日";
      formattedDate =
        dayInfo.format(formatString) + " " + weekdaysZh[dayInfo.day()];
    } else if (lang === "en") {
      formatString = "DD, YYYY";
      formattedDate =
        weekdaysEn[dayInfo.day()] +
        ", " +
        monthNameEn[dayInfo.month()] +
        " " +
        dayInfo.format(formatString);
    }

    return formattedDate;
  };

  const { data: newEventData } = useGetNewEvent({
    tag,
    current,
    pageSize,
  });

  const upComingEvent = newEventData?.data.filter((item, index) => {
    return (
      item?.attributes?.datetime &&
      new Date(item?.attributes?.datetime).getTime() - new Date().getTime() > 0
    );
  });

  return (
    <div className={styles.upcomingEventsContainer}>
      <div className="container">
        <Space className={styles.topSpace}>
          <Space direction="vertical">
            <Title className={styles.title}>Upcoming Events</Title>
            <Paragraph className={styles.paragraph}>
              Peek at some alumni events happening just around the corner.
            </Paragraph>
          </Space>
          <button className={styles.button}>
            View More Events <RightOutlined />
          </button>
        </Space>

        <Row gutter={32} className={styles.row}>
          {upComingEvent?.slice(0, 3).map((item, index) => {
            if (
              item?.attributes?.datetime &&
              item?.attributes.start &&
              item?.attributes.end
            )
              return (
                <Col key={index} xs={24} sm={24} md={8}>
                  <ColorfulCard border="bottom" index={index}>
                    <Card>
                      <Space direction="vertical">
                        <Text className={styles.cardMonth}>
                          {lang === "en"
                            ? monthNameEn[
                                dayjs(item.attributes?.datetime).month()
                              ]
                            : dayjs(item.attributes?.datetime).month() +
                              1 +
                              "月"}
                        </Text>
                        <Text className={styles.cardDay}>
                          {dayjs(item.attributes?.datetime).date()}
                        </Text>
                        <Paragraph
                          ellipsis={{ rows: 2 }}
                          className={styles.cardParagraph}
                        >
                          {getTransResult(
                            lang,
                            item?.attributes?.titleZh,
                            item?.attributes?.titleEn
                          )}
                        </Paragraph>
                        <Space direction="vertical">
                          <Text className={styles.cardText}>
                            <HistoryOutlined className={styles.cardIcon} />
                            {`
                            ${formatDate(item?.attributes?.datetime, lang)} | 
                            ${item?.attributes?.start.substring(0, 5)} ${
                              Number(item?.attributes?.start.substring(0, 2)) <
                              12
                                ? "AM"
                                : "PM"
                            } - 
                            ${item?.attributes?.end.substring(0, 5)} ${
                              Number(item?.attributes?.end.substring(0, 2)) < 12
                                ? "AM"
                                : "PM"
                            } 
                            UTC ${
                              item.attributes.timeZone > 0
                                ? "+" + item.attributes.timeZone
                                : item.attributes.timeZone
                            }
                            `}
                          </Text>
                          <Text className={styles.cardText}>
                            <LaptopOutlined className={styles.cardIcon} />
                            {!item.attributes.geographicallyAddress &&
                            item.attributes.link &&
                            item.attributes.onlinePlatform ? (
                              <a
                                href={item.attributes.link}
                                style={{ color: "#666666" }}
                              >
                                {item.attributes.onlinePlatform}
                              </a>
                            ) : (
                              item.attributes.geographicallyAddress
                            )}
                          </Text>
                          <Text className={styles.cardText}>
                            <UserOutlined className={styles.cardIcon} />
                            {`Organizer | ${item?.attributes?.organizer} `}
                          </Text>
                        </Space>
                      </Space>
                    </Card>
                  </ColorfulCard>
                </Col>
              );
          })}
        </Row>
        <Row gutter={32} className={styles.row}>
          {upComingEvent?.slice(3, 6).map((item, index) => {
            if (
              item?.attributes?.datetime &&
              item?.attributes.start &&
              item?.attributes.end
            )
              return (
                <Col key={index} xs={24} sm={24} md={8}>
                  <ColorfulCard border="bottom" index={index}>
                    <Card>
                      <Space direction="vertical">
                        <Text className={styles.cardMonth}>
                          {lang === "en"
                            ? monthNameEn[
                                dayjs(item.attributes?.datetime).month()
                              ]
                            : dayjs(item.attributes?.datetime).month() +
                              1 +
                              "月"}
                        </Text>
                        <Text className={styles.cardDay}>
                          {dayjs(item.attributes?.datetime).date()}
                        </Text>
                        <Paragraph className={styles.cardParagraph}>
                          {getTransResult(
                            lang,
                            item?.attributes?.titleZh,
                            item?.attributes?.titleEn
                          )}
                        </Paragraph>
                        <Space direction="vertical">
                          <Text className={styles.cardText}>
                            <HistoryOutlined className={styles.cardIcon} />
                            {`
                            ${formatDate(item?.attributes?.datetime, lang)} | 
                            ${item?.attributes?.start.substring(0, 5)} ${
                              Number(item?.attributes?.start.substring(0, 2)) <
                              12
                                ? "AM"
                                : "PM"
                            } - 
                            ${item?.attributes?.end.substring(0, 5)} ${
                              Number(item?.attributes?.end.substring(0, 2)) < 12
                                ? "AM"
                                : "PM"
                            } 
                            UTC ${
                              item.attributes.timeZone > 0
                                ? "+" + item.attributes.timeZone
                                : item.attributes.timeZone
                            }
                            `}
                          </Text>
                          <Text className={styles.cardText}>
                            <LaptopOutlined className={styles.cardIcon} />
                            {!item.attributes.geographicallyAddress &&
                            item.attributes.link &&
                            item.attributes.onlinePlatform ? (
                              <a
                                href={item.attributes.link}
                                style={{ color: "#666666" }}
                              >
                                {item.attributes.onlinePlatform}
                              </a>
                            ) : (
                              item.attributes.geographicallyAddress
                            )}
                          </Text>
                          <Text className={styles.cardText}>
                            <UserOutlined className={styles.cardIcon} />
                            {`Organizer | ${item?.attributes?.organizer} `}
                          </Text>
                        </Space>
                      </Space>
                    </Card>
                  </ColorfulCard>
                </Col>
              );
          })}
        </Row>
      </div>
    </div>
  );
};

export default UpcomingEvents;
