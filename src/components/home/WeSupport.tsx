'use client';
import React from 'react';
import { Space, Typography, Row, Col, Card, Image } from 'antd';
import styles from './WeSupport.module.scss';

const { Title, Paragraph, Text } = Typography;

const WeSupport: React.FC = () => {
  return (
    <div className={styles.weSupport}>
      <Row gutter={24}>
        <Col xs={24} sm={24} md={24} lg={12}>
          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/vXCwYuJxFX8"
            title="X-Camp Academy Intro - 2023"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          >
          </iframe>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Space direction='vertical' size={24}>
            <Title className={styles.title}>We support</Title>
            <Paragraph className={styles.paragraph}>{"X-Camp's programming courses support the three most mainstream and popular programming languages, including Intro to Python, Intro to Java (APCS), Beginner / Intermediate / Advanced level C++, for students in grades 5-12th."}</Paragraph>
            <Space size={24}>
              <Image
                src='/image/home/we-support-1.png'
                alt="image"
                preview={false}
                width={164}
                height={100}
              />
              <Image
                src='/image/home/we-support-2.png'
                alt="image"
                preview={false}
                width={164}
                height={100}
              />
              <Image
                src='/image/home/we-support-3.png'
                alt="image"
                preview={false}
                width={164}
                height={100}
              />
            </Space>
          </Space>
        </Col>
      </Row>
    </div >
  )
}

export default WeSupport;
