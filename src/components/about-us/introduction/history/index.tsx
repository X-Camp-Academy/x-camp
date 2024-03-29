import MaskCard from '@/components/common/mask-card';
import TitleColor from '@/components/common/title-color';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Col, Image, Row, Space, Typography } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;

const History: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  const isiPad = useMobile('lg');
  const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017];
  const currentYear = dayjs().year();
  const generateMaskChildren = (title?: number, description?: string) => {
    return (
      <Space direction="vertical" align="start">
        <Title className={styles.maskCardTitle}>{title}</Title>
        <Paragraph className={styles.maskCardParagraph} ellipsis={{ rows: isMobile ? 8 : 3, tooltip: description }}>
          {description}
        </Paragraph>
      </Space>
    );
  };

  const historyCards = [
    {
      title: 2023,
      desc: t('History.2023'),
      url: '/image/about-us/2023@2x.png'
    },
    {
      title: 2022,
      desc: t('History.2022'),
      url: '/image/about-us/2022@2x.png'
    },
    {
      title: 2021,
      desc: t('History.2021'),
      url: '/image/about-us/2021@2x.png'
    },
    {
      title: 2020,
      desc: t('History.2020'),
      url: '/image/about-us/2020@2x.png'
    },
    {
      title: 2019,
      desc: t('History.2019'),
      url: '/image/about-us/2019@2x.png'
    },
    {
      title: 2018,
      desc: t('History.2018'),
      url: '/image/about-us/2018@2x.png'
    },
    {
      title: 2017,
      desc: t('History.2017'),
      url: '/image/about-us/2017@2x.png'
    }
  ];

  const sliceData = () => {
    return isiPad ? historyCards : historyCards?.slice(0, 3);
  };
  return (
    <div className={styles.historyContainer}>
      <div className="container">
        <TitleColor
          title={t('HistoryOfXCamp.Title')}
          config={[
            {
              text: t('HistoryOfXCamp.Title.Color'),
              color: '#FFAD11'
            }
          ]}
          className={styles.title}
        />
        <Paragraph className={styles.paragraph}>{t('HistoryOfXCamp.Desc')}</Paragraph>
        {/* 
        <div className={styles.timeline}>
          {years?.map((item) => (
            <Space direction="vertical" key={item}>
              <i className={item === currentYear ? styles.activeTimeLineIcon : styles.timelineIcon} />
              <span className={item === currentYear ? styles.activeTimelineText : styles.timelineText}>{item}</span>
            </Space>
          ))}
          <div className={styles.line} />
        </div> */}

        <Row gutter={isMobile ? [0, 24] : [48, 24]} className={styles.timeImage} style={{ display: 'flex', justifyContent: 'space-between' }}>
          {sliceData()?.map((item) => (
            <Col xs={24} sm={24} md={12} lg={6} key={item?.title} className={styles.col}>
              <MaskCard
                className={styles.maskCard}
                styles={{
                  body: {
                    padding: 0,
                    borderRadius: 8
                  }
                }}
                maskChildren={generateMaskChildren(item?.title, item?.desc)}
                maskBackGroundColor={'rgb(23 33 66 / 80%)'}
                maskBorderRadius={8}
              >
                <Image src={item?.url} alt="image" preview={false} className={styles.image} />
                <Title className={styles.cardTitle}>{item?.title}</Title>
              </MaskCard>
            </Col>
          ))}
        </Row>

        {isiPad ? (
          <></>
        ) : (
          <Row gutter={isMobile ? [0, 24] : [48, 24]} className={styles.timeImage}>
            {historyCards?.slice(3)?.map((item) => (
              <Col xs={24} sm={24} md={12} lg={6} key={item?.title} className={styles.col}>
                <MaskCard
                  className={styles.maskCard}
                  bodyStyle={{
                    padding: 0,
                    borderRadius: 8
                  }}
                  maskChildren={generateMaskChildren(item?.title, item?.desc)}
                  maskBackGroundColor={'rgb(23 33 66 / 80%)'}
                  maskBorderRadius={8}
                >
                  <Image src={item?.url} alt="image" preview={false} className={styles.image} />
                  <Title className={styles.cardTitle}>{item?.title}</Title>
                </MaskCard>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default History;
