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
  const formatCalendar = (
    data: StrapiResponseDataItem<GetNewEvent>[] | undefined
  ): Item[] => {
    const groupedData: {
      [month: string]: Item[];
    } = {
      Jan: [],
      Feb: [],
      Mar: [],
      Apr: [],
      May: [],
      Jun: [],
      Jul: [],
      Aug: [],
      Sep: [],
      Oct: [],
      Nov: [],
      Dec: [],
    };
    data?.forEach((item) => {
      const month = dayjs(item?.attributes?.startDateTime).format("MMM");
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
      label,
      children,
    }));

    return [...res, { label: t("NEW_YEAR"), children: [] }];
  };

  return (
    <>
      <div className={styles.calendarContent}>
        <div className={`${styles.calendarContainer} container`}>
          <Title className={styles.title}>{t("XCampCalendar")}</Title>
          <div className={styles.listContainer}>
            <Button className={styles.bookButton}>
              <ScheduleOutlined />
            </Button>
            <TimelineComponent items={formatCalendar(schoolCalendar?.data)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarContent;
