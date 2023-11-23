import { useLang } from '@/hoc/with-intl/define';
import { Col, Image, List, Row, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title } = Typography;

const ReferralProgramWork: React.FC = () => {
  const { format: t } = useLang();
  const listData = [t('Credit.Desc1'), t('Credit.Desc2'), t('Credit.Desc3'), t('Credit.Desc4'), t('Credit.Desc5'), t('Credit.Desc6'), t('Credit.Desc7')];

  return (
    <div className={`${styles.referralProgramWork} container`}>
      <Row>
        <Col lg={14} md={24} xs={24}>
          <Space direction="vertical">
            <Title className={styles.title}>{t('ReferralProgramWork')}</Title>
            <List
              dataSource={listData}
              className={styles.list}
              bordered={false}
              split={false}
              renderItem={(item, index) => {
                return (
                  <List.Item className={styles.description}>
                    {index !== listData.length - 1 && <span>{index + 1}. </span>}
                    {item}
                  </List.Item>
                );
              }}
            />
          </Space>
        </Col>
        <Col lg={10} md={24} xs={24} className={styles.imgCol}>
          <Image alt="img" src="/image/about-us/circle-turtle.png" preview={false} className={styles.image} />
        </Col>
      </Row>
    </div>
  );
};

export default ReferralProgramWork;
