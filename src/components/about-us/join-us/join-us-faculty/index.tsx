import { useGetFaculty } from '@/apis/strapi-client/strapi';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { UsergroupAddOutlined } from '@ant-design/icons';
import { Button, Col, Image, Row, Space, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';

const { Paragraph } = Typography;

const JoinUsFaculty: React.FC = () => {
  const { format: t } = useLang();
  const router = useRouter();
  const { data: imgUrlList } = useGetFaculty({
    pageName: ['/about-us/join-us/']
  });
  const isMobile = useMobile();
  return (
    <div className={styles.joinUsFacultyContainer}>
      <Row className={`${styles.joinUsFaculty} container`}>
        <Col className={styles.xCampIntro} lg={12} md={24} xs={24}>
          <Space direction="vertical" size={isMobile ? 8 : 16}>
            <Image alt="image" src="/logo/logo.png" preview={false} className={styles.logo} />
            <Paragraph className={styles.introText}>{t('XCampFaculty.Desc')}</Paragraph>
            <Button
              className={styles.introBtn}
              onClick={() => {
                router.push('/about-us/introduction#faculty');
              }}
            >
              {t('XCampFaculty')}
              <UsergroupAddOutlined />
            </Button>
          </Space>
        </Col>
        <Col className={styles.facultyImgs} lg={12} md={24} xs={24}>
          <Row gutter={16}>
            {imgUrlList?.slice(0, 2)?.map((item) => {
              return (
                <Col span={8} offset={3} key={item?.id}>
                  <Image alt="image" src={item.attributes.img.data.attributes.url} preview={false} className={styles.image} />
                </Col>
              );
            })}
          </Row>
          <Row gutter={16} style={{ marginTop: '20px' }}>
            {imgUrlList?.slice(2, 5)?.map((item) => {
              return (
                <Col span={8} key={item?.id}>
                  <Image alt="image" src={item.attributes.img.data.attributes.url} preview={false} className={styles.image} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default JoinUsFaculty;
