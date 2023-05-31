'use client';
import React from 'react';
import { Row, Col, Card, Image } from 'antd';
import styles from './DiscoverCourses.module.scss';

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
    <div
      className={styles.discoverCourses}
    >
      <h1>Discover Our Courses</h1>
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
                    paddingTop: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <div className={styles.cardTop}>
                    <h1>{item?.title}</h1>
                    <p>{item?.desc}</p>
                  </div>
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
