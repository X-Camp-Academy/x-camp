import { useGetUSACOSpotlight } from '@/apis/strapi-client/strapi';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import { LeftOutlined, RightOutlined, setTwoToneColor } from '@ant-design/icons';
import { Button, Card, Carousel, Space, Typography } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import React, { useRef } from 'react';
import styles from './index.module.scss';

const { Title, Text } = Typography;

const USACOSpotlight: React.FC = () => {
  const { lang, format: t } = useLang();
  const carouselEL = useRef<CarouselRef>(null);
  setTwoToneColor('#D46B14');
  const { data: awards } = useGetUSACOSpotlight();

  return (
    <div className={styles.USACOSpotlightContainer}>
      <div className={`${styles.USACOSpotlight} container`}>
        <Space direction="vertical" align="start">
          <Title className={styles.title}>{t('USACOSpotlight')}</Title>
          <Text className={styles.intro}>{t('USACOSpotlight.Desc')}</Text>
        </Space>

        <div className={styles.medalIntro}>
          <Button
            type="primary"
            shape="circle"
            className={styles.prev}
            onClick={() => {
              carouselEL?.current?.prev();
            }}
            icon={<LeftOutlined />}
          />
          <Carousel
            ref={carouselEL}
            dots={false}
            slidesToShow={4}
            slidesToScroll={1}
            swipeToSlide
            infinite
            responsive={[
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              }
            ]}
          >
            {awards?.map((item) => {
              return (
                <div key={item?.id} className={styles.cardContainer}>
                  <Card
                    style={{
                      backgroundImage: `url(${item?.attributes?.avatar?.data?.attributes?.url})`
                    }}
                    className={styles.colCard}
                  >
                    <Space direction="vertical" className={styles.infoContainer}>
                      <Title className={styles.cardTitle}>{getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)}</Title>
                      <Text className={styles.cardText}>{getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)}</Text>
                    </Space>
                  </Card>
                </div>
              );
            })}
          </Carousel>

          <Button
            type="primary"
            shape="circle"
            className={styles.next}
            onClick={() => {
              carouselEL?.current?.next();
            }}
            icon={<RightOutlined />}
          />
        </div>
      </div>
    </div>
  );
};

export default USACOSpotlight;
