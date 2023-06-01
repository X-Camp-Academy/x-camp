'use client';
import React from 'react';
import { Space, Typography, Row, Col, Card, Image } from 'antd';
import styles from './WeSupport.module.scss';

const { Title, Paragraph, Text } = Typography;
const WeSupport: React.FC = () => {
  return (
    <div className={styles.weSupport}>
      <Space size={96}>
        <div className={styles.video}>
          <iframe
            width="670"
            height="400"
            src="https://www.youtube.com/embed/vXCwYuJxFX8"
            title="X-Camp Academy Intro - 2023"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          >
          </iframe>
        </div>
        <Space direction='vertical' size={20}>
          <Title className={styles.title}>We support</Title>
          <Paragraph className={styles.paragraph}>{"X-Camp's programming courses support the three most mainstream and popular programming languages, including Intro to Python, Intro to Java (APCS), Beginner / Intermediate / Advanced level C++, for students in grades 5-12th."}</Paragraph>
          <Space size={72}>
            <Image
              src='/image/home/Course-1.png'
              alt="image"
              preview={false}
              width={96}
              height={100}
            />
            <Image
              src='/image/home/Course-2.png'
              alt="image"
              preview={false}
              width={96}
              height={100}
            />
            <Image
              src='/image/home/Course-3.png'
              alt="image"
              preview={false}
              width={96}
              height={100}
            />
          </Space>
        </Space>
      </Space>
    </div >
  )
}

export default WeSupport;
