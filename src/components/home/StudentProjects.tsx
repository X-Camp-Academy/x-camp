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
      <Space direction='vertical' size={24} align='center'>
        <Title className={styles.title}><Title style={{ color: '#D46B14', display: 'inline' }}>Student</Title> Projects</Title>
        <Paragraph className={styles.paragraph}>
          X-Camp has its own Art of Python Programming contest 4.0 award and other projects and event every quarter to inspire students . It is a
          <Text className={styles.paragraphText} style={{ color: '#D46B14' }}> great opportunity </Text>
          for students to showcase what they have learned from classes .
        </Paragraph>
        <Space>
          <div className={styles.video}>
            <iframe
              width="600"
              height="350"
              src="https://www.youtube.com/embed/vXCwYuJxFX8"
              title="X-Camp Academy Intro - 2023"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            >
            </iframe>
          </div>
          <Space>
            <Card
              style={{ height: 350 }}
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
              />
              <Button type="primary" shape="circle">
                <SwapLeftOutlined />
              </Button>
            </Card>
            <Card
              style={{ height: 350 }}
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
              />
              <Button type="primary" shape="circle" ghost>
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
