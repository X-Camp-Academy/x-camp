import { FrequencyCategory } from '@/apis/strapi-client/define';
import NavTools from '@/components/common/nav/nav-tools';
import { useGlobalState } from '@/hoc/WithGlobalState';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { formatFinance, formatTimezone, getWeeksDays } from '@/utils/public';
import { CommentOutlined, LeftOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Typography, message } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { getTransResult } from 'x-star-utils';
import CourseClassesContext from '../../CourseClassesContext';
import styles from './index.module.scss';
const { Text } = Typography;

const Introduction = () => {
  const { format: t, lang } = useLang();
  const courseData = useContext(CourseClassesContext);
  const { affix } = courseData ?? {};
  const {
    startDateTime,
    endDateTime,
    tuitionUSD,
    tuitionRMB,
    lessonNum,
    courseTitleEn,
    classMode,
    classLang,
    recommendedLowerGrade,
    spokenLang,
    courseFormat,
    additionalInfo,
    courseTitleZh,
    courseCode,
    frequency
  } = courseData?.attributes ?? {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fullPath = window.location.href;
  const formatDate = (dateTime?: string) => {
    return formatTimezone(dateTime)?.dayjsTime?.format('MM/DD/YYYY');
  };
  const clipTextZh = `课程名称：${courseTitleZh}\n课程代码：${courseCode}\n编程语言：${classLang}\n授课语言：${spokenLang}\n开始结束时间：${formatDate(startDateTime)} ~ ${formatDate(
    endDateTime
  )}\n课程周期：${frequency}\n开课方式：${classMode}\n课程链接：${fullPath}\n更多课程：https://www-new.x-camp.academy/courses/`;
  const clipTextEn = `Course name: ${courseTitleEn}\nCourse code: ${courseCode}\nProgramming language: ${classLang}\nLanguage of instruction: ${spokenLang}\nCourse time: ${formatDate(
    startDateTime
  )} ~ ${formatDate(endDateTime)}\nCourse cycle: ${frequency}\nHow the course starts: ${classMode}\nCourse Links: ${fullPath}\nMore Courses: https://www-new.x-camp.academy/courses/`;

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

  const descriptionsItems = [
    { key: t('ClassMode'), value: classMode },
    { key: t('Level'), value: recommendedLowerGrade },
    { key: t('CodeLanguage'), value: classLang },
    { key: t('ClassroomLanguage'), value: spokenLang },
    { key: t('CourseFormat'), value: courseFormat },
    { key: t('AdditionalInfo'), value: additionalInfo }
  ];

  const isMobile = useMobile();
  const { setNavVisible } = useGlobalState();
  useEffect(() => {
    if (isMobile) {
      setNavVisible(false);
    }
  }, [isMobile]);

  const courseCodeTitle = `${courseCode}: ${getTransResult(lang, courseTitleZh, courseTitleEn)} (${lessonNum} ${getWeeksDays(frequency)})`;

  return (
    <>
      <div className={`${styles.introduction} tabContent`} id="introduction">
        <div className={`${styles.content} container`}>
          <div className={styles.info}>
            <div className={'tabTitle'}>{'Introduction'}</div>
            <img src="/image/home/charlie.png" alt="" />
            <div className={styles.descriptions}>
              {descriptionsItems?.map(
                (item) =>
                  item?.value && (
                    <div key={item?.key} className={styles.descriptionItem}>
                      <span className={styles.label}>
                        {item?.key}
                        {': '}
                      </span>
                      <span className={styles.value}>{item?.value}</span>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className={styles.side}>
            <img src="/image/home/charlie.png" alt="" />
            <div className={styles.btns}>
              <Button
                type={'primary'}
                className={styles.btn}
                icon={<CommentOutlined />}
                href="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UURhaXVoUDNzQVlLfGRlZmF1bHR8ZjkwM2I4MzViZjVlNGE1ZGFkMzc1NDQwMDFiOTMzNDQ"
                target="_blank"
              >
                {t('1On1Consultation')}
              </Button>
              <Space direction="vertical" style={{ alignItems: 'center' }}>
                <Button type={'primary'} className={styles.btn} icon={<ShareAltOutlined />} onClick={() => setIsModalOpen(true)}>
                  {t('ShareLessons')}
                </Button>
                <span className={styles.off}>{'* Get $75 off on referrals'}</span>
              </Space>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.nav} container`}>
        <div>
          <LeftOutlined className={styles.icon} onClick={() => window.history.back()} />
        </div>
        {affix && (
          <Text className={styles.title} ellipsis>
            {courseCodeTitle}
          </Text>
        )}
        <Space size={22}>
          <CommentOutlined
            className={styles.icon}
            onClick={() => window.open('https://calendar.google.com/calendar/u/0/selfsched?sstoken=UURhaXVoUDNzQVlLfGRlZmF1bHR8ZjkwM2I4MzViZjVlNGE1ZGFkMzc1NDQwMDFiOTMzNDQ')}
          />
          <ShareAltOutlined className={styles.icon} onClick={() => setIsModalOpen(true)} />
        </Space>
      </div>
      {affix && (
        <div className={`${styles.navbar} container`}>
          <Space direction="vertical" size={0}>
            <CommentOutlined
              className={styles.icon}
              onClick={() => window.open('https://calendar.google.com/calendar/u/0/selfsched?sstoken=UURhaXVoUDNzQVlLfGRlZmF1bHR8ZjkwM2I4MzViZjVlNGE1ZGFkMzc1NDQwMDFiOTMzNDQ')}
            />
            <span>{'1on1'}</span>
          </Space>
          <div className={styles.tools}>
            <div className={styles.price}>{frequency === FrequencyCategory.Once ? 'Free' : tuitionUSD ? `$${formatFinance(tuitionUSD)}` : `￥${formatFinance(tuitionRMB)}`}</div>
            <NavTools />
          </div>
        </div>
      )}
      <Modal
        title={getTransResult(lang, '分享课程信息', 'Share course information')}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
        closeIcon={false}
        centered
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            {getTransResult(lang, '复制课程信息', 'Copy the course information')}
          </Button>
        ]}
      >
        <div style={{ whiteSpace: 'pre-line' }}>{getTransResult(lang, clipTextZh, clipTextEn)}</div>
      </Modal>
    </>
  );
};

export default Introduction;
