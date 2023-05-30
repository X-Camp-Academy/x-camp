'use client';
import React, { useEffect } from 'react';
import { Space, Grid, Row, Col, Card, Image } from 'antd';
import styles from './DiscoverCourses.module.scss';

const { useBreakpoint } = Grid;

const DiscoverCourses = () => {
  const imageUrls = [
    {
      title: 'Python Beginner',
      desc: 'Suitable for Year 6+',
      url: '/image/Course-1.png',
      bgc: '#D9D9D9'
    },
    {
      title: 'C++ Knowledge',
      desc: 'Suitable for Year 7+',
      url: '/image/Course-2.png',
      bgc: '#FED600'
    },
    {
      title: 'USACO Grandmaster',
      desc: 'Suitable for Year 7+',
      url: '/image/Course-3.png',
      bgc: '#FEAD10'
    },
    {
      title: 'APCS',
      desc: 'Suitable for Year 7+',
      url: '/image/Course-4.png',
      bgc: '#D36B13'
    }
  ];
  const screens = useBreakpoint();
  
  useEffect(() => {
    console.log(screens);
  }, [screens]);
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
          imageUrls.map(item => {
            return (
              <Col key={item?.url} xs={24} md={12} lg={6}>
                <Card
                  bodyStyle={{
                    backgroundColor: item?.bgc,
                    borderRadius: 8,
                    paddingTop: 0,
                    // display: 'flex',
                    // flexDirection: 'column',
                    // justifyContent: 'center',
                    // alignItems: 'center'
                  }}
                >
                  <div>
                    <h1>{item?.title}</h1>
                    <p>{item?.desc}</p>
                  </div>
                  <Image
                    src={item?.url}
                    alt="logo"
                    preview={false}
                    width={225}
                    height={225}
                  />
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default DiscoverCourses;
