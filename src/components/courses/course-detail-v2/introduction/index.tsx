import { useLang } from '@/hoc/with-intl/define';
import { formatTimezone } from '@/utils/public';
import { CommentOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Button, Descriptions, Modal, Space, message } from 'antd';
import { useContext, useState } from 'react';
import { getTransResult } from 'x-star-utils';
import CourseClassesContext from '../../CourseClassesContext';
import styles from './index.module.scss';

const Introduction = () => {
  const { format: t, lang } = useLang();
  const courseData = useContext(CourseClassesContext);
  const { startDateTime, endDateTime, courseTitleEn, classMode, classLang, spokenLang, courseFormat, additionalInfo, courseTitleZh, courseCode, frequency } = courseData?.attributes ?? {};
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

  const DescriptionsItems = [
    { key: t('ClassMode'), value: classMode },
    { key: t('CodeLanguage'), value: classLang },
    { key: t('ClassroomLanguage'), value: spokenLang },
    { key: t('CourseFormat'), value: courseFormat },
    { key: t('AdditionalInfo'), value: additionalInfo }
  ];

  return (
    <>
      <div className={`${styles.introduction} tabContent`} id="introduction">
        <div className={`${styles.content} container`}>
          <div className={styles.info}>
            <div className={'tabTitle'}>{'Introduction'}</div>
            <Descriptions column={1} layout="horizontal" className={styles.descriptions}>
              {DescriptionsItems?.map(
                (item) =>
                  item?.value && (
                    <Descriptions.Item key={item?.key} label={item?.key}>
                      {item?.value}
                    </Descriptions.Item>
                  )
              )}
            </Descriptions>
          </div>
          <div className={styles.side}>
            <img src="/image/home/charlie.png" alt="" />
            <div className={styles.btns}>
              <Button
                type={'primary'}
                className={styles.btn}
                icon={<CommentOutlined />}
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/selfsched?sstoken=UURhaXVoUDNzQVlLfGRlZmF1bHR8ZjkwM2I4MzViZjVlNGE1ZGFkMzc1NDQwMDFiOTMzNDQ')}
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
