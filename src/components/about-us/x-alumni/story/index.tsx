'use client';
import { useGetXAlumniStory } from '@/apis/strapi-client/strapi';
import ColorfulCard from '@/components/common/colorful-card';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { getTransResult } from '@/utils/public';
import { RightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Image, Row, Space, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;

const Stories: React.FC = () => {
  const isMobile = useMobile();
  const { lang, format: t } = useLang();
  const { data } = useGetXAlumniStory();

  return (
    <div className={styles.storiesContainer}>
      <div className="container">
        <Space className={styles.topSpace} direction={isMobile ? 'vertical' : 'horizontal'}>
          <Space direction="vertical">
            <Title className={styles.title}>{t('XAlumniEvents')}</Title>
            <Paragraph className={styles.paragraph}>{t('XAlumniEvents.Desc')}</Paragraph>
          </Space>
          <button className={styles.button}>
            <Link href="/resources/education-forum">{t('ViewMoreEvents')}</Link>
            <RightOutlined />
          </button>
        </Space>

        <Row gutter={32} className={styles.row}>
          {data?.map((item, index) => (
            <Col key={item?.id} xs={24} sm={24} md={8}>
              <ColorfulCard border="bottom" index={index} className={styles.colorfulCard}>
                <Card
                  className={styles.card}
                  styles={{
                    body: {
                      padding: 0
                    }
                  }}
                >
                  <Space direction="vertical" size={5}>
                    <Image alt="" preview={false} src={item?.attributes?.img?.data?.attributes?.url} className={styles.cardImage} />

                    <Title ellipsis={{ rows: 2 }} className={styles.cardTitle}>
                      {getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)}
                      <Button type="primary" size="small" ghost shape="circle" className={styles.cardButton}>
                        <a href={`/resources/${item.id}`}>
                          <RightOutlined />
                        </a>
                      </Button>
                    </Title>
                    <Paragraph ellipsis={{ rows: 3 }} className={styles.cardParagraph}>
                      {getTransResult(lang, item?.attributes.descriptionZh, item?.attributes.descriptionEn)}
                    </Paragraph>
                  </Space>
                </Card>
              </ColorfulCard>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Stories;
