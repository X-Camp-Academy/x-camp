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
import { useGetFaculty } from '@/apis/strapi-client/strapi';

const { Paragraph, Text } = Typography;

const FacultyCoaches: React.FC = () => {
  const [segmented, setSegmented] = useState<SegmentedValue>(FacultyLevelCategory.Beginner);
  const { data } = useGetFaculty({});
  const [facultyData, setFacultyData] = useState<StrapiResponseDataItem<GetFaculty>[]>();
  const { lang } = useLang();
  const isMobile = useMobile();
  const isiPad = useMobile('xl');

  useEffect(() => {
    const sortData = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
    const filteredData = sortData?.filter((item) => item?.attributes?.level === segmented);

    setFacultyData(filteredData);
  }, [segmented, data]);
  return (
    <div className={`${styles.facultyCoaches} container`}>
      <Space direction="vertical" size={isMobile ? 24 : 48}>
        <div style={{ width: isMobile ? '100%' : '60%', margin: '0 auto' }}>
          <SegmentedRadioGroup value={segmented} setValue={setSegmented} options={useEventFacultyOptions('faculty')} />
        </div>
        <Row justify="center" align="middle" gutter={isiPad ? 24 : 48} className={styles.row}>
          {facultyData?.map((item, index) => (
            <Col key={item?.id} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} className={styles.col}>
              <ColorfulCard border="bottom" split={4} index={index}>
                <Card bodyStyle={{ padding: 0, height: isMobile ? 224 : 250 }}>
                  <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row', paddingLeft: 36, paddingRight: 36 }}>
                    <Space direction="vertical">
                      <Avatar src={item?.attributes?.img?.data?.attributes?.url} size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80, xxl: 96 }} className={styles.avatar} />
                      <Text className={styles.name}>{getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)}</Text>
                    </Space>
                    <Paragraph
                      ellipsis={{
                        rows: 4,
                        tooltip: getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)
                      }}
                      className={styles.description}
                    >
                      {getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)}
                    </Paragraph>
                  </div>
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
