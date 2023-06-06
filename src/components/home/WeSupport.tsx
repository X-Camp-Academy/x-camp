'use client';
import React from 'react';
import { Space, Typography, Row, Col, Card, Image } from 'antd';
import styles from './WeSupport.module.scss';

const { Title, Paragraph, Text } = Typography;

const WeSupport: React.FC = () => {
  return (
    <div className={styles.weSupport}>
      <Space size={16}>
        <div className={styles.video}>
          <iframe
            width="620"
            height="350"
            src="https://www.youtube.com/embed/vXCwYuJxFX8"
            title="X-Camp Academy Intro - 2023"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          >
          </iframe>
        </div>
        <Space direction='vertical' size={24}>
          <Title className={styles.title}>We support</Title>
          <Paragraph className={styles.paragraph}>{"X-Camp's programming courses support the three most mainstream and popular programming languages, including Intro to Python, Intro to Java (APCS), Beginner / Intermediate / Advanced level C++, for students in grades 5-12th."}</Paragraph>
          <Space size={24}>
            <Image
              src='/image/home/Course-1.png'
              alt="image"
              preview={false}
              width={160}
              height={90}
            />
            <Image
              src='/image/home/Course-2.png'
              alt="image"
              preview={false}
              width={160}
              height={90}
            />
            <Image
              src='/image/home/Course-3.png'
              alt="image"
              preview={false}
              width={160}
              height={90}
            />
          </Space>
        </Space>
      </Space>
    </div >
  )
}

export default WeSupport;
