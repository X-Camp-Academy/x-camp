import CopyRightIcons from '@/components/common/copy-right-icons';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { formatTimezone, getTransResult, getWeeksDays } from '@/utils/public';
import { ShareAltOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Carousel, Descriptions, Divider, Image, Modal, Space, Typography, message } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import React, { useContext, useRef, useState } from 'react';
import CourseClassesContext from '../../CourseClassesContext';
import CourseAbstract from '../../course-abstract';
import styles from './index.module.scss';

const { Title, Text } = Typography;

const CourseBanner: React.FC = () => {
  const { format: t, lang } = useLang();
  const isMobile = useMobile();
  const ref = useRef<CarouselRef>(null);
  message.config({
    top: 100
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const courseData = useContext(CourseClassesContext);

  const { courseCode, classMode, classLang, spokenLang, startDateTime, endDateTime, media, courseTitleZh, courseTitleEn, lessonNum, frequency, courseFormat, additionalInfo } =
    courseData?.attributes ?? {};

  const courseCodeTitle = `${courseCode}: ${getTransResult(lang, courseTitleZh, courseTitleEn)} (${lessonNum} ${getWeeksDays(frequency)})`;

  const formatDate = (dateTime?: string) => {
    return formatTimezone(dateTime)?.utcTime?.format('DD/MM/YYYY');
  };
  const fullPath = window.location.href;
  const clipTextZh = `课程名称：${courseTitleZh}\n课程代码：${courseCode}\n编程语言：${classLang}\n授课语言：${spokenLang}\n开始结束时间：${formatDate(startDateTime)} ~ ${formatDate(
    endDateTime
  )}\n课程周期：${frequency}\n开课方式：${classMode}\n课程链接：${fullPath}\n更多课程：https://www-new.x-camp.academy/courses/`;
  const clipTextEn = `Course name: ${courseTitleEn}\nCourse code: ${courseCode}\nProgramming language: ${classLang}\nLanguage of instruction: ${spokenLang}\nCourse time: ${formatDate(
    startDateTime
  )} ~ ${formatDate(endDateTime)}\nCourse cycle: ${frequency}\nHow the course starts: ${classMode}\nCourse Links: ${fullPath}\nMore Courses: https://www-new.x-camp.academy/courses/`;

  const imageMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/tiff', 'image/svg+xml', 'image/webp'];

  const handleOk = () => {
    navigator.clipboard.writeText(getTransResult(lang, clipTextZh, clipTextEn) || '').then(
      function () {
        message.success({
          content: getTransResult(lang, '课程信息复制成功', 'The course information was copied successfully')
        });
      },
      function () {
        message.error({
          content: getTransResult(lang, '课程信息复制失败', 'Course information replication failed')
        });
      }
    );
    setIsModalOpen(false);
  };

  const DescriptionsItems = [
    { key: t('ClassMode'), value: classMode },
    { key: t('CodeLanguage'), value: classLang },
    { key: t('ClassroomLanguage'), value: spokenLang },
    {
      key: t('Duration'),
      value: `${formatDate(startDateTime)} - ${formatDate(endDateTime)} (${formatTimezone(endDateTime)?.timezone})`
    },
    { key: t('CourseFormat'), value: courseFormat },
    { key: t('AdditionalInfo'), value: additionalInfo }
  ];

  return (
    <div className={styles.banner}>
      <div className={`${styles.content} container`} style={{ height: '100%' }}>
        <Breadcrumb
          className={styles.breadcrumb}
          items={[
            {
              title: t('Home')
            },
            {
              title: <a href="/courses">{t('Courses')}</a>
            },
            {
              title: courseCodeTitle
            }
          ]}
        />

        <Title className={styles.title}>{courseCodeTitle}</Title>

        <div className={styles.courseCard}>
          <Space className={styles.cardContent} direction="vertical" split={<Divider className={styles.divider} />}>
            <CourseAbstract {...courseData?.attributes} />

            <Space className={styles.description}>
              <div className={styles.left}>
                <Descriptions column={1}>
                  {DescriptionsItems?.map(
                    (item) =>
                      item?.value && (
                        <Descriptions.Item key={item?.key} label={item?.key}>
                          {item?.value}
                        </Descriptions.Item>
                      )
                  )}
                </Descriptions>

                <Space direction="vertical" size={32}>
                  <Button id="copyButton" className={styles.btn} onClick={() => setIsModalOpen(true)}>
                    {t('ShareLessons')}
                    <ShareAltOutlined />
                  </Button>

                  <Button className={styles.consultation}>{t('1On1Consultation')}</Button>
                </Space>
              </div>

              <div className={styles.right}>
                <Carousel dots={false} ref={ref}>
                  {media?.data?.map((mediaItem) => {
                    return imageMimes?.includes(mediaItem?.attributes?.mime) ? (
                      <div key={mediaItem?.id} className={styles.videoBox}>
                        <Image alt="" preview={false} src={mediaItem?.attributes?.url} width="100%" height="100%" />
                      </div>
                    ) : (
                      <div key={mediaItem?.id} className={styles.videoBox}>
                        <video controls>
                          <source src={mediaItem?.attributes?.url} type="video/mp4" />
                          {t('VideoProblem')}
                        </video>
                      </div>
                    );
                  })}
                </Carousel>

                <div className={styles.mediaChoice}>
                  {media?.data && (
                    <Carousel slidesToShow={media?.data?.length > 5 ? 5 : media?.data?.length} dots={false} infinite autoplay={media?.data?.length <= 5 ? false : true} autoplaySpeed={1800}>
                      {media?.data?.map((mediaItem, index) => {
                        return imageMimes?.includes(mediaItem?.attributes?.mime) ? (
                          <div key={mediaItem?.id} className={styles.mediaChoiceBox}>
                            <Button
                              ghost
                              style={{
                                width: '100%',
                                height: '100%'
                              }}
                              onClick={() => {
                                ref?.current?.goTo(index);
                              }}
                            >
                              <Image alt="" preview={false} src={mediaItem?.attributes?.url} width="100%" />
                            </Button>
                          </div>
                        ) : (
                          <div key={mediaItem?.id} className={styles.mediaChoiceBox}>
                            <Button
                              ghost
                              style={{
                                width: '100%',
                                height: '100%'
                              }}
                              onClick={() => {
                                ref?.current?.goTo(index);
                              }}
                            >
                              <video style={{ width: '100%' }}>
                                <source src={mediaItem?.attributes?.url} type="video/mp4" />
                                {t('VideoProblem')}
                              </video>
                            </Button>
                          </div>
                        );
                      })}
                    </Carousel>
                  )}

                  <Modal
                    title={getTransResult(lang, '分享课程信息', 'Share course information')}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={() => setIsModalOpen(false)}
                    closeIcon={false}
                    footer={[
                      <Button key="submit" type="primary" onClick={handleOk}>
                        {getTransResult(lang, '复制课程信息', 'Copy the course information')}
                      </Button>
                    ]}
                  >
                    <div style={{ whiteSpace: 'pre-line' }}>{getTransResult(lang, clipTextZh, clipTextEn)}</div>
                  </Modal>
                </div>

                <Space direction="vertical" size={isMobile ? 8 : 16} align="end" className={styles.rightBottom}>
                  <Text className={styles.rightBottomText}> * Get $75 off for each/ Get up to $150 off!</Text>
                  <CopyRightIcons />
                </Space>
              </div>
            </Space>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
