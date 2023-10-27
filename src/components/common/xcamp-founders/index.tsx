'use client';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { StarOutlined } from '@ant-design/icons';
import { Button, Col, Image, Row, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const XCampFounder: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  return (
    <div className={`${styles.XCampFounder} container`}>
      <Space direction="vertical" align="center">
        <Title className={styles.title}>
          X-Camp&nbsp;
          <Text className={styles.title} style={{ color: '#FFAD11' }}>
            {t('Founders')}
          </Text>
        </Title>

        <Row gutter={isMobile ? [16, 48] : [32, 124]} className={styles.row}>
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
                  <Text className={styles.keyText}>{t('Charlie.years')}</Text>
                  {t('Charlie.Desc2')}
                  <Text className={styles.keyText}>{t('Charlie.paper')}</Text>
                  {t('Charlie.Desc3')}
                </Paragraph>
                <Paragraph className={styles.founderParagraph}>{t('Charlie.Desc4')}</Paragraph>
              </Space>
            </Space>
          </Col>
        </Row>

        <Row gutter={isMobile ? [16, 48] : [32, 124]} style={{ marginTop: isMobile ? 48 : 120 }} className={styles.row}>
          <Col xs={24} sm={24} md={24} lg={12} className={styles.founderDescription}>
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
                  <Text className={styles.keyText}> {t('Yuan.Student')} </Text>
                  {t('Yuan.Desc3')}
                  <Text className={styles.keyText}> {t('Yuan.Desc4')} </Text>
                  {t('Yuan.Desc5')}
                  <Text className={styles.keyText}> 25-27 </Text>
                  {t('Yuan.Desc6')}
                </Paragraph>
              </Space>
            </Space>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12} className={styles.yuanImgCol}>
            <div className={styles.yuanImgBackground} />
            <Image src={'/image/home/yuan.png'} alt="image" preview={false} className={styles.yuanImg} />
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default XCampFounder;
