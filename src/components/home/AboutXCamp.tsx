'use client';
import React from 'react';
import { Space, Row, Col, Card, Image, Typography } from 'antd';
import styles from './AboutXCamp.module.scss';


const { Title, Paragraph, Text } = Typography;
const AboutXCamp: React.FC = () => {
  const aboutContents = [
    {
      icon: '/image/home/Faculty-icon.png',
      title: 'Faculty',
      desc: 'aaaacccccgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggcccccccccdddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa X-Camp teachers are composed of senior engineers from leading tech companies and contestants from international and national level informatic contests like IOI, ICPC, USACO.'
    },
    {
      icon: '/image/home/Achievement-icon.png',
      title: 'Achievement',
      desc: 'More than 100 X-Camp students have been qualified for USACO Silver division and above; including 25 in the Platinum division and 5 selected in the US Camp, out of which 4 were fresh from the'
    },
    {
      icon: '/image/home/Community-icon.png',
      title: 'Community',
      desc: 'We are a community dedicated to inspiring and cultivating the next generation of Computer Science and Artificial Intelligence talent.'
    },
  ];
  return (
    <div className={styles.aboutXCampContainer}>
      <div className={styles.aboutXCamp}>
        <Space direction='vertical' align='center' className={styles.aboutXCampTop}>
          <Title className={styles.title}><Text className={styles.titleText}>About </Text>X-Camp</Title>
          <Paragraph className={styles.paragraph}>Focusing on mastery of data structures and algorithms, X-Camp Academy is a Silicon Valley based institute offers coding classes for middle and high school students to achieve success at contests like USACO and beyond. Check our recent <Text className={styles.paragraphText}>USACO classes</Text></Paragraph>
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
                    className={styles.card}
                    bodyStyle={{
                      borderRadius: 8,
                      padding: 42
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
                        <Title className={styles.cardTitle}>{item?.title}</Title>
                      </Space>
                      <Paragraph
                        ellipsis={{ rows: 5 }}
                        className={styles.cardParagraph}
                      >
                        {item?.desc}
                      </Paragraph>
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

export default AboutXCamp;