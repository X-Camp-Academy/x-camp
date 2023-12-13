'use client';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { getTransResult } from '@/utils/public';
import { Col, Image, Row, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const Partners: React.FC = () => {
  const isMobile = useMobile();
  const { format: t, lang } = useLang();

  const topImages = [
    [
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
        link: 'https://www.gsyomusic.org/'
      }
    ],
    [
      {
        src: '/image/home/partners-4.png',
        link: 'https://www.teamscode.org/'
      },
      {
        src: '/image/home/partners-5.png',
        link: 'https://lit.lhsmathcs.org/'
      },
      {
        src: '/image/home/partners-6.png',
        link: 'https://www.harkerprogrammingclub.org/'
      }
    ]
  ];

  const bottomImages = [
    {
      src: '/image/home/partners-7.png',
      link: 'https://www.xinyoudui.com/'
    },
    {
      src: '/image/home/partners-8.png',
      link: 'https://algirlithm.org/'
    },
    {
      src: '/image/home/partners-9.png/',
      link: 'https://www.7edu.org/'
    }
  ];

  return (
    <div className={styles.partners}>
      <Space direction="vertical" align="center" className="container">
        <Title className={styles.title}>{t('Partners')}</Title>
        <Text className={getTransResult(lang, styles.zhTitleBg, styles.enTitleBg)} />
        <Paragraph className={styles.paragraph}>{t('Partners.Desc')}</Paragraph>
        <Row gutter={isMobile ? [16, 0] : [16, 16]} className={styles.row}>
          {topImages?.map((images, index) => (
            <Col xs={24} sm={24} md={24} lg={12} key={images[index]?.src}>
              <Space className={styles.space}>
                {images?.map((image) => (
                  <a href={image?.link} key={image?.link}>
                    <Image alt="" src={image?.src} preview={false} className={styles.logo} />
                  </a>
                ))}
              </Space>
            </Col>
          ))}
        </Row>
        <Row gutter={isMobile ? [16, 0] : [16, 16]} className={styles.row}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Space className={styles.space}>
              {bottomImages?.map((item) => (
                <a href={item?.link} key={item?.src}>
                  <Image alt="" src={item?.src} preview={false} className={styles.logo} />
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
