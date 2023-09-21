'use client';
import React from 'react';
import { Space, Typography, Row, Col, Image } from 'antd';
import { useLang } from '@/hoc/with-intl/define';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const Partners: React.FC = () => {
  const { format: t } = useLang();
  const topImages = [
    {
      src: '/image/home/partners-1.png',
      link: 'https://calico.cs.berkeley.edu/'
    },
    {
      src: '/image/home/partners-2.png',
      link: 'https://www.stanfordacm.org/proco'
    },
    {
      src: '/image/home/partners-3.png',
      link: 'https://www.stanfordacm.org/proco'
    }
  ];
  const bottomImages = [
    {
      src: '/image/home/partners-4.png',
      style: styles.bottomLeftImage,
      link: 'https://www.teamscode.org/'
    },
    {
      src: '/image/home/partners-5.png',
      style: styles.bottomCenterImage,
      link: 'https://lit.lhsmathcs.org/'
    },
    {
      src: '/image/home/partners-6.png',
      style: styles.bottomRightImage,
      link: 'https://www.harkerprogrammingclub.org/'
    },
  ];

  return (
    <div className={styles.partners}>
      <Space direction="vertical" align="center">
        <Title className={styles.title}>{t('Partners')}</Title>
        <Text className={styles.titleBg} />
        <Paragraph className={styles.paragraph}>{t('Partners.Desc')}</Paragraph>
        <Row>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Space className={styles.space}>
              {topImages?.map((item) => (
                <a href={item?.link} key={item?.src}>
                  <Image
                    alt=""
                    src={item?.src}
                    preview={false}
                    className={styles.topImage}
                  />
                </a>
              ))}
            </Space>
          </Col>
          <Col xs={24} sm={24} md={24} lg={{ span: 10, offset: 2 }}>
            <Space className={styles.space}>
              {bottomImages?.map(item => (
                <a href={item?.link} key={item?.src}>
                  <Image
                    alt=""
                    src={item?.src}
                    preview={false}
                    className={item?.style}
                  />
                </a>

              ))}
            </Space>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default Partners;
