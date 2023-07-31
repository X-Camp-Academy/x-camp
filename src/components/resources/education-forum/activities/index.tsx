import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import ActivityItem from "./activity-item";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import {
  EventCategory,
  GetNewEvent,
  GetNewEventRequest,
  NewEventCategory,
} from "@/apis/strapi-client/define";
import {
  AndOrFilters,
  FilterFields,
} from "@/apis/strapi-client/strapiDefine";
import { Pagination, Row, Space } from "antd";
import { useLang } from "@/hoc/with-intl/define";
interface ActivityItem {
  title: string;
  key: EventCategory | "All";
}
const Activities: React.FC = () => {
  //useGetNewEvent
  const pageSize = 12;
  const { format: t } = useLang();
  const [current, setCurrent] = useState<number>(1);
  const tag = NewEventCategory.Event;
  const { data: newEventData, runAsync: getNewEventData } = useGetNewEvent({
    tag,
    current,
    pageSize,
    manual: true,
  });
  const [selectedItem, setSelectedItem] = useState<
    EventCategory | "All"
  >(EventCategory.SchoolLifeSharing);
  useEffect(() => {
    const commonParams: GetNewEventRequest = {
      populate: "*",
      sort: ["order:desc"],
      pagination: {
        page: current,
        pageSize,
      },
    };
    let filters:
      | Partial<FilterFields<GetNewEvent>>
      | AndOrFilters<FilterFields<GetNewEvent>> = {
      tags: {
        $eq: tag,
      },
    };
    if (selectedItem !== "All") {
      filters = {
        ...filters,
        eventCategory: {
          $eq: selectedItem,
        },
      };
    }
    getNewEventData({
      ...commonParams,
      filters,
    });
  }, [tag, selectedItem, current]);

  const items: ActivityItem[] = [
    {
      title: t("ActivityItem1"),
      key: EventCategory.SchoolLifeSharing,
    },
    {
      title: t("ActivityItem2"),
      key: EventCategory.CodingEducation,
    },
    {
      title: t("ActivityItem3"),
      key: EventCategory.CareerPath,
    },
    {
      title: t("ActivityItem4"),
      key: EventCategory.Research,
    },
    {
      title: t("ActivityItem5"),
      key: "All",
    },
  ];
  return (
    <div className={styles.content}>
      <div className="container">
        <div className={styles.toolBar}>
          {items.map((v) => {
            return (
              <div
                className={`${styles.toolBarItem} ${v.key === selectedItem ? styles.selectedToolBarItem : ""
                  }`}
                key={v.key}
                onClick={() => {
                  setSelectedItem(v.key);
                }}
              >
                {v.title}
              </div>
            );
          })}
        </div>
        <Space className={styles.titleContain}>
          <div className={styles.activityTitle}>{selectedItem}</div>
          <div className={styles.pageTotal}>
            {newEventData?.data?.length} {t("EducationalForum")}
          </div>
        </Space>
        <Row gutter={[32, 32]}>
          {newEventData?.data?.map((v, index) => (
            /* 新版UI的分页器待完成 */
            <ActivityItem {...v} key={index} index={index} />
          ))}
        </Row>

        <Pagination
          className={styles.pagination}
          pageSize={pageSize}
          current={current}
          total={newEventData?.meta?.pagination?.total}
          onChange={(page) => setCurrent(page)}
        />
      </div>
    </div>
  );
};

export default Activities;
