import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import {
  Button,
  Card,
  Row,
  Space,
  Typography,
  Image,
} from "antd";
const { Text, Paragraph, Title } = Typography;
import ActivityCalendar from "@/components/common/activity-calendar";
import ColorfulCard from "@/components/common/colorful-card";
import { RightCircleOutlined, AlignRightOutlined } from "@ant-design/icons";
import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import { useLang } from "@/hoc/with-intl/define";
import { formatTimezone, getTransResult } from "@/utils/public";
import { StrapiMedia, StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { EventCategory, GetNewEvent } from "@/apis/strapi-client/define";
import Link from "next/link";

const ArticleSider: React.FC<{
  eventCategory: EventCategory | undefined,
  articleId: number
}> = ({ eventCategory: EventCategory, articleId }) => {
  const { format: t, lang } = useLang();

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

  //引入dayjs插件
  dayjs.extend(isBetween);
  const [selectedDate, setSelectedDate] = useState<string>(dayjs().toString());
  const [eventThreeCard, setEventThreeCard] = useState<StrapiResponseDataItem<GetNewEvent>[]>([]); //日历下面三张卡片
  const [filterDateEventList, setFilterDateEventList] = useState<
    {
      titleZh?: string;
      titleEn?: string;
      descriptionZh?: string;
      descriptionEn?: string;
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

  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
  };

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

  const filterSameEventCategory = (eventCategory: EventCategory | undefined) => {
    if (newEventData) {
      const filteredData = newEventData?.data?.filter(item => item.attributes.eventCategory === eventCategory && item.id != articleId).slice(0, 3);
      setEventThreeCard(filteredData);
    }
  }

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
      filterSameDateEvent(selectedDate);
      filterSameEventCategory(EventCategory);

    }
  }, [newEventData]);


  useEffect(() => {
    if (selectedDate) {
      filterSameDateEvent(selectedDate);
    }
  }, [selectedDate]);

  const formatDate = (date: string) => {
    const dateInfo = dayjs(date);
    const month = dateInfo.month();
    if (lang === "en") {
      return monthNameEn[month] + " " + dateInfo.date();
    } else {
      return dateInfo.format("MM月DD日");
    }
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

  const getTranslateImg = (imgZh: StrapiMedia, imgEn: StrapiMedia) => {
    return getTransResult(
      lang,
      imgZh.data?.attributes.url,
      imgEn.data?.attributes.url,
    )
  }


  return (
    <div className={styles.content}>
      <div className={styles.calendarContainer}>
        <ActivityCalendar
          className={styles.activityCalendar}
          onSelectDate={handleSelectDate}
          eventDate={eventDate}
        />
      </div>

      <div className={styles.inDayAcyvityContainer}>
        <Space direction="vertical" className={styles.calendarSpace}>
          <Space className={styles.spaceDate}>
            <Text className={styles.text}>
              {selectedDate && formatDate(selectedDate)}
            </Text>
            <div className={styles.line}></div>
          </Space>
          <div style={{ height: 400, overflow: "scroll" }}>
            {filterDateEventList.length != 0 &&
              filterDateEventList.map((item, index) => {
                if (item?.startDateTime)
                  return (
                    <Space direction="vertical" className={styles.calendarItem}>
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
                      <Paragraph
                        className={styles.itemParagraph}
                        ellipsis={{
                          rows: 2,
                          tooltip: `${getTransResult(
                            lang,
                            item.titleZh,
                            item.titleEn
                          )} -  ${getTransResult(
                            lang,
                            item.descriptionZh,
                            item.descriptionEn
                          )}`,
                        }}
                      >
                        {getTransResult(lang, item.titleZh, item.titleEn)}
                        <br /> -
                        {getTransResult(
                          lang,
                          item.descriptionZh,
                          item.descriptionEn
                        )}
                      </Paragraph>
                      <div className={styles.itemLine}></div>
                    </Space>
                  );
              })}
          </div>
        </Space>
      </div>

      <div className={styles.activityCardContainer}>
        {eventThreeCard?.map((v, index) => {
          return (
            <ColorfulCard
              border={"bottom"}
              animate={false}
              index={index}
              className={styles.card}
              key={index}
            >
              <Card>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Image
                    src={getTranslateImg(v.attributes?.imgZh, v.attributes?.imgEn)}
                    alt="image"
                    preview={false}
                  />

                  <Row>
                    <Title className={styles.title}>
                      {v.attributes.titleZh}
                    </Title>
                  </Row>
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <AlignRightOutlined style={{ fontSize: 16 }} />
                      <Paragraph
                        className={styles.description}
                        ellipsis={{
                          rows: 1,
                          tooltip: getTransResult(
                            lang,
                            v.attributes.descriptionZh,
                            v.attributes.descriptionEn
                          ),
                        }}
                      >
                        {getTransResult(
                          lang,
                          v.attributes.descriptionZh,
                          v.attributes.descriptionEn
                        )}
                      </Paragraph>
                    </div>
                    <Link href={`/resources/${v.id}`}>
                      <Button
                        type="link"
                        className={styles.btn}
                        icon={<RightCircleOutlined />}
                        style={{ color: "#FFAD11", fontSize: 24 }}
                      />
                    </Link>

                  </Row>
                </Space>
              </Card>
            </ColorfulCard>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleSider;
