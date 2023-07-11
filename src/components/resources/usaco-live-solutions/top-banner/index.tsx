import React from 'react';
import styles from './index.module.scss';
import { Button, Col, Row, Space, Image } from 'antd';
import classNames from 'classnames/bind';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
const cx = classNames.bind(styles);

const TopBanner = () => {
  return (
    <div className={styles.topBannerContainer}>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={14} className={styles.col}>
            <Space direction="vertical">
              <Title className={styles.title}>USACO Live Solutions</Title>
              <Paragraph className={styles.paragraph}>
                {
                  "The first-ever, and most comprehensive live problem-solving broadcast on the entire web, only in X-Camp"
                }
              </Paragraph>
            </Space>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 8, offset: 2 }}
            className={styles.col}
          >
            <Image
              alt="image"
              src="/image/resources/USACOLiveTopBanner.png"
              preview={false}
              className={styles.image}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TopBanner;
