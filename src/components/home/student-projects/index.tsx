'use client';
import { GetStudentProjects } from '@/apis/strapi-client/define';
import { useGetStudentProjects } from '@/apis/strapi-client/strapi';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { getTransResult } from '@/utils/public';
import { RightOutlined } from '@ant-design/icons';
import { Card, Col, Row, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const StudentProjects: React.FC = () => {
  const isMobile = useMobile();
  const { format: t, lang } = useLang();
  const { hash } = window.location;
  const { data } = useGetStudentProjects();
  const [inPadSize, setInPadSize] = useState<boolean>(false);
  const defaultVideoUrl = 'https://media.strapi.turingstar.com.cn/production/2023/7/20230726_162259_bac67c1a78.mp4?autoplay=0';

  const studentProjectsData = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);

  console.log(data);

  const scrollIntoView = (id: string) => {
    const dom = document.getElementById(id);
    dom?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  useEffect(() => {
    scrollIntoView(hash.slice(1));
  }, [hash]);

  useEffect(() => {
    if (window.innerWidth < 1200 && window.innerWidth > 768) {
      setInPadSize(true);
    } else {
      setInPadSize(false);
    }
  }, [window.innerWidth]);

  const getVideoByLang = (attributes: GetStudentProjects) => {
    const { video, videoZh, videoEn } = attributes;

    return video?.data ? `${video?.data?.attributes?.url}?autoplay=0` : videoZh || videoEn ? getTransResult(lang, videoZh, videoEn) : defaultVideoUrl;
  };
  return (
    <div style={{ background: '#FDF6F1' }}>
      <div className={`${styles.studentProjects} container`} id="stu_project">
        <Space direction="vertical" align="center" className={styles.space}>
          {lang === 'zh' ? (
            <div>
              <Title className={styles.title}>
                学生<span>作品</span>
              </Title>
              <Text className={styles.titleZhBg} />
            </div>
          ) : (
            <div>
              <Title className={styles.title}>
                Student <span>Projects</span>
              </Title>
              <Text className={styles.titleEnBg} />
            </div>
          )}
          <Paragraph className={styles.paragraph}>{t('Home.StudentProjects.Desc')}</Paragraph>

          <Row gutter={isMobile ? [0, 24] : [16, 28]} className={styles.row}>
            <Col xs={24} sm={24} md={8} lg={8} xl={12}>
              {studentProjectsData &&
                (!inPadSize ? (
                  <iframe src={getVideoByLang(studentProjectsData[0]?.attributes)} width="100%" height="100%" style={{ border: 'none' }} sandbox="" className={styles.bigIframe} allowFullScreen />
                ) : (
                  <Card
                    className={styles.card}
                    bodyStyle={{
                      overflow: 'hidden',
                      padding: '0 20px 0 20px'
                    }}
                    cover={
                      <iframe
                        src={getVideoByLang(studentProjectsData[0]?.attributes)}
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        sandbox=""
                        className={styles.smallIframe}
                        allowFullScreen
                      />
                    }
                  >
                    <Space direction="vertical" size={12} className={styles.space}>
                      <Text className={styles.cardTitle}>{getTransResult(lang, studentProjectsData[0]?.attributes?.titleZh, studentProjectsData[0]?.attributes?.titleEn)}</Text>
                      <Paragraph ellipsis={{ rows: 3 }} className={styles.cardParagraph}>
                        {getTransResult(lang, studentProjectsData[0]?.attributes?.descriptionZh, studentProjectsData[0]?.attributes?.descriptionEn)}
                      </Paragraph>
                      <a href={getTransResult(lang, studentProjectsData[0]?.attributes?.videoZh, studentProjectsData[0]?.attributes?.videoEn)} className={styles.cardMore}>
                        {'More'} <RightOutlined />
                      </a>
                    </Space>
                  </Card>
                ))}
            </Col>

            <Col xs={24} sm={24} md={16} lg={16} xl={12}>
              <Row gutter={[16, 24]}>
                {studentProjectsData &&
                  studentProjectsData.slice(1).map((item) => (
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} key={item?.id}>
                      <Card
                        key={item?.id}
                        className={styles.card}
                        bodyStyle={{
                          overflow: 'hidden',
                          padding: '0 0 0 8px'
                        }}
                        cover={<iframe src={getVideoByLang(item?.attributes)} width="100%" height="100%" style={{ border: 'none' }} sandbox="" className={styles.smallIframe} allowFullScreen />}
                      >
                        <Space direction="vertical" size={12} className={styles.space}>
                          <Text className={styles.cardTitle}>{getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)}</Text>
                          <Paragraph ellipsis={{ rows: 3 }} className={styles.cardParagraph}>
                            {getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)}
                          </Paragraph>
                          <a href={getTransResult(lang, item?.attributes?.videoZh, item?.attributes?.videoEn)} className={styles.cardMore}>
                            {'More'} <RightOutlined />
                          </a>
                        </Space>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Space>
      </div>
    </div>
  );
};

export default StudentProjects;
