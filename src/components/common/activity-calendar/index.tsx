'use client';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult, monthNameEn, monthNameZH } from '@/utils/public';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Calendar, Col, Row, theme } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/zh-cn';
import React, { useState } from 'react';
import styles from './index.module.scss';
interface Props {
  className?: string;
  onSelectDate: (date: string) => void;
  headerClassName?: string;
  eventDate: {
    startDateTime?: string;
    endDateTime?: string;
  }[];
}

const ActivityCalendar: React.FC<Props> = ({ className = '', onSelectDate, eventDate, headerClassName }) => {
  const { lang } = useLang();

  const { token } = theme.useToken();
  const [selectDate, setSelectDate] = useState<string>(dayjs().toString());

  const judgeDate = (selectDate: Dayjs, startDateTime: string, endDateTime: string) => {
    if (endDateTime === '') {
      return dayjs(selectDate).isSame(dayjs(startDateTime), 'days');
    }
    return dayjs(selectDate).isBetween(dayjs(startDateTime), dayjs(endDateTime), 'days', '[]');
  };

  const cellRender = (value: Dayjs) => {
    const eventDataForDate = eventDate.find((event) => {
      return judgeDate(value, event?.startDateTime || '', event?.endDateTime || '');
    });

    const dotStyle: React.CSSProperties = {
      width: 8,
      height: 8,
      backgroundColor: '#FF4D4F',
      borderRadius: 4,
      margin: '0 auto'
    };

    return eventDataForDate ? <div style={dotStyle} /> : <></>;
  };

  const wrapperStyle: React.CSSProperties = {
    width: '100%',
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    boxShadow: '0 6px 16px 0 #D8D8D8'
  };

  return (
    <div style={wrapperStyle} className={`${styles.wrapper}`}>
      <Calendar
        fullscreen={false}
        className={className}
        cellRender={cellRender}
        onSelect={(date) => {
          setSelectDate(date.toString());
          onSelectDate(date.toString());
        }}
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
            <Row gutter={8} className={`${styles.row} ${headerClassName}`}>
              <Col className={styles.dateTextCol}>
                {getTransResult(lang, monthNameZH[month], monthNameEn[month])}
                {' ' + year}
              </Col>
              <Col className={styles.btnCol}>
                <Button icon={<LeftOutlined />} className={styles.changeMonthBtn} onClick={backMonth} style={{ marginRight: 10 }} />
                <Button icon={<RightOutlined />} className={styles.changeMonthBtn} onClick={forwardMonth} />
              </Col>
            </Row>
          );
        }}
      />
    </div>
  );
};

export default ActivityCalendar;
