import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Col, Pagination, Row, Space } from "antd";
import { ClockCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import ColorfulCard from "@/components/common/colorful-card";
import { useLang } from "@/hoc/with-intl/define";
import { formatTimezone, getTransResult } from "@/utils/public";
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
import styles from "./Activities.module.scss";

interface ActivityItem {
  title: string;
  key: EventCategory | "All";
}

const Activities: React.FC = () => {
  const router = useRouter();
  const { format: t } = useLang();
  const { lang } = useLang();
  const [current, setCurrent] = useState<number>(1);
  const tag = NewEventCategory.Event;
  const { data: newEventData, runAsync: getNewEventData } = useGetNewEvent({
    tag,
    current,
    pageSize: 12,
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
        pageSize: 12,
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
          {items?.map((item) => {
            return (
              <div
                className={`${styles.toolBarItem} ${item?.key === selectedItem ? styles.selectedToolBarItem : ""
                  }`}
                key={item?.key}
                onClick={() => {
                  setSelectedItem(item?.key);
                }}
              >
                {item?.title}
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
            <Col key={index} xs={24} sm={24} md={12} lg={8}>
              <ColorfulCard border={'bottom'} animate={false} index={index}>
                <div className={styles.card}>
                  <div className={styles.imgBox}>
                    <img src={getTransResult(lang, v?.attributes?.imgZh?.data?.attributes?.url, v?.attributes?.imgEn?.data?.attributes?.url)} alt="" />
                  </div>
                  <Space direction="vertical" className={styles.cardContent}>
                    <div className={styles.title}>
                      {getTransResult(lang, v?.attributes?.titleZh, v?.attributes?.titleEn)}
                    </div>
                    <div className={styles.description}>
                      <div>
                        <ClockCircleOutlined className={styles.icon} />
                        {formatTimezone(v?.attributes?.startDateTime)?.utcTime.format('YYYY-MM-DD')}
                      </div>
                      <Button
                        type="link"
                        className={styles.btn}
                        icon={<RightCircleOutlined />}
                        onClick={() => { router.push(`/resources/${v?.id}`) }}
                      />
                    </div>
                  </Space>
                </div>
              </ColorfulCard>
            </Col>
          ))}
        </Row>

        <Pagination
          className={styles.pagination}
          pageSize={12}
          current={current}
          total={newEventData?.meta?.pagination?.total}
          onChange={(page) => setCurrent(page)}
        />
      </div>
    </div>
  );
};

export default Activities;
