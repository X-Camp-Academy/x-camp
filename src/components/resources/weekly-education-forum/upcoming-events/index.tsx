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
import Link from "next/link";




const UpcomingEvents = () => {
  const pageSize = 25;
  const { lang } = useLang();
  const [current, setCurrent] = useState<number>(1);
  const [tag, setTag] = useState<NewEventCategory>(NewEventCategory.Event);


  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNameEn = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  

  const getMonth = (date: string) => {
    return new Date(date).getMonth() + 1;
  }

  const getDate = (date: string) => {
    return new Date(date).getDate();
  }

  const getWeekDay = (date: string) => {
    return weekdays[new Date(date).getDay()];
  }

  const getYear = (date: string) => {
    return new Date(date).getFullYear();
  }



  const { data: newEventData } = useGetNewEvent({
    tag,
    current,
    pageSize
  });



  const upComingEvent = newEventData?.data.filter((item, index) => {
    return item?.attributes?.datetime && (new Date(item?.attributes?.datetime)).getTime() - new Date().getTime() > 0;
  })

  const formatDate = (dateString: string, locale: string) => {
    let formatString = '';

    // 根据传入的locale设置Day.js的语言环境
    dayjs.locale(locale);

    // 根据不同的locale选择不同的日期格式
    if (locale === 'zh-cn') {
      formatString = 'YYYY年MM月DD日';
    } else if (locale === 'en') {
      formatString = 'DD/MM/YYYY';
    } 

    const formattedDate = dayjs(dateString).format(formatString);
    return formattedDate;
  }



  return (
    <div className={styles.content}>
      <div className="container">
        <XCollapse
          header={{
            title: "Upcoming Events",
            description:
              "Peek at some alumni events happening just around the corner.",
          }}
        >
          <Row className={styles.cards} gutter={[32, 32]}>

            {upComingEvent?.slice(0, 3).map((item, index) => {
              if (item?.attributes?.datetime && item?.attributes.start && item?.attributes.end) {
                return (
                  < Col key={index} md={24} lg={8} >
                    <ColorfulCard border={"bottom"} animate={false} index={index}>
                      <div className={styles.card}>
                        <div className={styles.date}>
                          <div className={styles.month}>{monthNameEn[getMonth(item.attributes?.datetime)]}</div>
                          <div className={styles.day}>{getDate(item.attributes?.datetime)}</div>
                        </div>
                        <div className={styles.title}>
                          {
                            getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)
                          }
                          <Button
                            type="link"
                            className={styles.btn}
                            icon={<RightCircleOutlined />}
                          />
                        </div>
                        <Descriptions column={1} className={styles.descriptions}>
                          <Descriptions.Item label={<ClockCircleOutlined />}>
                            {`
                            ${weekdays[dayjs(item.attributes?.datetime).day()]}, 
                            ${formatDate(item?.attributes?.datetime,dayjs.locale())} | 
                            ${item?.attributes?.start.substring(0, 5)} ${Number(item?.attributes?.start.substring(0, 2)) < 12 ? "AM" : "PM"} - 
                            ${item?.attributes?.end.substring(0, 5)} ${Number(item?.attributes?.end.substring(0, 2)) < 12 ? "AM" : "PM"} 
                            UTC ${item.attributes.timeZone > 0 ? '+' + item.attributes.timeZone : item.attributes.timeZone}
                            `}
                          </Descriptions.Item>
                          <Descriptions.Item label={<LaptopOutlined />}>
                            {!item.attributes.geographicallyAddress && item.attributes.link && item.attributes.onlinePlatform ?
                              <a href={item.attributes.link} style={{ color: "#666666" }}>{item.attributes.onlinePlatform}</a> : item.attributes.geographicallyAddress}
                          </Descriptions.Item>
                          <Descriptions.Item label={<UserOutlined />}>
                            {`Organizer | ${item?.attributes?.organizer} `}
                          </Descriptions.Item>
                        </Descriptions>
                      </div>
                    </ColorfulCard>
                  </Col>
                )
              }
            })}
          </Row>
        </XCollapse>
      </div>
    </div >
  );
};

export default UpcomingEvents;
