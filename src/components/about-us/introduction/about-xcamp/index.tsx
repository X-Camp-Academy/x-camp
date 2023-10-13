'use client';
import { useMobile } from '@/utils';
import { Image, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const AboutXCamp: React.FC = () => {
  const isMobile = useMobile();
  const icons = [
    {
      src: '/image/about-us/about-xcamp.png',
      title: 'Python',
      desc: 'Supportive, inclusive'
    },
    {
      src: '/image/about-us/about-xcamp.png',
      title: 'USACO',
      desc: 'Supportive, inclusive'
    },
    {
      src: '/image/about-us/about-xcamp.png',
      title: 'Java',
      desc: 'Supportive, inclusive'
    },
    {
      src: '/image/about-us/about-xcamp.png',
      title: 'APCS',
      desc: 'Supportive, inclusive'
    }
  ];
  return (
    <div className={`${styles.aboutXcamp} container`}>
      <Title className={styles.title}>
        About <span>X-Camp</span>
      </Title>
      <Paragraph className={styles.paragraph}>Over the past 5 years, more than 200 X-Camp students have qualified for the USACO Silver division and above</Paragraph>

      <Space direction={isMobile ? 'vertical' : 'horizontal'} size={48} className={styles.space}>
        <Image preview={false} alt="" src={'/image/courses/camps-3.png'} className={styles.leftImage} />
        <Space direction="vertical" size={32} className={styles.rightSpace}>
          <Title className={styles.rightTitle}>X-Camp is a programming education company</Title>
          <Paragraph className={styles.rightParagraph}>{"It's a Silicon Valley-based coding institute, offers beginner-level to IOI level's programming classes to 5-12th grade students."}</Paragraph>
          <div className={styles.iconsBox}>
            {icons?.map((item) => (
              <Space direction="vertical" key={item?.title}>
                <Image preview={false} alt="" src={item?.src} />
                <Text className={styles.iconTitle}>{item?.title}</Text>
                <Text className={styles.iconDesc}>{item?.desc}</Text>
              </Space>
            ))}
          </div>
        </Space>
      </Space>
    </div>
  );
};

export default AboutXCamp;
