"use client";
import React, { useState } from "react";
import {
  Space,
  Row,
  Col,
  Card,
  Image,
  Typography,
  Button,
  Calendar,
} from "antd";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import type { Dayjs } from "dayjs";
import styles from "./PublicCalendar.module.scss";
import dayjs from "dayjs";
import { useMobile } from "@/utils";
import { NewEventCategory } from "@/apis/strapi-client/define";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
const { Title, Paragraph, Text } = Typography;

const PublicCalendar: React.FC = () => {
  const { lang } = useLang();
  const isMobile = useMobile();

  const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  const onPanelChange = (value: any, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const pageSize = 4;
  const [current, setCurrent] = useState<number>(1);
  const [tag, setTag] = useState<NewEventCategory>(NewEventCategory.Event);

  const { data: newEventData } = useGetNewEvent({
    tag,
    current,
    pageSize
  });

  const getMonth = (date: string) => {
    return new Date(date).getMonth() + 1;
  }

  const getDate = (date: string) => {
    return new Date(date).getDate();
  }

  const getWeekDay = (date: string) => {
    return weekdays[new Date(date).getDay()];
  }




  return (
    <div className={styles.publicCalendarContainer}>
      <div className={`${styles.publicCalendar} container`}>
        <Title className={styles.title}>
          X-Camp Public <Text className={styles.titleText}>Calendar</Text>
        </Title>

        <Row>
          <Col xs={24} sm={24} md={24} lg={14}>
            <Space direction="vertical" className={styles.colSpace}>
              {newEventData?.data.map((item, index) => {
                if(item.attributes?.datetime)
                return (
                  <div className={styles.activeCard} key={item.id}>
                    <Space size={72} align="center" className={styles.cardContent}>
                      <Space direction="vertical" className={styles.contentLeft}>
                        <Text className={styles.text}>{getWeekDay(item.attributes?.datetime)}</Text>
                        <Text className={styles.text}>{getDate(item.attributes?.datetime)}</Text>
                        <Text className={styles.text}>{getMonth(item.attributes?.datetime)}</Text>
                      </Space>
                      <Space direction="vertical" className={styles.contentRight}>
                        <Text className={styles.paragraph}>
                          {getTransResult(lang, item.attributes.titleZh, item.attributes.titleEn)}
                        </Text>
                        {!isMobile && (
                          <Text className={styles.paragraph}>
                            {`- ${getTransResult(lang, item.attributes.descriptionZh, item.attributes.descriptionEn)}`}
                          </Text>
                        )}
                        <Text className={styles.date}>4:00PM - 8:00PM PST</Text>
                      </Space>
                    </Space>
                  </div>
                )
              })}
              {/*               <div className={styles.activeCard}>
                <Space size={72} align="center" className={styles.cardContent}>
                  <Space direction="vertical" className={styles.contentLeft}>
                    <Text className={styles.text}>FRI</Text>
                    <Text className={styles.text}>10</Text>
                    <Text className={styles.text}>Jun</Text>
                  </Space>
                  <Space direction="vertical" className={styles.contentRight}>
                    <Text className={styles.paragraph}>
                      {"USACO Director Brian Dean's Q&A Session"}
                    </Text>
                    {!isMobile && (
                      <Text className={styles.paragraph}>
                        {"- Webinar Recording"}
                      </Text>
                    )}
                    <Text className={styles.date}>4:00PM - 8:00PM PST</Text>
                  </Space>
                </Space>
              </div>

              <div className={styles.normalCard}>
                <Space size={72} align="center" className={styles.cardContent}>
                  <Space direction="vertical" className={styles.contentLeft}>
                    <Text className={styles.text}>FRI</Text>
                    <Text className={styles.text}>10</Text>
                    <Text className={styles.text}>Jun</Text>
                  </Space>
                  <Space direction="vertical" className={styles.contentRight}>
                    <Text className={styles.paragraph}>
                      {"USACO Director Brian Dean's Q&A Session"}
                    </Text>
                    {!isMobile && (
                      <Text className={styles.paragraph}>
                        {"- Webinar Recording"}
                      </Text>
                    )}
                    <Text className={styles.date}>4:00PM - 8:00PM PST</Text>
                  </Space>
                </Space>
              </div>
              <div className={styles.normalCard}>
                <Space size={72} align="center" className={styles.cardContent}>
                  <Space direction="vertical" className={styles.contentLeft}>
                    <Text className={styles.text}>FRI</Text>
                    <Text className={styles.text}>10</Text>
                    <Text className={styles.text}>Jun</Text>
                  </Space>
                  <Space direction="vertical" className={styles.contentRight}>
                    <Text className={styles.paragraph}>
                      {"USACO Director Brian Dean's Q&A Session"}
                    </Text>
                    {!isMobile && (
                      <Text className={styles.paragraph}>
                        {"- Webinar Recording"}
                      </Text>
                    )}
                    <Text className={styles.date}>4:00PM - 8:00PM PST</Text>
                  </Space>
                </Space>
              </div>
              <div className={styles.normalCard}>
                <Space size={72} align="center" className={styles.cardContent}>
                  <Space direction="vertical" className={styles.contentLeft}>
                    <Text className={styles.text}>FRI</Text>
                    <Text className={styles.text}>10</Text>
                    <Text className={styles.text}>Jun</Text>
                  </Space>
                  <Space direction="vertical" className={styles.contentRight}>
                    <Text className={styles.paragraph}>
                      {"USACO Director Brian Dean's Q&A Session"}
                    </Text>
                    {!isMobile && (
                      <Text className={styles.paragraph}>
                        {"- Webinar Recording"}
                      </Text>
                    )}
                    <Text className={styles.date}>4:00PM - 8:00PM PST</Text>
                  </Space>
                </Space>
              </div> */}
              <Button className={styles.button}>Subscribe to Calendar</Button>
            </Space>
          </Col>

          <Col xs={24} sm={24} md={24} lg={10}>
            <Space size={48} direction="vertical" className={styles.colSpace}>
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
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
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
  };

  export default PublicCalendar;
