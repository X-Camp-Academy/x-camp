'use client';
import React, { CSSProperties, useRef } from 'react';
import dynamic from 'next/dynamic';
import {
  Carousel,
  Space,
  Typography,
  Row,
  Col,
} from 'antd';
import { useLang } from '@/hoc/with-intl/define';
import CarouselDots from './CarouselDots';
import TitleColor, { IConfig } from '@/components/common/title-color';
import styles from './index.module.scss';

const { Paragraph, Text } = Typography;

const UsacoMedal = dynamic(() => import('@/components/common/usaco-medal'));

interface IItem {
  title: string,
  desc: string[],
  backgroundUrl: string,
  onClick: () => void,
  date: string,
  buttonText: string,
  titleConfig?: IConfig[],
  descStyle?: CSSProperties
}

const CarouselContent: React.FC = () => {
  const { format: t } = useLang();
  const sliderRef: any = useRef(null);

  const goTo = (index: number) => {
    sliderRef.current?.goTo(index);
  };

  const carouselItems: IItem[] = [
    {
      title: t('WeeklyOpenHouse'),
      titleConfig: [
        {
          text: t('WeeklyOpenHouse'),
          color: '#FFAD11'
        }
      ],
      desc: [
        t('OpenHouse.Dec1'),
        t('OpenHouse.Dec2'),
      ],
      descStyle: {
        color: '#FFF'
      },
      onClick: () => { window.open('https://us02web.zoom.us/j/89284761432?pwd=VXJvQjRPN3I4TXhlUk9SdXM0KzJqQT09'); },
      date: t('OpenTime'),
      backgroundUrl: '/image/about-us/banner-joinUs.png',
      buttonText: t('ZoomLink')
    }, {
      title: t('USACO.enhancement.register'),
      titleConfig: [
        {
          text: t('USACO.enhancement.register.color'),
          color: '#FFAD11'
        }
      ],
      desc: [
        t('USACO.mock.test'),
        t('USACO.live.lecture'),
      ],
      onClick: () => { window.open('https://tinyurl.com/XCamp23-24FallUSACO'); },
      date: t('USACO.no.class'),
      backgroundUrl: '/image/home/banner-2.png',
      buttonText: t('VideoRecap')
    }, {
      title: t('Home.Banner3.title'),
      desc: [
        t('Home.Banner3.desc')
      ],
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
      onClick: () => { window.open('https://docs.google.com/forms/d/e/1FAIpQLScNm1Mf4lgvdXUObuJu3wl-_wEcYU9N8ao6PGv8RnANNGE_xw/viewform?usp=sf_link'); },
      date: '',
      backgroundUrl: '/image/home/banner-3.png',
      buttonText: t('Home.Banner3.buttonText')
    }];

  return (
    <div className={styles.bannerContainer}>
      <CarouselDots goTo={goTo} dots={3} />
      <Carousel autoplay={false} dots={false} ref={sliderRef}>
        {
          carouselItems.map((item: IItem) => (
            <div className={styles.content} key={item?.title}>
              <div className={styles.background} style={{ background: `url("${item?.backgroundUrl}") center no-repeat`, backgroundSize: 'cover' }} />
              <div className={`container ${styles.info}`}>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={12}>
                    <Space direction="vertical" className={styles.space} size={20}>
                      <TitleColor className={styles.title} title={item?.title} config={item?.titleConfig || []} />
                      <div>
                        {
                          item?.desc?.map(desc => (
                            <Paragraph className={styles.paragraph} key={desc} style={item?.descStyle}>
                              {desc}
                            </Paragraph>))
                        }
                      </div>
                      <button className={styles.button} onClick={item?.onClick}>{item?.buttonText}</button>
                      <Text className={styles.date} style={item?.descStyle}>{item?.date}</Text>
                    </Space>
                  </Col>
                </Row>
              </div>
            </div>))
        }
      </Carousel>
      <UsacoMedal showTitle={false} />
    </div>
  );
};

export default CarouselContent;
