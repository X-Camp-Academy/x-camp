'use client';
import { useGetCommunity } from '@/apis/strapi-client/strapi';
import MaskCard from '@/components/common/mask-card';
import TitleColor from '@/components/common/title-color';
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
          <TitleColor
            title={t('Home.Community.Title')}
            config={[
              {
                text: t('Home.Community.Title.Color'),
                color: '#FFAD11'
              }
            ]}
            className={styles.title}
          />
          <Text className={getTransResult(lang, styles.zhTitleBg, styles.enTitleBg)} />
          <Paragraph className={styles.paragraph} style={{ marginBottom: 0, marginTop: 20 }}>
            {t('Home.Community.Desc1')}
          </Paragraph>
          <Paragraph className={styles.paragraph}>{t('Home.Community.Desc2')}</Paragraph>
        </div>

        <div className={styles.carouselContainer}>
          <Carousel
            slidesToShow={4}
            slidesToScroll={1}
            swipeToSlide
            infinite
            autoplay={false}
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
                      padding: 0,
                      borderRadius: 8
                    }}
                    maskChildren={generateMaskChildren(
                      getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn),
                      getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)
                    )}
                    maskBackGroundColor={'rgb(23 33 66 / 80%)'}
                    maskBorderRadius={8}
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
