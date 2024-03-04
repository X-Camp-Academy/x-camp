'use client';
import { GetReviews } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { formatTimezone, getTransResult } from '@/utils/public';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Carousel, Rate, Space, Typography } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import React, { useRef } from 'react';
import styles from './index.module.scss';

const { Paragraph, Text } = Typography;

const cx = classNames.bind(styles);
interface ReviewsProps {
  className?: string;
  reviewsData?: StrapiResponseDataItem<GetReviews>[] | undefined;
}

const Reviews: React.FC<ReviewsProps> = ({ className = '', reviewsData }) => {
  const { lang } = useLang();
  const carouselRef = useRef<CarouselRef>(null);
  const isMobile = useMobile();
  const onPrev = () => {
    carouselRef?.current?.prev();
  };
  const onNext = () => {
    carouselRef?.current?.next();
  };

  return (
    <div className={cx(className, styles.reviewsContainer)}>
      {reviewsData && reviewsData?.length < 3 ? (
        <div className={cx(styles.reviews, 'container')} style={{ display: 'flex', flexDirection: 'row' }}>
          {reviewsData?.map((item) => {
            const reviews = item?.attributes;
            const { dayjsTime } = formatTimezone(reviews?.datetime);
            return (
              <div key={item?.id} className={styles.reviewsContainer}>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Text className={styles.reviewsTitle}>{getTransResult(lang, reviews?.titleZh, reviews?.titleEn)}</Text>
                  <Rate disabled defaultValue={reviews?.score} />
                  <Paragraph
                    className={styles.reviewsParagraph}
                    ellipsis={{
                      rows: 5
                    }}
                  >
                    {getTransResult(lang, reviews?.descriptionZh, reviews?.descriptionEn)}
                  </Paragraph>
                  <Text className={styles.reviewsDate}>{dayjs(dayjsTime).format('YYYY-MM-DD')}</Text>
                </Space>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={cx(styles.reviews, 'container')}>
          <div className={styles.reviewsBox}>
            {!isMobile && (
              <>
                <Button type="primary" shape="circle" className={styles.prev} onClick={onPrev}>
                  <LeftOutlined />
                </Button>
                <Button type="primary" shape="circle" className={styles.next} onClick={onNext}>
                  <RightOutlined />
                </Button>
              </>
            )}
            <Carousel
              ref={carouselRef}
              dots={false}
              slidesToShow={3}
              slidesToScroll={1}
              swipeToSlide
              autoplay
              infinite
              responsive={[
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]}
            >
              {reviewsData?.map((item) => {
                const reviews = item?.attributes;
                const { dayjsTime } = formatTimezone(reviews?.datetime);
                return (
                  <div key={item?.id} className={styles.reviewsContainer}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Text className={styles.reviewsTitle}>{getTransResult(lang, reviews?.titleZh, reviews?.titleEn)}</Text>
                      <Rate disabled defaultValue={reviews?.score} />
                      <Paragraph
                        className={styles.reviewsParagraph}
                        ellipsis={{
                          rows: 5
                        }}
                      >
                        {getTransResult(lang, reviews?.descriptionZh, reviews?.descriptionEn)}
                      </Paragraph>
                      <Text className={styles.reviewsDate}>{dayjs(dayjsTime).format('YYYY-MM-DD')}</Text>
                    </Space>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
