'use client';
import React, { useEffect } from 'react';
import { Space, Typography, Row, Col, Card } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import { GetHomeStudentProjects } from '@/apis/strapi-client/define';
import { useGetHomeStudentProjects } from '@/apis/strapi-client/strapi';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const StudentProjects: React.FC = () => {
  const { format: t, lang } = useLang();
  const { hash } = window.location;
  const { data } = useGetHomeStudentProjects();
  const defaultVideoUrl = 'https://media.strapi.turingstar.com.cn/production/2023/7/20230726_162259_bac67c1a78.mp4?autoplay=0';

  const studentProjectsData = data?.sort(
    (a, b) => b?.attributes?.order - a?.attributes?.order
  );

  const scrollIntoView = (id: string) => {
    const dom = document.getElementById(id);
    dom?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  useEffect(() => {
    scrollIntoView(hash.slice(1));
  }, [hash]);

  const getVideoByLang = (attributes: GetHomeStudentProjects) => {
    const { video, videoZh, videoEn } = attributes;

    return video?.data ? `${video?.data?.attributes?.url}?autoplay=0` : (videoZh || videoEn) ? getTransResult(lang, videoZh, videoEn) : defaultVideoUrl;
  };
  return (
    <div style={{ background: '#FDF6F1' }}>
      <div className={`${styles.studentProjects} container`} id="stu_project">
        <Space direction="vertical" align="center">
          {lang === 'zh' ? <Title className={styles.title}>学生课程</Title> : <>
            <Title className={styles.title}>Student <span>Projects</span></Title>
            <Text className={styles.titleBg} />
          </>}
          <Paragraph className={styles.paragraph}>
            {t('StudentProjects.Desc1')}
            <Text className={styles.paragraphText}> {t('greatOpportunity')}</Text>
            {t('StudentProjects.Desc2')}
          </Paragraph>

          <Row gutter={16} className={styles.row}>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              {studentProjectsData && (
                <iframe src={getVideoByLang(studentProjectsData[0]?.attributes)} width="100%" height="100%" sandbox="" />
              )}
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <div className={styles.cardContainer}>
                {studentProjectsData &&
                  studentProjectsData.slice(1).map((item) => (
                    <Card
                      key={item?.id}
                      className={styles.card}
                      bodyStyle={{
                        overflow: 'hidden',
                        padding: 16,
                      }}
                      cover={
                        <iframe src={getVideoByLang(item?.attributes)} width="100%" height="100%" sandbox="" />
                      }
                    >
                      <Space direction="vertical" size={24}>
                        <Text className={styles.cardTitle}>
                          {getTransResult(
                            lang,
                            item?.attributes?.titleZh,
                            item?.attributes?.titleEn
                          )}
                        </Text>
                        <Paragraph
                          ellipsis={{ rows: 3 }}
                          className={styles.cardParagraph}
                        >
                          {getTransResult(
                            lang,
                            item?.attributes?.descriptionZh,
                            item?.attributes?.descriptionEn
                          )}
                        </Paragraph>
                        <a href={getTransResult(lang, item?.attributes?.videoZh, item?.attributes?.videoEn)} className={styles.cardMore}>
                          {'More'} <RightOutlined />
                        </a>
                      </Space>
                    </Card>
                  ))}
              </div>
            </Col>
          </Row>
        </Space>
      </div>
    </div>
  );
};

export default StudentProjects;
