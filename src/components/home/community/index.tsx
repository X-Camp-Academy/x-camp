'use client';
import { useGetCommunity } from '@/apis/strapi-client/strapi';
import MaskCard from '@/components/common/mask-card';
import TitleColor from '@/components/common/title-color';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { getTransResult } from '@/utils/public';
import { Carousel, Space, Typography, Row, Col } from 'antd';
import React from 'react';
import styles from './index.module.scss';

interface CirclesProps {
  number: string,
  numberText: string,
  backgroundColor: string,
  style: React.CSSProperties;
}

const { Title, Paragraph, Text } = Typography;

const Community: React.FC = () => {
  const isMobile = useMobile();
  const { lang, format: t } = useLang();
  const { data } = useGetCommunity();
  const community = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
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

  const circles: CirclesProps[] = [
    {
      number: '2000+',
      numberText: 'students',
      backgroundColor: '#FFD600',
      style: {
        marginBottom: -48,
        marginLeft: -16
      }
    },
    {
      number: '600+',
      numberText: 'current learners',
      backgroundColor: '#FFAD11',
      style: {
        marginBottom: -48,
        marginLeft: 0
      }
    },
    {
      number: '250+',
      numberText: 'schools',
      backgroundColor: '#D46B14',
      style: {
        marginBottom: -48,
        marginLeft: -16
      }
    },
  ];
  return (
    <div className={styles.communityContainer} id="#community">
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
          <Paragraph className={styles.paragraph} style={{ marginBottom: 0, marginTop: isMobile ? 4 : 20 }}>
            {t('Home.Community.Desc1')}
            {lang === 'en' && <br />}
            {t('Home.Community.Desc2')}
            {lang === 'en' && <br />}
            {t('Home.Community.Desc3')}
            {lang === 'en' && <br />}
          </Paragraph>
          <Paragraph className={styles.paragraph}>{t('Home.Community.Desc4')}</Paragraph>
        </div>

        <Row>
          {
            circles?.map(item => (
              <Col key={item?.backgroundColor} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }}>
                <Space direction="vertical">
                  <div className={styles.circle} style={{ backgroundColor: item?.backgroundColor, ...item?.style }} />
                  <div className={styles.number}>{item?.number}</div>
                  <span className={styles.numberText}>{item?.numberText}</span>
                </Space>
              </Col>
            ))
          }
        </Row>

        <div className={styles.carouselContainer}>
          <Carousel
            slidesToShow={4}
            slidesToScroll={1}
            swipeToSlide
            infinite
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
                      borderRadius: 8,
                      height: '100%'
                    }}
                    maskChildren={generateMaskChildren(
                      getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn),
                      getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)
                    )}
                    maskBackGroundColor={'rgb(23 33 66 / 80%)'}
                    maskBorderRadius={8}
                  >
                    <img src={item?.attributes?.img?.data?.attributes?.url} alt="image" className={styles.image} />
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
