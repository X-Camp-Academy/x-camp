'use client';
import ColorfulCard from '@/components/common/colorful-card';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { LaptopOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;

const ContactCard: React.FC = () => {
  const { format: t } = useLang();
  const isMobile = useMobile();
  const contactInfo = [
    {
      icon: <MailOutlined />,
      title: t('Contact.Email'),
      description: t('Contact.Email.info')
    },
    {
      icon: <PhoneOutlined rotate={180} />,
      title: t('Contact.Phone'),
      description: [t('Contact.Phone.info1'), t('Contact.Phone.info2')]
    },
    {
      icon: <LaptopOutlined />,
      title: t('Contact.OfficeHour'),
      description: t('Contact.OfficeHour.info')
    }
  ];

  return (
    <div className={`${styles.contactCardContent} container`}>
      <Row gutter={isMobile ? [32, 24] : [32, 32]}>
        {contactInfo.map((item, index) => (
          <Col key={item?.title} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 8 }}>
            <ColorfulCard border={'top'} index={contactInfo.length - index - 1} animate={false}>
              <Card className={styles.card}>
                <Space direction="vertical">
                  <Space align="center">
                    <div className={styles.icon}> {item.icon}</div>
                    <Title style={{ margin: 0 }} className={styles.title}>
                      {item.title}
                    </Title>
                  </Space>
                  <Paragraph type="secondary" className={styles.paragraph}>
                    {Array.isArray(item?.description) ? (
                      <>
                        {item?.description[0]}
                        <br />
                        {item?.description[1]}
                      </>
                    ) : (
                      item?.description
                    )}
                  </Paragraph>
                </Space>
              </Card>
            </ColorfulCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ContactCard;
