import { useMobile } from '@/utils';
import { Col, Row, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;

interface CommonBannerProps {
  title: string;
  paragraph: React.ReactNode;
  image: string;
  titleClassName?: string;
  paragraphClassName?: string;
  barColor?: string;
  backgroundColor?: string;
}

const Banner: React.FC<CommonBannerProps> = ({ title, paragraph, image, titleClassName, paragraphClassName, barColor, backgroundColor }) => {
  const isMobile = useMobile();
  return (
    <Row className={styles.row}>
      <Col xs={24} sm={24} md={24} lg={24} xl={8}>
        <Space direction="vertical" size={isMobile ? 0 : 16} className={styles.leftSpace} style={{ backgroundColor }}>
          <Title className={`${titleClassName || styles.title}`}>{title}</Title>
          <Paragraph className={`${paragraphClassName || styles.paragraph}`}>{paragraph}</Paragraph>
        </Space>
        <div className={styles.background} style={{ backgroundColor: barColor }} />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={16}>
        <img alt="img" src={image} className={styles.image} />
      </Col>
    </Row>
  );
};

export default Banner;
