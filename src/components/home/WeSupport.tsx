'use client';
import React from 'react';
import { Space, Typography, Row, Col, Card, Image } from 'antd';
import styles from './WeSupport.module.scss';

const { Title, Paragraph, Text } = Typography;

const WeSupport: React.FC = () => {
  return (
    <div className={styles.weSupport}>
      <Row gutter={[24, 24]}>
        <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }}>
          <iframe
            width="100%"
            height="350"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
            title="X-Camp Academy Intro - 2023"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          >
          </iframe>
        </Col>
        <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }}>
          <Row>
            <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 24, order: 2 }} lg={{ span: 24, order: 1 }}>
              <Space size={24} direction='vertical'>
                <Title className={styles.title}>We support</Title>
                <Paragraph className={styles.paragraph}>{"X-Camp's programming courses support the three most mainstream and popular programming languages, including Intro to Python, Intro to Java (APCS), Beginner / Intermediate / Advanced level C++, for students in grades 5-12th."}</Paragraph>
              </Space>
            </Col>

            <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 24, order: 1 }} lg={{ span: 24, order: 2 }}>
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
            </Col>
          </Row>
        </Col>
      </Row>
    </div >
  )
}

export default WeSupport;
