'use client';
import React from 'react';
import { Space, Row, Col, Card, Image, Typography } from 'antd';
import styles from './Results.module.scss';
import { useGetAboutUsIntroArticle } from '@/apis/strapi-client/strapi';
import { getTransResult } from '@/utils/public';
import { useLang } from '@/hoc/with-intl/define';

const { Title, Paragraph, Text } = Typography;

const Results: React.FC = () => {
  const { lang } = useLang();
  const { data: introArticle } = useGetAboutUsIntroArticle();
  return (
    <div className="container">
      {introArticle?.map((item, index) => (
        <Space
          key={index}
          direction="vertical"
          size={16}
          className={styles.space}
        >
          <Title className={styles.title}>
            {getTransResult(
              lang,
              item?.attributes?.titleZh,
              item?.attributes?.titleEn
            )}
          </Title>
          <Paragraph className={styles.paragraph}>
            {getTransResult(
              lang,
              item?.attributes?.descriptionZh,
              item?.attributes?.descriptionEn
            )}
          </Paragraph>
          <Row gutter={16} className={styles.row}>
            <Col xs={24} sm={24} md={8}>
              <Image
                alt="image"
                src={item?.attributes?.img1?.data?.attributes?.url}
                preview={false}
                className={styles.image}
              />
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Image
                alt="image"
                src={item?.attributes?.img2?.data?.attributes?.url}
                preview={false}
                className={styles.image}
              />
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Image
                alt="image"
                src={item?.attributes?.img3?.data?.attributes?.url}
                preview={false}
                className={styles.image}
              />
            </Col>
          </Row>
        </Space>
      ))}

      <Space></Space>
    </div>
  );
};

export default Results;
