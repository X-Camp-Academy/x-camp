'use client';
import TitleColor from '@/components/common/title-color';
import { useLang } from '@/hoc/with-intl/define';
import { addAnimate, removeAnimate } from '@/utils';
import { getTransResult } from '@/utils/public';
import { Card, Col, Image, Row, Space, Typography } from 'antd';
import 'hover.css';
import React, { useRef } from 'react';
import styles from './index.module.scss';

const { Paragraph, Text } = Typography;
const WhyXCamp: React.FC = () => {
  const { format: t, lang } = useLang();
  const aboutContents = [
    {
      icon: '/image/home/icon-why-book.png',
      title: t('Home.WhyXCamp.title1'),
      desc: t('Home.WhyXCamp.Desc1'),
      url: '/courses',
      ref: useRef<HTMLDivElement>(null)
    },
    {
      icon: '/image/home/icon-why-concat.png',
      title: t('Home.WhyXCamp.title2'),
      desc: t('Home.WhyXCamp.Desc2'),
      url: '/about-us/introduction/#faculty',
      ref: useRef<HTMLDivElement>(null)
    },
    {
      icon: '/image/home/icon-why-house.png',
      title: t('Home.WhyXCamp.title3'),
      desc: t('Home.WhyXCamp.Desc3'),
      url: '/#community',
      ref: useRef<HTMLDivElement>(null)
    },
    {
      icon: '/image/home/icon-why-track.png',
      title: t('Home.WhyXCamp.title4'),
      desc: t('Home.WhyXCamp.Desc4'),
      url: '/courses',
      ref: useRef<HTMLDivElement>(null)
    }
  ];
  return (
    <div className={styles.aboutXCampContainer}>
      <div className={`${styles.aboutXCamp} container`}>
        <Space direction="vertical" align="center" className={styles.aboutXCampTop}>
          <TitleColor title={t('AboutX-Camp')} config={[{ text: t('AboutX-Camp_Color') }]} className={styles.title} />
          <Text className={getTransResult(lang, styles.zhTitleBg, styles.enTitleBg)} />
          <Paragraph className={styles.paragraph}>{t('Home.WhyXCamp.Desc')}</Paragraph>
        </Space>
        <Row className={styles.row} gutter={16} justify="center" align="middle">
          {aboutContents?.map((item) => {
            return (
              <Col key={item?.icon} xs={24} sm={24} md={12} lg={6}>
                <Card
                  className={styles.card}
                  bodyStyle={{
                    borderRadius: 8
                  }}
                  ref={item?.ref}
                  onMouseEnter={() => addAnimate(item?.ref)}
                  onMouseLeave={() => removeAnimate(item?.ref)}
                >
                  <a href={item?.url}>
                    <Space direction="vertical">
                      <Image src={item?.icon} alt="icon" preview={false} className={styles.cardIcon} />
                      <Paragraph ellipsis={{ rows: 2 }} className={styles.cardTitle}>
                        {item?.title}
                      </Paragraph>
                      <Paragraph ellipsis={{ rows: 3, tooltip: item?.desc }} className={styles.cardParagraph}>
                        {item?.desc}
                      </Paragraph>
                    </Space>
                  </a>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default WhyXCamp;
