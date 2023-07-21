import { Button, Typography } from "antd";

import React, { useEffect } from "react";

const { Title } = Typography;
import styles from "./CalendarContent.module.scss";
import { ScheduleOutlined } from "@ant-design/icons";
import TimelineComponent from "@/components/common/timeline";
import { useLang } from "@/hoc/with-intl/define";
import { GetNewEvent, NewEventCategory } from "@/apis/strapi-client/define";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import dayjs from "dayjs";
import { getTransResult } from "@/utils/public";

const CalendarContent = () => {
  const { lang, format: t } = useLang();
  const { data: schoolCalendar, runAsync: getSchoolCalendar } = useGetNewEvent({
    current: 1,
    pageSize: 9999,
    manual: true,
  });

  useEffect(() => {
    getSchoolCalendar({
      populate: "*",
      sort: ["startDateTime"],
      filters: {
        tags: {
          $eq: NewEventCategory.SchoolCalendar,
        },
      },
      pagination: {
        page: 1,
        pageSize: 9999,
      },
    });
  }, []);

  interface Item {
    label: string;
    children: Item[] | string;
  }

  /**
   *
   * @param data
   * @returns 格式化Calendar
   */
  /*const formatCalendar = (
    data: StrapiResponseDataItem<GetNewEvent>[] | undefined
  ): Item[] => {
    const currentMonth = dayjs().month();
    console.log("currentMonth", currentMonth); // 6


    const groupedData: {
      [month: string]: Item[];
    } = { // 对应1-12月
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      11: [],
    };

     data?.forEach((item) => {
      const month = dayjs(item?.attributes?.startDateTime).get("month");
      if (!groupedData[month] ) {
        groupedData[month] = [];
      }
      groupedData[month].push({
        label: getTransResult(
          lang,
          item?.attributes?.titleZh,
          item?.attributes?.titleEn
        )!,
        children: getTransResult(
          lang,
          item?.attributes?.descriptionZh,
          item?.attributes?.descriptionEn
        )!,
      });
    }); 



    const res = Object.entries(groupedData).map(([label, children]) => ({
      label: dayjs().month(+label).format("MMM"),
      children,
    }));

    return [...res, { label: t("NEW_YEAR"), children: [] }];

  };*/

  const formatCalendar = (
    data: StrapiResponseDataItem<GetNewEvent>[] | undefined
  ): Item[] => {
    const currentMonth = dayjs().month();
    console.log("currentMonth", currentMonth); // 6
  
    const groupedData: {
      [month: string]: Item[];
    } = {};
  
    // 从当前月份开始的12个月
    for (let i = 0; i < 12; i++) {
      const month = (currentMonth + i) % 12;
      groupedData[month] = [];
    }

    console.log("@@",groupedData);
    
  
    data?.forEach((item) => {
      const month = dayjs(item?.attributes?.startDateTime).month();
      if (!groupedData[month]) {
        groupedData[month] = [];
      }
      groupedData[month].push({
        label: getTransResult(
          lang,
          item?.attributes?.titleZh,
          item?.attributes?.titleEn
        )!,
        children: getTransResult(
          lang,
          item?.attributes?.descriptionZh,
          item?.attributes?.descriptionEn
        )!,
      });
    });
  
    const res = Object.entries(groupedData).map(([label, children]) => ({
      label: dayjs().month(+label).format("MMM"),
      children,
    }));
  
    return [...res, { label: t("NEW_YEAR"), children: [] }];
  };

  console.log(formatCalendar(schoolCalendar?.data));
  

  return (
    <>
      <div className={styles.calendarContent}>
        <div className={`${styles.calendarContainer} container`}>
          <Title className={styles.title}>{t("XCampCalendar")}</Title>
          <div className={styles.listContainer}>
            <div className={styles.bookButton}>
              <ScheduleOutlined />
            </div>
            <TimelineComponent items={formatCalendar(schoolCalendar?.data)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarContent;
