'use client';
import React from 'react';
import { Space, Row, Col, Image, Typography } from 'antd';
import styles from './TopBanner.module.scss';

const { Title, Paragraph } = Typography;

const TopBanner: React.FC = () => {
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>Contact X-Camp</Title>
              <Paragraph className={styles.paragraph}>
                {
                  'X-Camp Academy focuses on improving the coding abilities and problem-solving skills of our students. We strive to teach not only persistence in analytical thought, but also genuine curiosity whilst facing new challenges.'
                }
              </Paragraph>
            </Space>
          </Col>
          <Image
            alt="image"
            src="/image/home/course-3.png"
            preview={false}
            className={styles.image}
          />
        </Row>
      </div>
    </div>
  );
};

export default TopBanner;
