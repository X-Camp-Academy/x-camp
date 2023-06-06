'use client';
import React from 'react';
import { Space, Typography, Row, Col, Card, Image, Button } from 'antd';
import styles from './StudentProjects.module.scss';
import { SwapLeftOutlined, SwapRightOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const StudentProjects: React.FC = () => {
  return (
    <div className={styles.studentProjects}>
      <Space direction='vertical' align='center'>
        <Title className={styles.title}>
          <Text className={styles.titleText}>Student</Text> Projects
        </Title>
        <Paragraph className={styles.paragraph}>
          X-Camp has its own Art of Python Programming contest 4.0 award and other projects and event every quarter to inspire students . It is a
          <Text className={styles.paragraphText}> great opportunity </Text>
          for students to showcase what they have learned from classes .
        </Paragraph>
        <Space>
          <iframe
            width="600"
            height="350"
            src="https://www.youtube.com/embed/vXCwYuJxFX8"
            title="X-Camp Academy Intro - 2023"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          >
          </iframe>
          <Space>
            <Card
              className={styles.card}
              cover={
                <iframe
                  src="https://www.youtube.com/embed/vXCwYuJxFX8"
                  title="X-Camp Academy Intro - 2023"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                >
                </iframe>
              }
            >
              <Meta
                title="The Viper Game"
                description="Chengry H. Zenan L. and Eric G. Second Place, Art of Programming"
                className={styles.cardMeta}
              />
              <Button type="primary" shape="circle" className={styles.cardButton}>
                <SwapLeftOutlined />
              </Button>
            </Card>
            <Card
              className={styles.card}
              cover={
                <iframe
                  src="https://www.youtube.com/embed/vXCwYuJxFX8"
                  title="X-Camp Academy Intro - 2023"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                >
                </iframe>
              }
            >
              <Meta
                title="The Viper Game"
                description="Chengry H. Zenan L. and Eric G. Second Place, Art of Programming"
                className={styles.cardMeta}
              />
              <Button type="primary" shape="circle" ghost className={styles.cardButton}>
                <SwapRightOutlined />
              </Button>
            </Card>
          </Space>
        </Space>
      </Space>
    </div >
  )
}

export default StudentProjects;
