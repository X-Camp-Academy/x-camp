"use client";
import React, { useEffect, useState } from "react";
import { Space, Row, Col, Typography, Calendar, Badge, Empty, Carousel, Image } from "antd";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { useLang } from "@/hoc/with-intl/define";
import { formatTimezone, getTransResult } from "@/utils/public";
import { useMobile } from "@/utils";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import styles from "./PublicCalendar.module.scss";

const { Title, Paragraph, Text } = Typography;

const PublicCalendar: React.FC = () => {
  const { format: t, lang } = useLang();
  const isMobile = useMobile();

  //引入dayjs插件
  dayjs.extend(isBetween);

  const [selectDate, setSelectDate] = useState<string>(dayjs().toString());
  const [filterDateEventList, setFilterDateEventList] = useState<
    {
      titleZh?: string;
      titleEn?: string;
      descriptionZh?: string;
      descriptionEn?: string;
      start?: string;
      end?: string;
      timeZone?: number;

      startDateTime?: string;
      endDateTime?: string;
    }[]
  >([]);

  const [eventDate, setEventDate] = useState<
    {
      startDateTime?: string;
      endDateTime?: string;
    }[]
  >([]);

  const weekdaysEn = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  const weekdaysZh = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

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

  const monthNameAbbrEn = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const pageSize = 999;
  const [current, setCurrent] = useState<number>(1);

  const { data: newEventData, run } = useGetNewEvent({
    current,
    pageSize,
  });

  const judgeDate = (selectDate: Dayjs, startDateTime: string, endDateTime: string) => {
    if (endDateTime === '') {
      return dayjs(selectDate).isSame(dayjs(startDateTime), "days");
    }
    return dayjs(selectDate).isBetween(dayjs(startDateTime), dayjs(endDateTime), "days", "[]");
  }


  const filterSameDateEvent = (selectDate: string) => {
    if (newEventData) {
      const updatedEventDate = newEventData.data
        ?.filter((item) => judgeDate(dayjs(selectDate), item?.attributes?.startDateTime || '', item?.attributes?.endDateTime || ''))
        .map((filteredItem) => ({
          ...filteredItem?.attributes,
        }));
      setFilterDateEventList(updatedEventDate);
    }
  };

  useEffect(() => {
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
      const updatedEventDate = newEventData.data?.map((item) => ({
        startDateTime: item.attributes?.startDateTime,
        endDateTime: item.attributes?.endDateTime,
      }));
      setEventDate(updatedEventDate);
      filterSameDateEvent(selectDate);
    }
  }, [newEventData]);

  //

  useEffect(() => {
    if (selectDate) {
      filterSameDateEvent(selectDate);
    }

  }, [selectDate]);

  const formatDate = (date: string) => {
    const dateInfo = dayjs(date);
    const month = dateInfo.month();
    if (lang === "en") {
      return monthNameEn[month] + " " + dateInfo.date();
    } else {
      return dateInfo.format("MM月DD日");
    }
  };

  const cellRender = (value: Dayjs) => {
    const eventDataForDate = eventDate.find((event) => {
      return judgeDate(value, event?.startDateTime || '', event?.endDateTime || '');
    });
    if (eventDataForDate) {
      return (
        <Badge dot>
          <div />
        </Badge>
      );
    } else {
      return (
        <>
          <Badge dot color="white">
            <div />
          </Badge>
        </>
      );
    }
  };

  const getMonth = (date: string) => {
    return dayjs(date).month();
  };

  const getDate = (date: string) => {
    return dayjs(date).date();
  };

  const getWeekDay = (date: string) => {
    return getTransResult(
      lang,
      weekdaysZh[dayjs(date).day()],
      weekdaysEn[dayjs(date).day()]
    );
  };

  const formatHourMinute = (time: string) => {
    const timeInfo = dayjs(time);
    const formatString = "HH:mm";
    return timeInfo.format(formatString);
  };

  const formatYMDTime = (date: string) => {
    const formatStringZh = "YYYY年MM月DD日 HH:mm";
    const formatStringEn = " DD, YYYY HH:mm";
    return getTransResult(
      lang,
      dayjs(date).format(formatStringZh),
      `${monthNameEn[dayjs(date).month()]}` + dayjs(date).format(formatStringEn)
    );
  };

  return (
    <div className={styles.publicCalendarContainer}>
      <div className={`${styles.publicCalendar} container`}>
        <Title className={styles.title}>
          X-Camp {t("Public")} {t("Calendar")}
          <Image alt="" className={styles.titleImage} preview={false} src="/image/home/home-title-bg-1.png" />
        </Title>

        <Row>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Carousel
              dots={false}
              infinite={true}
              slidesToShow={4}
              slidesToScroll={1}
              vertical={true}
              verticalSwiping={true}
              autoplay={true}
              autoplaySpeed={2000}
            >
              {newEventData?.data?.map((item, index) => {
                return (
                  <div key={item?.id} className={styles.eventCard} >
                    <Space
                      size={isMobile ? 8 : 60}
                      align="center"
                      className={styles.eventContent}

                    >
                      <Space
                        direction="vertical"
                        className={styles.contentLeft}
                      >
                        <Text className={styles.weekMonth}>
                          {getWeekDay(item?.attributes?.startDateTime || "")}
                        </Text>
                        <Text className={styles.day}>
                          {getDate(item?.attributes?.startDateTime || "")}
                        </Text>
                        <Text className={styles.weekMonth}>
                          {getTransResult(
                            lang,
                            `${getMonth(item?.attributes?.startDateTime || "") + 1
                            }月`,
                            monthNameAbbrEn[
                            getMonth(item?.attributes?.startDateTime || "")
                            ]
                          )}
                        </Text>
                      </Space>

                      <Space
                        direction="vertical"
                        className={styles.contentRight}
                      >
                        <Title ellipsis={{
                          rows: 1, tooltip: getTransResult(
                            lang,
                            item.attributes.titleZh,
                            item.attributes.titleEn
                          )
                        }} className={styles.titleParagraph}>
                          {getTransResult(
                            lang,
                            item.attributes.titleZh,
                            item.attributes.titleEn
                          )}
                        </Title>
                        {!isMobile && (
                          <Paragraph
                            className={styles.titleParagraph}
                            ellipsis={{
                              rows: 1,
                              tooltip: getTransResult(
                                lang,
                                item?.attributes?.descriptionZh,
                                item?.attributes?.descriptionEn
                              ),
                            }}
                          >
                            {`- ${getTransResult(
                              lang,
                              item.attributes.descriptionZh,
                              item.attributes.descriptionEn
                            )}`}
                          </Paragraph>
                        )}
                        {/* 不跨天显示HH：mm,反之显示 年月日+HH：mm */}
                        <Text
                          className={styles.date}
                          ellipsis={{
                            tooltip:
                              (dayjs(item?.attributes?.startDateTime)
                                .isSame(dayjs(item?.attributes?.endDateTime), "day") ?
                                formatHourMinute(item?.attributes?.startDateTime || "") + '-' + formatHourMinute(item?.attributes?.endDateTime || "") :
                                formatYMDTime(item?.attributes?.startDateTime || "") + (item?.attributes?.endDateTime ? ' - ' + formatYMDTime(item?.attributes?.endDateTime) : '')) + ' ' +
                              formatTimezone(item?.attributes?.startDateTime).timezone
                          }}
                        >
                          {`${dayjs(item?.attributes?.startDateTime)
                            .isSame(
                              dayjs(item?.attributes?.endDateTime),
                              "day"
                            )
                            ?
                            `${formatHourMinute(item?.attributes?.startDateTime || "")} - 
                            ${formatHourMinute(item?.attributes?.endDateTime || "")} `
                            :
                            `${formatYMDTime(item?.attributes?.startDateTime || "")} 
                             ${item?.attributes?.endDateTime ? '-' + formatYMDTime(item?.attributes?.endDateTime) : ''}`
                            } 
                            ${formatTimezone(item?.attributes?.startDateTime).timezone} 
                            `}
                        </Text>
                      </Space>
                    </Space>
                  </div>
                );
              })}
            </Carousel>
          </Col>

          <Col xs={24} sm={24} md={24} lg={{ span: 10, offset: 2 }}>
            <Space size={48} direction="vertical" className={styles.rightSpace}>
              <Calendar
                fullscreen={false}
                cellRender={cellRender}
                onSelect={(date) => {
                  setSelectDate(date.toString());
                }}
              />
              <Space direction="vertical" className={styles.calendarSpace}>
                <Space className={styles.spaceDate}>
                  <Text className={styles.text}>
                    {selectDate && formatDate(selectDate)}
                  </Text>
                  <div className={styles.line}></div>
                </Space>
                <div style={{ height: 400, overflow: "scroll" }}>
                  {filterDateEventList.length != 0 ? (
                    filterDateEventList.map((item, index) => {
                      if (item?.startDateTime)
                        return (
                          <Space
                            key={index}
                            direction="vertical"
                            className={styles.calendarItem}
                          >
                            <Text className={styles.itemDate}>
                              {/* 当活动跨天显示完整的年月日时间，否则仅显示时间 */}
                              {`${dayjs(item?.startDateTime).isSame(dayjs(item?.endDateTime), "day")
                                ?
                                `${formatHourMinute(item?.startDateTime || "")} - ${formatHourMinute(item?.endDateTime || "")} `
                                :
                                `${formatYMDTime(item?.startDateTime || "")} ${item?.endDateTime ? '-' + formatYMDTime(item?.endDateTime) : ''}`
                                } 
                                ${formatTimezone(item?.startDateTime).timezone} 
                            `}
                            </Text>
                            <Paragraph className={styles.itemParagraph}>
                              {`
                              ${getTransResult(
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
                    })) : (
                    <div
                      style={{
                        padding: "50px 0",
                      }}
                    >
                      <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={t("NoEventToday")}
                      />
                    </div>
                  )}

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
