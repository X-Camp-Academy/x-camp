import React, { useState } from "react";
import styles from "./index.module.scss";
import { Button, Col, Descriptions, Row } from "antd";
import {
  ClockCircleOutlined,
  LaptopOutlined,
  RightCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ColorfulCard from "@/components/common/colorful-card";
import XCollapse from "@/components/common/collapse";
import { useLang } from "@/hoc/with-intl/define";
import { NewEventCategory } from "@/apis/strapi-client/define";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import dayjs from "dayjs";
import { getTransResult } from "@/utils/public";

const UpcomingEvents = () => {
  const pageSize = 25;
  const { lang, format: t } = useLang();
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
      formatString = `DD, YYYY`;
      formattedDate =
        weekdaysEn[dayInfo.day()] +
        ", " +
        monthNameEn[dayInfo.month()] +
        " " +
        dayInfo.format(formatString);
    }

    return formattedDate;
  };

  return (
    <div className={styles.content}>
      <div className="container">
        <XCollapse
          header={{
            title: t("UpcomingEvents"),
            description: t("UpcomingEvents.Desc"),
          }}
        >
          <Row className={styles.cards} gutter={[32, 32]}>
            {upComingEvent?.slice(0, 3).map((item, index) => {
              if (
                item?.attributes?.datetime &&
                item?.attributes.start &&
                item?.attributes.end
              ) {
                return (
                  <Col key={index} xs={24} sm={24} md={12} lg={8}>
                    <ColorfulCard
                      border={"bottom"}
                      animate={false}
                      index={index}
                    >
                      <div className={styles.card}>
                        <div className={styles.date}>
                          <div className={styles.month}>
                            {lang === "en"
                              ? monthNameEn[
                                  dayjs(item.attributes?.datetime).month()
                                ]
                              : dayjs(item.attributes?.datetime).month() +
                                1 +
                                "月"}
                          </div>
                          <div className={styles.day}>
                            {dayjs(item.attributes?.datetime).date()}
                          </div>
                        </div>
                        <div className={styles.title}>
                          {getTransResult(
                            lang,
                            item?.attributes?.titleZh,
                            item?.attributes?.titleEn
                          )}
                        </div>
                        <Descriptions
                          column={1}
                          className={styles.descriptions}
                        >
                          <Descriptions.Item label={<ClockCircleOutlined />}>
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
                          </Descriptions.Item>
                          <Descriptions.Item label={<UserOutlined />}>
                            {`Organizer | ${item?.attributes?.organizer} `}
                          </Descriptions.Item>
                          <Descriptions.Item label={<LaptopOutlined />}>
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
                            <Button
                              type="link"
                              className={styles.btn}
                              icon={<RightCircleOutlined />}
                            />
                          </Descriptions.Item>
                        </Descriptions>
                      </div>
                    </ColorfulCard>
                  </Col>
                );
              }
            })}
          </Row>
        </XCollapse>
      </div>
    </div>
  );
};

export default UpcomingEvents;
