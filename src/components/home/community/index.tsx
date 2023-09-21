'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Space, Typography, Carousel, Image } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import MaskCard from '@/components/common/mask-card';
import { useGetCommunity } from '@/apis/strapi-client/strapi';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const Community: React.FC = () => {
  const { lang, format: t } = useLang();
  const { data } = useGetCommunity();
  const xAlumni = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
  const router = useRouter();
  const generateMaskChildren = (title?: string, description?: string) => {
    return (
      <Space direction="vertical">
        <Title className={styles.maskCardTitle}>
          {title}
        </Title>
        <Paragraph
          ellipsis={{ rows: 5 }}
          className={styles.maskCardParagraph}
        >
          {description}
        </Paragraph>
      </Space>
    );
  };

  return (
    <div className={styles.xalumniContainer}>
      <div className={`${styles.xalumni} container`}>
        <div className={styles.info}>
          <Title className={styles.title}><span>{t('X_ALUMNI')}</span></Title>
          <Text className={styles.titleBg} />
          <Paragraph className={styles.paragraph}>
            {t('X_Alumni.Desc')}
          </Paragraph>
        </div>

        <div className={styles.carouselContainer}>
          <Carousel
            slidesToShow={4}
            slidesToScroll={1}
            swipeToSlide
            infinite
            autoplay
            dots={false}
            responsive={[
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {xAlumni?.map(item => {
              return (
                <div key={item?.id}>
                  <MaskCard
                    className={styles.maskCard}
                    bodyStyle={{
                      padding: 0,
                    }}
                    maskChildren={generateMaskChildren(getTransResult(
                      lang,
                      item?.attributes?.titleZh,
                      item?.attributes?.titleEn
                    ), getTransResult(
                      lang,
                      item?.attributes?.descriptionZh,
                      item?.attributes?.descriptionEn
                    ))}
                    maskBackGroundColor={'rgb(23 33 66 / 80%)'}
                    maskBorderRadius={12}
                  >
                    <Image
                      src={item?.attributes?.img?.data?.attributes?.url}
                      alt="image"
                      preview={false}
                      className={styles.image}
                    />
                    <Title className={styles.cardTitle}>{getTransResult(
                      lang,
                      item?.attributes?.titleZh,
                      item?.attributes?.titleEn
                    )}
                    </Title>
                  </MaskCard>
                </div>
              );
            })}
          </Carousel>
        </div>

        <button
          className={styles.moreAlumniInfo}
          onClick={() => router.push('/about-us/x-alumni')}
        >
          {t('MoreAlumniInformation')}
          <AppstoreAddOutlined className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Community;
