import React, { useState, useRef, useContext } from "react";
import { Carousel, Descriptions, Space, Image, Button, message, Modal } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import dayjs from "dayjs";
import { useLang } from "@/hoc/with-intl/define";
import { formatTimezone, getTransResult } from "@/utils/public";
import CourseClassesContext from "@/components/courses/CourseClasses";
import styles from "./index.module.scss";

const CourseDescription: React.FC = () => {
  const { lang, format: t } = useLang();
  const ref = useRef<CarouselRef>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  message.config({
    top: 100,

  });
  const courseData = useContext(CourseClassesContext);
  const {
    courseCode,
    classMode,
    classLang,
    spokenLang,
    startDateTime,
    endDateTime,
    media,
    courseTitleZh,
    courseTitleEn,
    frequency,
    courseFormat,
    additionalInfo
  } = courseData?.attributes ?? {};

  const formatDate = (date: string) => {
    const formatStringZh = "YYYY/MM/DD";
    const formatStringEn = "YYYY/MM/DD";
    return getTransResult(
      lang,
      dayjs(date).format(formatStringZh),
      dayjs(date).format(formatStringEn)
    );
  };

  const fullPath = window.location.href;
  const clipTextZh = `课程名称：${courseTitleZh}\n课程代码：${courseCode}\n编程语言：${classLang}\n授课语言：${spokenLang}\n开始结束时间：${formatTimezone(startDateTime)?.utcTime?.format('DD/MM/YYYY')} ~ ${formatTimezone(endDateTime)?.utcTime?.format('DD/MM/YYYY')}\n课程周期：${frequency}\n开课方式：${classMode}\n课程链接：${fullPath}\n更多课程：https://www-new.x-camp.academy/courses/`;
  const clipTextEn = `Course name: ${courseTitleEn}\nCourse code: ${courseCode}\nProgramming language: ${classLang}\nLanguage of instruction: ${spokenLang}\nCourse time: ${formatTimezone(startDateTime)?.utcTime?.format('DD/MM/YYYY')} ~ ${formatTimezone(endDateTime)?.utcTime?.format('DD/MM/YYYY')}\nCourse cycle: ${frequency}\nHow the course starts: ${classMode}\nCourse Links: ${fullPath}\nMore Courses: https://www-new.x-camp.academy/courses/`;

  const imageMimes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/tiff",
    "image/svg+xml",
    "image/webp",
  ];

  const handleOk = () => {
    navigator.clipboard
      .writeText(getTransResult(lang, clipTextZh, clipTextEn) || "")
      .then(
        function () {
          message.success({
            content: getTransResult(
              lang,
              "课程信息复制成功",
              "The course information was copied successfully"
            ),

          });
        },
        function () {
          message.error({
            content: getTransResult(
              lang,
              "课程信息复制失败",
              "Course information replication failed"
            ),
          });
        }
      );
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlerShareLesson = () => {
    setIsModalOpen(true);
  };

  console.log(media?.data);


  return (
    <Space className={styles.description}>
      <div className={styles.left}>
        <Descriptions column={1}>
          <Descriptions.Item label={t("ClassMode")}>
            {classMode}
          </Descriptions.Item>
          <Descriptions.Item label={t("CodeLanguage")}>
            {classLang}
          </Descriptions.Item>
          <Descriptions.Item label={t("ClassroomLanguage")}>
            {spokenLang}
          </Descriptions.Item>
          <Descriptions.Item label={t("Duration")}>

            {`${formatTimezone(startDateTime)?.utcTime?.format('DD/MM/YYYY')} - ${formatTimezone(endDateTime)?.utcTime?.format('DD/MM/YYYY')} (${formatTimezone(endDateTime)?.timezone})`}
          </Descriptions.Item>
          <Descriptions.Item label={t("CourseFormat")}>
            {courseFormat}
          </Descriptions.Item>
          {
            additionalInfo &&
            <Descriptions.Item label={t("AdditionalInfo")}>
              {additionalInfo}
            </Descriptions.Item>
          }
        </Descriptions>
        <Button
          id="copyButton"
          className={styles.btn}
          onClick={() => {
            handlerShareLesson();
          }}
        >
          {t("ShareLessons")}
          <ShareAltOutlined />
        </Button>
      </div>

      <div className={styles.right}>
        <Carousel
          dots={false}
          ref={ref}
        >
          {media?.data?.map((mediaItem) => {
            return imageMimes?.includes(mediaItem?.attributes?.mime) ? (
              <div key={mediaItem?.id} className={styles.videoBox}>
                <Image
                  alt=""
                  preview={false}
                  src={mediaItem?.attributes?.url}
                  width="100%"
                  height="100%"
                />
              </div>
            ) : (
              <div key={mediaItem?.id} className={styles.videoBox}>
                <video controls>
                  <source src={mediaItem?.attributes?.url} type="video/mp4" />
                  {t("VideoProblem")}
                </video>
              </div>
            );
          })}
        </Carousel>

        <div className={styles.mediaChoice}>
          {media?.data && (
            <Carousel
              slidesToShow={media?.data?.length > 5 ? 5 : media?.data?.length}
              dots={false}
              infinite={true}
              autoplay={media?.data?.length <= 5 ? false : true}
              autoplaySpeed={1800}
            >
              {media?.data?.map((mediaItem, index) => {
                return imageMimes?.includes(mediaItem?.attributes?.mime) ? (
                  <div key={mediaItem?.id} className={styles.mediaChoiceBox}>
                    <Button
                      ghost
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      onClick={() => {
                        ref?.current?.goTo(index);
                      }}
                    >
                      <Image
                        alt=""
                        preview={false}
                        src={mediaItem?.attributes?.url}
                        width="100%"
                      />
                    </Button>
                  </div>
                ) : (
                  <div key={mediaItem?.id} className={styles.mediaChoiceBox}>
                    <Button
                      ghost
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      onClick={() => {
                        ref?.current?.goTo(index);
                      }}
                    >
                      <video style={{ width: "100%" }}>
                        <source
                          src={mediaItem?.attributes?.url}
                          type="video/mp4"
                        />
                        {t("VideoProblem")}
                      </video>
                    </Button>
                  </div>
                );
              })}
            </Carousel>
          )}

          <Modal
            title={getTransResult(lang, "分享课程信息", 'Share course information')}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
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
      </div>
    </Space>

  );
};

export default CourseDescription;
