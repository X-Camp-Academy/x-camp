'use client';
import React from 'react';
import { Space, Row, Col, Card, Image, Typography, Button, Calendar } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Dayjs } from 'dayjs';
import styles from './PublicCalendar.module.scss';
import dayjs from 'dayjs';

const { Title, Paragraph, Text } = Typography;

const PublicCalendar: React.FC = () => {
  const onPanelChange = (value: any, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <div className={styles.publicCalendarContainer}>
      <div className={styles.publicCalendar}>
        <Title className={styles.title}>X-Camp Public <Text className={styles.titleText}>Calendar</Text></Title>
        <Row>
          <Col xs={24} sm={24} md={24} lg={14}>
            <Space direction='vertical' className={styles.colSpace}>
              <div
                className={styles.activeCard}
              >
                <Space size={72} align='center' className={styles.cardContent}>
                  <Space direction='vertical' className={styles.contentLeft}>
                    <Text className={styles.text}>FRI</Text>
                    <Text className={styles.text}>10</Text>
                    <Text className={styles.text}>Jun</Text>
                  </Space>
                  <Space direction='vertical' className={styles.contentRight}>
                    <Text className={styles.paragraph}>
                      {"USACO Director Brian Dean's Q&A Session"}
                    </Text>
                    <Text className={styles.paragraph}>
                      {"- Webinar Recording"}
                    </Text>
                    <Text className={styles.date}>4:00PM - 8:00PM PST</Text>
                  </Space>
                </Space>
              </div>
              <div
                className={styles.normalCard}
              >
                <Space size={72} align='center' className={styles.cardContent}>
                  <Space direction='vertical' className={styles.contentLeft}>
                    <Text className={styles.text}>FRI</Text>
                    <Text className={styles.text}>10</Text>
                    <Text className={styles.text}>Jun</Text>
                  </Space>
                  <Space direction='vertical' className={styles.contentRight}>
                    <Text className={styles.paragraph}>
                      {"USACO Director Brian Dean's Q&A Session"}
                    </Text>
                    <Text className={styles.paragraph}>
                      {"- Webinar Recording"}
                    </Text>
                    <Text className={styles.date}>4:00PM - 8:00PM PST</Text>
                  </Space>
                </Space>
              </div>
              <div
                className={styles.normalCard}
              >
                <Space size={72} align='center' className={styles.cardContent}>
                  <Space direction='vertical' className={styles.contentLeft}>
                    <Text className={styles.text}>FRI</Text>
                    <Text className={styles.text}>10</Text>
                    <Text className={styles.text}>Jun</Text>
                  </Space>
                  <Space direction='vertical' className={styles.contentRight}>
                    <Text className={styles.paragraph}>
                      {"USACO Director Brian Dean's Q&A Session"}
                    </Text>
                    <Text className={styles.paragraph}>
                      {"- Webinar Recording"}
                    </Text>
                    <Text className={styles.date}>4:00PM - 8:00PM PST</Text>
                  </Space>
                </Space>
              </div>
              <div
                className={styles.normalCard}
              >
                <Space size={72} align='center' className={styles.cardContent}>
                  <Space direction='vertical' className={styles.contentLeft}>
                    <Text className={styles.text}>FRI</Text>
                    <Text className={styles.text}>10</Text>
                    <Text className={styles.text}>Jun</Text>
                  </Space>
                  <Space direction='vertical' className={styles.contentRight}>
                    <Text className={styles.paragraph}>
                      {"USACO Director Brian Dean's Q&A Session"}
                    </Text>
                    <Text className={styles.paragraph}>
                      {"- Webinar Recording"}
                    </Text>
                    <Text className={styles.date}>4:00PM - 8:00PM PST</Text>
                  </Space>
                </Space>
              </div>
              <Button className={styles.button}>Subscribe to Calendar</Button>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={24} lg={10}>
            <Space size={48} direction='vertical' className={styles.colSpace}>
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
              <Space direction='vertical' className={styles.calendarSpace}>
                <Space className={styles.spaceDate}>
                  <Text className={styles.text}>May 29</Text>
                  <div className={styles.line}></div>
                </Space>
                {
                  [1, 2, 3].map(item => {
                    return (
                      <Space key={item} direction='vertical' className={styles.calendarItem}>
                        <Text className={styles.itemDate}>4:00PM - 8:00PM PST</Text>
                        <Paragraph className={styles.itemParagraph}>{"USACO Director Brian Dean's Q&A Session - Webinar Recording"}</Paragraph>
                        <div className={styles.itemLine}></div>
                      </Space>
                    )
                  })
                }
              </Space>
            </Space>
          </Col>
        </Row>
      </div>
    </div >
  )
}

export default PublicCalendar;
