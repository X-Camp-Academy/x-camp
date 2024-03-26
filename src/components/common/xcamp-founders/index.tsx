'use client';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { getLangResult } from '@/utils/public';
import { StarOutlined } from '@ant-design/icons';
import { Button, Col, Image, Row, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const XCampFounder: React.FC = () => {
  const { format: t, lang } = useLang();
  const isMobile = useMobile();
  return (
    <div className={`${styles.XCampFounder} container`}>
      <Space direction="vertical" align="center">
        <Title className={styles.title}>
          {getLangResult(
            lang,
            <>
              X-Camp的
              <Text className={styles.title} style={{ color: '#FFAD11' }}>
                创始人
              </Text>
            </>,
            <>
              <Text className={styles.title} style={{ color: '#FFAD11' }}>
                Founders&nbsp;
              </Text>
              Of X-Camp
            </>
          )}
        </Title>

        <Row gutter={isMobile ? [16, 24] : [32, 124]} className={styles.row}>
          <Col xs={24} sm={24} md={24} lg={12} className={styles.charlieImgCol}>
            <div className={styles.charlieImgBackground} />
            <Image src={'/image/home/charlie.png'} alt="image" preview={false} className={styles.charlieImg} />
          </Col>

          <Col xs={24} sm={24} md={24} lg={12} className={styles.founderDescription}>
            <Space direction="vertical">
              <Title className={styles.founderName}>{t('Charlie')}</Title>

              <Paragraph className={styles.founderTag}>
                <Button type="primary" shape="circle" size="small" className={styles.founderTagButton}>
                  <StarOutlined />
                </Button>
                {t('Co-Founder-Charlie')}
              </Paragraph>

              <Space direction="vertical">
                <Paragraph className={styles.founderParagraph}>
                  {t('Charlie.Desc1')}
                  {t('Charlie.years')}
                  {t('Charlie.Desc2')}
                  {t('Charlie.paper')}
                  {t('Charlie.Desc3')}
                </Paragraph>
                <Paragraph className={styles.founderParagraph}>{t('Charlie.Desc4')}</Paragraph>
              </Space>
            </Space>
          </Col>
        </Row>

        <Row gutter={isMobile ? [16, 24] : [32, 124]} style={{ marginTop: isMobile ? 24 : 120 }} className={styles.row}>
          <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }} className={styles.founderDescription}>
            <Space direction="vertical">
              <Title className={styles.founderName}>{t('Yuan')}</Title>
              <Paragraph className={styles.founderTag}>
                <Button type="primary" shape="circle" size="small" className={styles.founderTagButton}>
                  <StarOutlined />
                </Button>
                {t('Co-Founder-Yuan')}
              </Paragraph>

              <Space direction="vertical">
                <Paragraph className={styles.founderParagraph}>{t('Yuan.Desc1')}</Paragraph>
                <Paragraph className={styles.founderParagraph}>
                  {t('Yuan.Desc2')}
                  {t('Yuan.Student')}
                  {t('Yuan.Desc3')}
                  {t('Yuan.Desc4')}
                  {t('Yuan.Desc5')}
                  {'25 - 27'}
                  {t('Yuan.Desc6')}
                </Paragraph>
              </Space>
            </Space>
          </Col>

          <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }} className={styles.yuanImgCol}>
            <div className={styles.yuanImgBackground} />
            <Image src={'/image/home/yuan.png'} alt="image" preview={false} className={styles.yuanImg} />
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default XCampFounder;
