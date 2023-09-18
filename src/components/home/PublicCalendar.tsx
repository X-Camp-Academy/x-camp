"use client";
import React, { useEffect, useState } from "react";
import { Space, Row, Col, Typography, Empty, Carousel } from "antd";
import type { Dayjs } from "dayjs";
import { useLang } from "@/hoc/with-intl/define";
import { formatTimezone, getTransResult } from "@/utils/public";
import { useMobile } from "@/utils";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import styles from "./PublicCalendar.module.scss";
import ActivityCalendar from "@/components/common/activity-calendar";
import useDayJs from "@/hooks/useDayJs";

const { Title, Paragraph, Text } = Typography;
interface IFilterDataEvent {
  titleZh?: string;
  titleEn?: string;
  descriptionZh?: string;
  descriptionEn?: string;
  start?: string;
  end?: string;
  timeZone?: number;
  startDateTime?: string;
  endDateTime?: string;
}

const pageSize = 999;

const PublicCalendar: React.FC = () => {
  const { format: t, lang } = useLang();
  const { getMonth, getDate, getWeekDay, formatHourMinute, formatYMDTime, formatDate, dayjs } = useDayJs(lang);
  const isMobile = useMobile();

  const [selectDate, setSelectDate] = useState<string>(dayjs().toString());
  const [filterDateEventList, setFilterDateEventList] = useState<
    IFilterDataEvent[]
  >([]);

  const [eventDate, setEventDate] = useState<
    {
      startDateTime?: string;
      endDateTime?: string;
    }[]
  >([]);
  const [current, setCurrent] = useState<number>(1);

  const { data: newEventData, run } = useGetNewEvent({
    current,
    pageSize,
    pageName: ['/home/']
  });

  const judgeDate = (selectDate: Dayjs, startDateTime: string, endDateTime: string) => {
    if (endDateTime === '') {
      return dayjs(selectDate).isSame(dayjs(startDateTime), "days");
    }
    return dayjs(selectDate).isBetween(dayjs(startDateTime), dayjs(endDateTime), "days", "[]");
  };

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

  /**
   * 获取轮播图中课程格式化后的时间
   * 不跨天显示HH：mm,反之显示 年月日+HH：mm
   * @param item
   */
  const getCourseDateStr = (item: any): string => {
    const isSame = dayjs(item?.attributes?.startDateTime).isSame(dayjs(item?.attributes?.endDateTime), "day");
    const sameStr = formatHourMinute(item?.attributes?.startDateTime || "") + '-' + formatHourMinute(item?.attributes?.endDateTime || "");
    const diffStr = formatYMDTime(item?.attributes?.startDateTime || "") + (item?.attributes?.endDateTime ? ' - ' + formatYMDTime(item?.attributes?.endDateTime) : '');
    return `${isSame?  sameStr: diffStr} ${formatTimezone(item?.attributes?.startDateTime).timezone}`;
  };

  /**
   * 获取日历选中之后出现的课程格式化后的时间
   * 当活动跨天显示完整的年月日时间，否则仅显示时间
   * @param item
   */
  const getCourseDateStrInCalendar = (item: {
    startDateTime?: string;
    endDateTime?: string;
  }): string => {
    const isSame = dayjs(item?.startDateTime).isSame(dayjs(item?.endDateTime), "day");
    const sameStr = `${formatHourMinute(item?.startDateTime)} - ${formatHourMinute(item?.endDateTime)} `;
    const diffStr =  `${formatYMDTime(item?.startDateTime)} ${item?.endDateTime ? `- ${formatYMDTime(item?.endDateTime)}` : ''}`;
    return `${isSame ? sameStr :diffStr} ${formatTimezone(item?.startDateTime).timezone}`;
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

  useEffect(() => {
    if (selectDate) {
      filterSameDateEvent(selectDate);
    }
  }, [selectDate]);

  return (
    <div className={styles.publicCalendarContainer}>
      <div className={`${styles.publicCalendar} container`}>
        <Title className={styles.title}>
          X-Camp {t("Public")} <span>{t("Calendar")}</span>
        </Title>
        <div style={{ display: "flex", justifyContent: 'center', width: '100%' }}>
          <Text className={styles.titleBg} />
        </div>
        <Row>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Carousel
              dots={false}
              infinite
              slidesToShow={4}
              slidesToScroll={1}
              vertical
              verticalSwiping
              autoplay
              autoplaySpeed={2000}
            >
              {newEventData?.data?.map((item) => {
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
                          {getDate(item?.attributes?.startDateTime)}
                        </Text>
                        <Text className={styles.weekMonth}>
                          {getMonth(item?.attributes?.startDateTime)?.slice(0, 3)}
                        </Text>
                      </Space>
                      <Space
                        direction="vertical"
                        className={styles.contentRight}
                      >
                        <Title
                          ellipsis={{
                            rows: 1, 
                            tooltip: getTransResult(
                              lang,
                              item.attributes.titleZh,
                              item.attributes.titleEn
                            )
                          }}
                          className={styles.titleParagraph}
                        >
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
                        <Text
                          className={styles.date}
                          ellipsis={{
                            tooltip: getCourseDateStr(item)
                          }}
                        >
                          {getCourseDateStr(item)}
                        </Text>
                      </Space>
                    </Space>
                  </div>
                );
              })}
            </Carousel>
          </Col>

          <Col xs={24} sm={24} md={24} lg={{ span: 10, offset: 2 }}>
            <Space size={30} direction="vertical" className={styles.rightSpace}>
              <ActivityCalendar
                eventDate={eventDate}
                headerClassName={styles.calenderHeader}
                onSelectDate={(date) => {
                  setSelectDate(date.toString());
                }}
              />
              <Space direction="vertical" className={styles.calendarSpace}>
                <Space className={styles.spaceDate}>
                  <Text className={styles.text}>
                    {selectDate && formatDate(selectDate)}
                  </Text>
                  <div className={styles.line} />
                </Space>
                <div style={{ height: 250, overflow: "scroll" }}>
                  {!!filterDateEventList.length ? (
                    filterDateEventList.map((item, index) => {
                      if (item?.startDateTime)
                        return (
                          <Space
                            key={index}
                            direction="vertical"
                            className={styles.calendarItem}
                          >
                            <Text className={styles.itemDate}>
                              {getCourseDateStrInCalendar(item)}
                            </Text>
                            <Paragraph className={styles.itemParagraph}>
                              {`${getTransResult(lang,item.titleZh,item.titleEn)} - ${getTransResult(lang,item.descriptionZh,item.descriptionEn)}`}
                            </Paragraph>
                            <div className={styles.itemLine} />
                          </Space>
                        );
                    })) :
                    <div style={{ padding: "25px 0", }}>
                      <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={t("NoEventToday")}
                      />
                    </div>
                  }
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
