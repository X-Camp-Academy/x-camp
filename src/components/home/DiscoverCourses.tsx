'use client';
import React from 'react';
import { Typography, Row, Col, Card, Space, Image } from 'antd';
import styles from './DiscoverCourses.module.scss';

const { Title, Paragraph, Text } = Typography;

const DiscoverCourses = () => {
  const courseCards = [
    {
      title: 'Python Beginner',
      desc: 'Suitable for Year 6+',
      url: '/image/home/Course-1.png',
      bgc: '#D8D8D8'
    },
    {
      title: 'C++ Knowledge',
      desc: 'Suitable for Year 7+',
      url: '/image/home/Course-2.png',
      bgc: '#FFD600'
    },
    {
      title: 'USACO Grandmaster',
      desc: 'Suitable for Year 7+',
      url: '/image/home/Course-3.png',
      bgc: '#FFAD11'
    },
    {
      title: 'APCS',
      desc: 'Suitable for Year 7+',
      url: '/image/home/Course-4.png',
      bgc: '#D46B14'
    }
  ];
  return (
    <div className={styles.discoverCourses}>
      <Title className={styles.title}>Discover Our Courses</Title>
      <Row
        className={styles.cards}
        gutter={16}
        justify='center'
        align='middle'
      >
        {
          courseCards.map(item => {
            return (
              <Col key={item?.url} xs={24} md={12} lg={6}>
                <Card
                  bodyStyle={{
                    backgroundColor: item?.bgc,
                    borderRadius: 8,
                    paddingBottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Space direction='vertical' className={styles.cardTop}>
                    <Title className={styles.cardTitle}>{item?.title}</Title>
                    <Paragraph className={styles.cardParagraph}>{item?.desc}</Paragraph>
                  </Space>
                  <Image
                    src={item?.url}
                    alt="image"
                    preview={false}
                    width={200}
                    height={200}
                  />
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </div >
  )
}

export default DiscoverCourses;
