'use client';
import TitleColor, { IConfig } from '@/components/common/title-color';
import { useLang } from '@/hoc/with-intl/define';
import { Carousel, Col, Image, Row, Space, Typography } from 'antd';
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
  backgroundUrl: string;
  onClick: () => void;
  date: string[];
  buttonText: string;
  titleConfig?: IConfig[];
  descStyle?: CSSProperties;
}

const CarouselContent: React.FC = () => {
  const { format: t } = useLang();
  const router = useRouter();
  const sliderRef: any = useRef(null);
  const [current, setCurrent] = useState(0);

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
      desc: [t('Home.Banner1.Desc1'), t('Home.Banner1.Desc2'), t('Home.Banner1.Desc3')],
      descStyle: {
        color: '#FFF'
      },
      onClick: () => {
        window.open('https://us02web.zoom.us/j/89284761432?pwd=VXJvQjRPN3I4TXhlUk9SdXM0KzJqQT09');
      },
      date: [t('Home.Banner1.Date1'), t('Home.Banner1.Date2')],
      backgroundUrl: '/image/home/banner-1.png',
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
      backgroundUrl: '/image/home/banner-2.png',
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
      backgroundUrl: '/image/home/banner-3.png',
      buttonText: t('Home.Banner3.buttonText')
    }
  ];

  return (
    <div className={styles.bannerContainer}>
      <CarouselDots goTo={goTo} dots={3} current={current} />
      <Carousel autoplay dots={false} ref={sliderRef} afterChange={(current) => setCurrent(current)}>
        {carouselItems.map((item: IItem) => (
          <div className={styles.content} key={item?.title} onClick={item?.onClick}>
            <Image alt="" preview={false} className={styles.background} src={item?.backgroundUrl} width={'100%'} />
            <div className={`container ${styles.info}`}>
              <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <Space direction="vertical" className={styles.space} size={20}>
                    <TitleColor className={styles.title} title={item?.title} config={item?.titleConfig || []} />
                    <Space direction="vertical">
                      {item?.desc?.map((desc, index) => {
                        return index === 0 ? (
                          <Text className={styles.description} key={desc} style={item?.descStyle}>
                            {desc}
                          </Text>
                        ) : (
                          <Text className={styles.description} key={desc} style={item?.descStyle}>
                            &quot;{desc}&quot;
                          </Text>
                        );
                      })}
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
      <UsacoMedal showTitle={false} />
    </div>
  );
};

export default CarouselContent;
