import React from "react";
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
import { formatTimezone, getTransResult } from "@/utils/public";
import styles from "./UpcomingEvents.module.scss";


const UpcomingEvents: React.FC = () => {
  const { lang, format: t } = useLang();
  const { data: newEventData } = useGetNewEvent({
    tag: NewEventCategory.Event,
    current: 1,
    pageSize: 25,
  });

  const upComingEvent = newEventData?.data?.filter(item => {
    return (
      item?.attributes?.startDateTime &&
      new Date(item?.attributes?.startDateTime).getTime() -
      new Date().getTime() > 0
    );
  });

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
              const { utcTime: startTime } = formatTimezone(
                item?.attributes?.startDateTime
              );
              const { utcTime: endTime, timezone: endTimeZone } =
                formatTimezone(item?.attributes?.endDateTime);
              return (
                <Col key={index} xs={24} sm={24} md={12} lg={8}>
                  <ColorfulCard border={"bottom"} animate={false} index={index}>
                    <div className={styles.card}>
                      <div className={styles.date}>
                        <div className={styles.month}>
                          {startTime.format("MMMM")}
                        </div>
                        <div className={styles.day}>
                          {startTime.format("DD")}
                        </div>
                      </div>
                      <div className={styles.title}>
                        {getTransResult(
                          lang,
                          item?.attributes?.titleZh,
                          item?.attributes?.titleEn
                        )}
                      </div>
                      <Descriptions column={1} className={styles.descriptions}>
                        <Descriptions.Item label={<ClockCircleOutlined />}>
                          {`${startTime.format(
                            "dddd, MMMM DD, YYYY hh:mm A"
                          )} - ${endTime.format(
                            "dddd, MMMM DD, YYYY hh:mm A"
                          )} ${endTimeZone}`}
                        </Descriptions.Item>

                        <Descriptions.Item label={<UserOutlined />}>
                          {`Organizer ${item?.attributes?.organizer ? '| ' + item?.attributes?.organizer : ''} `}
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
                          {item.attributes.link && (
                            <Button
                              type="link"
                              className={styles.btn}
                              icon={<RightCircleOutlined />}
                              href={item.attributes.link}
                            />
                          )}

                        </Descriptions.Item>
                      </Descriptions>
                    </div>
                  </ColorfulCard>
                </Col>
              );
            })}
          </Row>
        </XCollapse>
      </div>
    </div>
  );
};

export default UpcomingEvents;
