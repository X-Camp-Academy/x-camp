import { Col, Image, Row, Space, Typography } from 'antd';
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
  return (
    <Row className={styles.row}>
      <Col xs={24} sm={24} md={24} lg={24} xl={10}>
        <Space direction="vertical" className={styles.leftSpace} style={{ backgroundColor }}>
          <Title className={`${titleClassName || styles.title}`}>{title}</Title>
          <Paragraph className={`${paragraphClassName || styles.paragraph}`}>{paragraph}</Paragraph>
        </Space>
        <div className={styles.background} style={{ backgroundColor: barColor }} />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={14}>
        <Image alt="img" preview={false} src={image} className={styles.image} />
      </Col>
    </Row>
  );
};

export default Banner;
