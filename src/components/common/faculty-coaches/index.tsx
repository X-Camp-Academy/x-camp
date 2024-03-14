'use client';
import { FacultyLevelCategory, GetFaculty } from '@/apis/strapi-client/define';
import { useGetFaculty } from '@/apis/strapi-client/strapi';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Col, Row, Space, Typography } from 'antd';
import { SegmentedValue } from 'antd/es/segmented';
import React, { useEffect, useState } from 'react';
import SegmentedRadioGroup, { useEventFacultyOptions } from '../segmented-radio-group';
import FacultyCard from './faculty-card';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const FacultyCoaches: React.FC = () => {
  const [segmented, setSegmented] = useState<SegmentedValue>(FacultyLevelCategory.Beginner);
  const { data } = useGetFaculty({});
  const [facultyData, setFacultyData] = useState<StrapiResponseDataItem<GetFaculty>[]>();
  const { format: t, lang } = useLang();
  const { hash } = window.location;
  const isMobile = useMobile();
  const isiPad = useMobile('xl');

  useEffect(() => {
    const element = document.getElementById(hash);
    if (element) {
      setTimeout(() => {
        const top = isMobile ? element?.offsetTop : element?.offsetTop + 1000;
        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      }, 1000);
    }
  }, [hash]);

  useEffect(() => {
    const sortData = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
    const filteredData = sortData?.filter((item) => item?.attributes?.level === segmented);

    setFacultyData(filteredData);
  }, [segmented, data]);
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
              <FacultyCard index={index} item={item} />
            </Col>
          ))}
        </Row>
      </Space>
    </div>
  );
};

export default FacultyCoaches;
