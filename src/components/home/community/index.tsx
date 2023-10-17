'use client';
import { useGetCommunity } from '@/apis/strapi-client/strapi';
import MaskCard from '@/components/common/mask-card';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import { Carousel, Image, Space, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const Community: React.FC = () => {
  const { lang, format: t } = useLang();
  const { hash } = window.location;
  const { data } = useGetCommunity();
  const community = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
  const router = useRouter();
  const generateMaskChildren = (title?: string, description?: string) => {
    return (
      <Space direction="vertical">
        <Title className={styles.maskCardTitle}>{title}</Title>
        <Paragraph ellipsis={{ rows: 5 }} className={styles.maskCardParagraph}>
          {description}
        </Paragraph>
      </Space>
    );
  };

  const scrollIntoView = (id: string) => {
    const dom = document.getElementById(id);
    dom?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    scrollIntoView(hash.slice(1));
  }, [hash]);
  return (
    <div className={styles.communityContainer} id="community">
      <div className={`${styles.community} container`}>
        <div className={styles.info}>
          <Title className={styles.title}>
            <span>{t('Home.Community.Title')}</span>
          </Title>
          <Text className={styles.titleBg} />
          <Paragraph className={styles.paragraph}>{t('Home.Community.Desc1')}</Paragraph>
          <Paragraph className={styles.paragraph}>{t('Home.Community.Desc2')}</Paragraph>
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
            {community?.map((item) => {
              return (
                <div key={item?.id}>
                  <MaskCard
                    className={styles.maskCard}
                    bodyStyle={{
                      padding: 0
                    }}
                    maskChildren={generateMaskChildren(
                      getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn),
                      getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)
                    )}
                    maskBackGroundColor={'rgb(23 33 66 / 80%)'}
                    maskBorderRadius={12}
                  >
                    <Image src={item?.attributes?.img?.data?.attributes?.url} alt="image" preview={false} className={styles.image} />
                    <Title className={styles.cardTitle}>{getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)}</Title>
                  </MaskCard>
                </div>
              );
            })}
          </Carousel>
        </div>

        {/* ! TODO: 先隐藏 */}
        {/* <button className={styles.moreAlumniInfo} onClick={() => router.push('/about-us/x-alumni')}>
          {t('MoreAlumniInformation')}
          <AppstoreAddOutlined className={styles.icon} />
        </button> */}
      </div>
    </div>
  );
};

export default Community;
