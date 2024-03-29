'use client';
import TitleColor, { IConfig } from '@/components/common/title-color';
import UsacoMedal from '@/components/common/usaco-medal';
import { apiConfig } from '@/config';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Carousel, Col, Row, Space, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import React, { CSSProperties, useRef, useState } from 'react';
import CarouselDots from './CarouselDots';
import styles from './index.module.scss';

const { Text } = Typography;
const { assessment } = apiConfig;

interface CarouselItemsProps {
  title: string;
  titleBar?: boolean;
  triangle?: boolean;
  desc: string[];
  banner: string;
  mbBanner: string;
  onClick: () => void;
  buttonText: string;
  buttonStyle?: CSSProperties;
  titleConfig?: IConfig[];
  descStyle?: CSSProperties;
}

const CarouselContent: React.FC = () => {
  const { format: t } = useLang();
  const router = useRouter();
  const sliderRef: any = useRef(null);
  const [current, setCurrent] = useState(0);
  const isMobile = useMobile();

  const goTo = (index: number) => {
    sliderRef.current?.goTo(index);
  };

  const carouselItems: CarouselItemsProps[] = [
    {
      title: 'Offers a range of courses from beginners to advanced levels like USACO Finalists, IOI',
      titleConfig: [
        {
          text: 'Offers a range of courses from beginners to advanced levels like USACO Finalists, IOI',
          color: '#172A88'
        }
      ],
      desc: ['Trusted by 2000+ students from 9 countries', 'Jour our dynamic learning community'],
      descStyle: {
        color: '#3F62DE',
        fontSize: isMobile ? 10 : 24
      },
      buttonText: 'Discover more',
      onClick: () => {
        router.push('/courses/all-courses');
      },
      banner: '/image/home/banner-pc-5.png',
      mbBanner: '/image/home/banner-mb-5.png',
      triangle: true
    },
    {
      title: '',
      desc: [],
      onClick: () => {
        router.push('/article-detail/144');
      },
      banner: '/image/home/banner-pc-4.jpg',
      mbBanner: '/image/home/banner-mb-4.png',
      buttonText: ''
    },
    {
      title: 'FREE Placement Test, Open to ALL！',
      titleConfig: [
        {
          text: 'FREE Placement Test, Open to ALL！',
          color: '#EB7411',
          fontSize: isMobile ? '20px' : '48px'
        }
      ],
      desc: ['Unlock Your Coding Potential', 'Placement Test Reveals Your Perfect Learning Path'],
      descStyle: {
        color: '#EB7411',
        fontSize: isMobile ? 10 : 20
      },
      buttonText: 'Test Now',
      buttonStyle: {
        backgroundColor: '#EB7411',
        color: '#FFF'
      },
      onClick: () => {
        window.open(assessment);
      },
      banner: '/image/home/banner-pc-2.png',
      mbBanner: '/image/home/banner-mb-2.png',
      titleBar: true
    },
    {
      title: t('Home.Banner3.title'),
      desc: [t('Home.Banner3.desc')],
      descStyle: {
        fontSize: isMobile ? 14 : 24
      },
      titleConfig: [
        {
          text: t('Home.Banner3.title.color'),
          color: '#FFA11',
          fontSize: isMobile ? '20px' : '48px'
        },
        {
          text: t('Home.Banner3.title.color2'),
          color: '#FFAD11',
          fontSize: isMobile ? '20px' : '48px'
        }
      ],
      buttonText: t('Home.Banner3.buttonText'),
      onClick: () => {
        router.push('/about-us/achievements');
      },
      banner: '/image/home/banner-pc-3.png',
      mbBanner: '/image/home/banner-mb-3.png'
    }
  ];

  return (
    <div className={styles.bannerContainer}>
      {!isMobile && <CarouselDots goTo={goTo} dots={carouselItems?.length} current={current} />}
      <Carousel dots={isMobile} speed={1000} autoplaySpeed={6000} autoplay ref={sliderRef} afterChange={(current) => setCurrent(current)}>
        {carouselItems.map((item: CarouselItemsProps) => (
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
                <Col xs={24} sm={24} md={24} lg={18}>
                  <Space direction="vertical" className={styles.space} size={16}>
                    <div className={styles.titleWithImg}>
                      <TitleColor className={styles.title} title={item?.title} config={item?.titleConfig || []} />
                      {item?.titleBar && (
                        <div className={styles.titleBar}>
                          <span className={styles.left} />
                          <span className={styles.right} />
                        </div>
                      )}
                    </div>
                    <Space direction="vertical" size={0}>
                      {item?.desc?.map((desc) => (
                        <div key={desc} className={styles.descriptionBox}>
                          {item?.titleBar && <span className={styles.dot} />}

                          {item?.triangle && <div className={styles.triangle} />}
                          <Text className={styles.description} style={item?.descStyle}>
                            {desc}
                          </Text>
                        </div>
                      ))}
                    </Space>
                    {item?.buttonText && (
                      <button className={styles.button} style={item?.buttonStyle} onClick={item?.onClick}>
                        {item?.buttonText}
                      </button>
                    )}
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
