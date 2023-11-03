'use client';
import TitleColor, { IConfig } from '@/components/common/title-color';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Carousel, Col, Row, Space, Typography } from 'antd';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React, { CSSProperties, useRef, useState } from 'react';
import CarouselDots from './CarouselDots';
import styles from './index.module.scss';

const { Text } = Typography;

const UsacoMedal = dynamic(() => import('@/components/common/usaco-medal'));

interface IItem {
  title: string;
  desc: string[];
  banner: string;
  mbBanner: string;
  onClick: () => void;
  date: string[];
  buttonText: string;
  titleConfig?: IConfig[];
  descStyle?: CSSProperties;
}

const CarouselContent: React.FC = () => {
  const { format: t, lang } = useLang();
  const router = useRouter();
  const sliderRef: any = useRef(null);
  const [current, setCurrent] = useState(0);
  const isMobile = useMobile();

  const goTo = (index: number) => {
    sliderRef.current?.goTo(index);
  };

  const carouselItems: IItem[] = [
    {
      title: t('WeeklyOpenHouse'),
      titleConfig: [
        {
          text: t('WeeklyOpenHouse.color'),
          color: '#FFAD11'
        }
      ],
      desc: [t('Home.Banner1.Desc1'), t('Home.Banner1.Desc2'), t('Home.Banner1.Desc3')],
      descStyle: {
        color: '#FFF'
      },
      onClick: () => {
        window.open('https://us02web.zoom.us/j/89284761432?pwd=VXJvQjRPN3I4TXhlUk9SdXM0KzJqQT09');
      },
      date: [t('Home.Banner1.Date1'), t('Home.Banner1.Date2')],
      banner: '/image/home/banner-pc-1.png',
      mbBanner: '/image/home/banner-mb-1.png',
      buttonText: t('ZoomLink')
    },
    {
      title: t('USACO.enhancement.register'),
      titleConfig: [
        {
          text: t('USACO.enhancement.register.color'),
          color: '#FFAD11'
        }
      ],
      desc: [t('Home.Banner2.Desc1'), t('Home.Banner2.Desc2'), t('Home.Banner2.Desc3')],
      onClick: () => {
        window.open('https://tinyurl.com/XCamp23-24FallUSACO');
      },
      date: [t('Home.Banner2.Date')],
      banner: '/image/home/banner-pc-2.png',
      mbBanner: '/image/home/banner-mb-2.png',
      buttonText: t('VideoRecap')
    },
    {
      title: t('Home.Banner3.title'),
      desc: [t('Home.Banner3.desc')],
      titleConfig: [
        {
          text: t('Home.Banner3.title.color'),
          color: '#FFAD11'
        },
        {
          text: t('Home.Banner3.title.color2'),
          color: '#FFAD11'
        }
      ],
      onClick: () => {
        router.push('/about-us/achievements');
      },
      date: [''],
      banner: '/image/home/banner-pc-3.png',
      mbBanner: '/image/home/banner-mb-3.png',
      buttonText: t('Home.Banner3.buttonText')
    }
  ];

  return (
    <div className={styles.bannerContainer}>
      {!isMobile && <CarouselDots goTo={goTo} dots={3} current={current} />}
      <Carousel autoplay dots={isMobile} ref={sliderRef} afterChange={(current) => setCurrent(current)}>
        {carouselItems.map((item: IItem) => (
          <div className={styles.content} key={item?.title} onClick={item?.onClick}>
            {isMobile ? (
              <div
                className={styles.background}
                style={{
                  background: `url('${item?.mbBanner}') no-repeat`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center center'
                }}
              />
            ) : (
              <div
                className={styles.background}
                style={{
                  background: `url('${item?.banner}') no-repeat`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top 40% center'
                }}
              />
            )}
            <div className={`container ${styles.info}`}>
              <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <Space direction="vertical" className={styles.space} size={20}>
                    <TitleColor className={styles.title} title={item?.title} config={item?.titleConfig || []} />
                    <Space direction="vertical" size={0}>
                      {item?.desc?.map((desc) => (
                        <Text className={styles.description} key={desc} style={item?.descStyle}>
                          {desc}
                        </Text>
                      ))}
                    </Space>
                    <button className={styles.button} onClick={item?.onClick}>
                      {item?.buttonText}
                    </button>
                    <Space direction="vertical">
                      {item?.date?.map((date) => (
                        <Text className={styles.date} key={date} style={item?.descStyle}>
                          {date}
                        </Text>
                      ))}
                    </Space>
                  </Space>
                </Col>
              </Row>
            </div>
          </div>
        ))}
      </Carousel>
      <UsacoMedal style={{ backgroundColor: '#FFFFFF', boxShadow: '0 6px 14px -2px rgb(216 216 216 / 30%)' }} spacePaddingTop={0} showTitle={false} />
    </div>
  );
};

export default CarouselContent;
