'use client';
import { FacultyLevelCategory, GetFaculty } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { getTransResult } from '@/utils/public';
import { Avatar, Card, Col, Row, Space, Typography } from 'antd';
import { SegmentedValue } from 'antd/es/segmented';
import React, { useEffect, useState } from 'react';
import ColorfulCard from '../colorful-card';
import SegmentedRadioGroup, { useEventFacultyOptions } from '../segmented-radio-group';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const FacultyCoaches: React.FC<{
  data: StrapiResponseDataItem<GetFaculty>[] | undefined;
}> = ({ data }) => {
  const [segmented, setSegmented] = useState<SegmentedValue>(FacultyLevelCategory.Beginner);
  const [facultyData, setFacultyData] = useState<StrapiResponseDataItem<GetFaculty>[]>();
  const { format: t, lang } = useLang();
  const { hash } = window.location;
  const isMobile = useMobile();
  const isiPad = useMobile('xl');
  const sortData = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);

  useEffect(() => {
    const element = document.getElementById(hash);
    if (element) {
      const top = isMobile ? element?.offsetTop + 1000 : element?.offsetTop + 1000;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  }, [hash]);


  useEffect(() => {
    const filteredData = sortData?.filter((item) => item?.attributes?.level === segmented);
    setFacultyData(filteredData);
  }, [segmented, sortData]);
  return (
    <div className={`${styles.facultyCoaches} container`} id="#faculty">
      <Space direction="vertical" size={isMobile ? 24 : 48}>
        <Space direction="vertical">
          <Title className={styles.title}>
            <Text className={styles.title} style={{ color: '#FFAD11' }}>
              {t('Faculty')}
            </Text>
            &nbsp;&&nbsp;
            {t('Coaches')}
          </Title>
          <Paragraph className={styles.titleParagraph}>{t('Faculty.Desc')}</Paragraph>
        </Space>

        <SegmentedRadioGroup value={segmented} setValue={setSegmented} options={useEventFacultyOptions('faculty')} />

        <Row justify="center" align="middle" gutter={isiPad ? 24 : 48} className={styles.row}>
          {facultyData?.map((item, index) => (
            <Col key={item?.id} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }} className={styles.col}>
              <ColorfulCard border="bottom" split={4} index={index}>
                <Card bodyStyle={{ padding: 0, height: isMobile ? 224 : 310 }}>
                  <Space direction="vertical">
                    <Avatar src={item?.attributes?.img?.data?.attributes?.url} size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80, xxl: 96 }} className={styles.avatar} />
                    <Text className={styles.name}>{getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)}</Text>
                    <Paragraph
                      ellipsis={{
                        rows: 4,
                        tooltip: getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)
                      }}
                      className={styles.description}
                    >
                      {getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)}
                    </Paragraph>
                  </Space>
                </Card>
              </ColorfulCard>
            </Col>
          ))}
        </Row>
      </Space>
    </div>
  );
};

export default FacultyCoaches;
