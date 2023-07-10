"use client";
import React, { use, useEffect, useState } from "react";
import {
  Space,
  Row,
  Col,
  Card,
  Image,
  Typography,
  Button,
  Calendar,
  Badge,
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
import { useAsyncEffect } from "ahooks";
import { it } from "node:test";
const { Title, Paragraph, Text } = Typography;

const PublicCalendar: React.FC = () => {
  const { lang } = useLang();
  const isMobile = useMobile();
  const [selectDate, setSelectDate] = useState<string>();
  /*   let filterSameDateEventList: any[] = []; */
  const [filterSameDateEventList, setFilterSameDateEventList] = useState<{
    titleZh?: string,
    titleEn?: string,
    descriptionZh?: string,
    descriptionEn?: string,
    start?: string,
    end?: string,
    timeZone?: number
  }[]>([]);

  const [eventDate, setEventDate] = useState<{
    dateTime: string
  }[]>([]);

  const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

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


  const pageSize = 999;
  const [current, setCurrent] = useState<number>(1);

  const { data: newEventData, run } = useGetNewEvent({
    current,
    pageSize,
  });


  useEffect(() => {
    setSelectDate(dayjs().toString());
    run({
      populate: "*",
      sort: ["order:desc"],
      pagination: {
        page: current,
        pageSize,
      },
    });
  }, []);

  useEffect(() => {
    if (newEventData) {
      const updatedEventDate = newEventData.data.map((item) => ({
        dateTime: item.attributes.datetime
      }));
      setEventDate(updatedEventDate);
    }
  }, [newEventData]);



  useEffect(() => {
    if (selectDate) {
      filterSameDateEvent(selectDate);
    }
  }, [selectDate])

  const formatDate = (date: string) => {
    const dateInfo = dayjs(date);
    const month = dateInfo.month();
    if (lang === "en") {
      return monthNameEn[month] + " " + dateInfo.date();
    }
    else {
      return dateInfo.format("MM月DD日");
    }
  }

  const filterSameDateEvent = (selectDate: string) => {
    if (newEventData?.data) {
      setFilterSameDateEventList(
        newEventData.data
          .filter((item) => dayjs(item?.attributes?.datetime).isSame(dayjs(selectDate), 'day'))
          .map((filteredItem) => ({
            titleZh: filteredItem?.attributes?.titleZh,
            titleEn: filteredItem?.attributes?.titleEn,
            descriptionZh: filteredItem?.attributes?.descriptionZh,
            descriptionEn: filteredItem?.attributes?.descriptionEn,
            start: filteredItem?.attributes?.start,
            end: filteredItem?.attributes?.end,
            timeZone: filteredItem?.attributes?.timeZone,
          }))
      );
    }
  }


  const dateCellRender = (value: Dayjs) => {
    const eventDataForDate = eventDate.find((event) => dayjs(event.dateTime).isSame(value, 'day'));
    if (eventDataForDate) {
      return (
        <Badge dot>
          <div />
        </Badge>
      )
    }
    else {
      return (
        <>
          <Badge dot color="white">
            <div />
          </Badge>
        </>
      )
    }
  }


  const getMonth = (date: string) => {
    return dayjs(date).month() + 1;
  };

  const getDate = (date: string) => {
    return dayjs(date).date();
  };

  const getWeekDay = (date: string) => {
    return weekdays[dayjs(date).day()];
  };

  return (
    <div className={styles.publicCalendarContainer}>
      <div className={`${styles.publicCalendar} container`}>
        <Title className={styles.title}>
          X-Camp Public <Text className={styles.titleText}>Calendar</Text>
        </Title>

        <Row>
          <Col xs={24} sm={24} md={24} lg={14}>
            <Space direction="vertical" className={styles.colSpace}>
              {newEventData?.data.slice(0, 4).map((item, index) => {
                if (
                  item?.attributes?.datetime &&
                  item?.attributes.start &&
                  item?.attributes.end
                )
                  return (
                    <div className={styles.activeCard} key={item.id}>
                      <Space
                        size={72}
                        align="center"
                        className={styles.cardContent}
                      >
                        <Space
                          direction="vertical"
                          className={styles.contentLeft}
                        >
                          <Text className={styles.text}>
                            {getWeekDay(item.attributes?.datetime)}
                          </Text>
                          <Text className={styles.text}>
                            {getDate(item.attributes?.datetime)}
                          </Text>
                          <Text className={styles.text}>
                            {getMonth(item.attributes?.datetime)}
                          </Text>
                        </Space>
                        <Space
                          direction="vertical"
                          className={styles.contentRight}
                        >
                          <Text className={styles.paragraph}>
                            {getTransResult(
                              lang,
                              item.attributes.titleZh,
                              item.attributes.titleEn
                            )}
                          </Text>
                          {!isMobile && (
                            <Text className={styles.paragraph}>
                              {`- ${getTransResult(
                                lang,
                                item.attributes.descriptionZh,
                                item.attributes.descriptionEn
                              )}`}
                            </Text>
                          )}
                          <Text className={styles.date}>
                            {`${item?.attributes?.start.substring(0, 5)} ${Number(item?.attributes?.start.substring(0, 2)) <
                              12
                              ? "AM"
                              : "PM"
                              } - 
                            ${item?.attributes?.end.substring(0, 5)} ${Number(item?.attributes?.end.substring(0, 2)) < 12
                                ? "AM"
                                : "PM"
                              } 
                            ${item.attributes.timeZone
                                ? `UTC ${item.attributes.timeZone > 0 ? "+" : ""
                                }${item.attributes.timeZone}`
                                : ""
                              }`}
                          </Text>
                        </Space>
                      </Space>
                    </div>
                  );
              })}
              <Button className={styles.button}>Subscribe to Calendar</Button>
            </Space>
          </Col>

          <Col xs={24} sm={24} md={24} lg={10}>
            <Space size={48} direction="vertical" className={styles.colSpace}>
              <Calendar
                fullscreen={false}
                dateCellRender={dateCellRender}
                onSelect={(date) => {
                  setSelectDate(date.toString())
                }}
              />
              <Space direction="vertical" className={styles.calendarSpace}>
                <Space className={styles.spaceDate}>
                  <Text className={styles.text}>{selectDate && formatDate(selectDate)}</Text>
                  <div className={styles.line}></div>
                </Space>
                <div style={{ height: 250, overflow: 'scroll' }}>
                  {selectDate && filterSameDateEventList.map((item, index) => {
                    if (item?.start && item?.end && item?.timeZone)
                      return (
                        <Space
                          key={index}
                          direction="vertical"
                          className={styles.calendarItem}
                        >
                          <Text className={styles.itemDate}>
                            {`${item?.start.substring(0, 5)} ${Number(item?.start.substring(0, 2)) <
                              12
                              ? "AM"
                              : "PM"
                              } - 
                            ${item?.end.substring(0, 5)} ${Number(item?.end.substring(0, 2)) < 12
                                ? "AM"
                                : "PM"
                              } 
                            UTC ${item?.timeZone > 0
                                ? "+" + item?.timeZone
                                : item?.timeZone
                              }`}
                          </Text>
                          <Paragraph className={styles.itemParagraph}>
                            {`${getTransResult(
                              lang,
                              item.titleZh,
                              item.titleEn
                            )} - 
                        ${getTransResult(
                              lang,
                              item.descriptionZh,
                              item.descriptionEn
                            )}`}
                          </Paragraph>
                          <div className={styles.itemLine}></div>
                        </Space>
                      );
                  })}
                </div>

              </Space>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PublicCalendar;
