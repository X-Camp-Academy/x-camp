"use client";
import React, { useState } from "react";
import "dayjs/locale/zh-cn";
import {
  Calendar,
  Col,
  Radio,
  Row,
  Select,
  Typography,
  theme,
  Button,
  Badge,
} from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
import dayjs, { Dayjs } from "dayjs";

interface Props {
  className?: string;
  onSelectDate: (date: string) => void;
  eventDate: {
    startDateTime?: string;
    endDateTime?: string;
  }[];
}


const ActivityCalendar: React.FC<Props> = ({ className = "", onSelectDate, eventDate }) => {
  const { lang } = useLang();
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

  const monthNameZH = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];

  const { token } = theme.useToken();
  const [selectDate, setSelectDate] = useState<string>(dayjs().toString());


  const dateCellRender = (value: Dayjs) => {
    const eventDataForDate = eventDate.find((event) => {
      if (event.startDateTime && event.endDateTime)
        return value.isBetween(event.startDateTime, event.endDateTime, 'days', '[]');
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

  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={wrapperStyle}>
      <Calendar
        fullscreen={false}
        className={className}
        cellRender={dateCellRender}
        onSelect={(date) => {
          setSelectDate(date.toString());
          onSelectDate(date.toString()); // 将选择的日期传递给父组件
        }}
        //style={{ padding: 10, borderRadius: 0 }}
        headerRender={({ value, onChange }) => {
          const year = value.year();
          const month = value.month();

          const backMonth = () => {
            const now = value.clone().month(month - 1);
            onChange(now);
          };

          const forwardMonth = () => {
            const now = value.clone().month(month + 1);
            onChange(now);
          };

          return (
            <div style={{ padding: 8 }}>
              <Row gutter={8} className={styles.row}>
                <Col className={styles.dateTextCol}>
                  {getTransResult(lang, monthNameZH[month], monthNameEn[month])}
                  {" " + year}
                </Col>
                <Col className={styles.btnCol}>
                  <Button
                    icon={<LeftOutlined />}
                    className={styles.changeMonthBtn}
                    onClick={backMonth}
                    style={{ marginRight: 10 }}
                  ></Button>
                  <Button
                    icon={<RightOutlined />}
                    className={styles.changeMonthBtn}
                    onClick={forwardMonth}
                  ></Button>
                </Col>
              </Row>
            </div>
          );
        }}
      />
    </div>
  );
};

export default ActivityCalendar;
