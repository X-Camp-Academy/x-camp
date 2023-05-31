'use client';
import React from 'react';
import { Space, Row, Col, Card, Image } from 'antd';
import styles from './About.module.scss';

const About: React.FC = () => {
  const aboutContents = [
    {
      icon: '/image/Faculty-icon.png',
      title: 'Faculty',
      desc: 'X-Camp teachers are composed of senior engineers from leading tech companies and contestants from international and national level informatic contests like IOI, ICPC, USACO.'
    },
    {
      icon: '/image/Achievement-icon.png',
      title: 'Achievement',
      desc: 'More than 100 X-Camp students have been qualified for USACO Silver division and above; including 25 in the Platinum division and 5 selected in the US Camp, out of which 4 were fresh from the'
    },
    {
      icon: '/image/Community-icon.png',
      title: 'Community',
      desc: 'We are a community dedicated to inspiring and cultivating the next generation of Computer Science and Artificial Intelligence talent.'
    },
  ];

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.about}>
        <Space direction='vertical' align='center' className={styles.aboutTop}>
          <h1><span style={{ color: '#D36B13' }}>About </span>X-Camp</h1>
          <p>Focusing on mastery of data structures and algorithms, X-Camp Academy is a Silicon Valley based institute offers coding classes for middle and high school students to achieve success at contests like USACO and beyond. Check our recent <span style={{ color: '#D36B13' }}>USACO classes</span></p>
        </Space>
        <Row
          className={styles.cards}
          gutter={16}
          justify='center'
          align='middle'
        >
          {
            aboutContents.map(item => {
              return (
                <Col key={item?.icon} xs={24} lg={8}>
                  <Card
                    hoverable
                    bodyStyle={{
                      borderRadius: 8,
                      height: 220,
                    }}
                  >
                    <Space direction='vertical'>
                      <Space>
                        <Image
                          src={item?.icon}
                          alt="icon"
                          preview={false}
                          width={50}
                          height={50}
                          className={styles.cardIcon}
                        />
                        <span className={styles.cardTitle}>{item?.title}</span>
                      </Space>
                      <p>{item?.desc}</p>
                    </Space>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </div >
  )
}

export default About;
