import React, { useContext, useRef, useState } from "react";
import styles from "./index.module.scss";
import { Carousel, Descriptions, Space, Image, Button, message, Modal } from "antd";
import CourseClassesContext from "../../../CourseClasses";
import { useLang } from "@/hoc/with-intl/define";
import { ShareAltOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import dayjs from "dayjs";
import { getTransResult } from "@/utils/public";

const CourseDescription = () => {
  const { lang, format: t } = useLang();
  const ref = useRef<CarouselRef>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const courseData = useContext(CourseClassesContext);
  const {
    courseCode,
    classMode,
    classLang,
    classRoomLang,
    startDate,
    endDate,
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
  const clipTextZh = `课程名称：${courseTitleZh}\n课程代码：${courseCode}\n编程语言：${classLang}\n授课语言：${classRoomLang}\n开始结束时间：${formatDate(startDate || '')} ~ ${formatDate(endDate || '')}\n课程周期：${frequency}\n开课方式：${classMode}\n课程链接：${fullPath}\n更多课程：https://www-new.x-camp.academy/courses/`;
  const clipTextEn = `Course name: ${courseTitleEn}\nCourse code: ${courseCode}\nProgramming language: ${classLang}\nLanguage of instruction: ${classRoomLang}\nCourse time: ${formatDate(startDate || '')} ~ ${formatDate(endDate || '')}\nCourse cycle: ${frequency}\nHow the course starts: ${classMode}\nCourse Links: ${fullPath}\nMore Courses: https://www-new.x-camp.academy/courses/`;

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
          message.open({
            content: getTransResult(
              lang,
              "课程信息复制成功",
              "The course information was copied successfully"
            ),
            duration: 2,
            type: "success",
          });
        },
        function () {
          message.open({
            content: getTransResult(
              lang,
              "课程信息复制失败",
              "Course information replication failed"
            ),
            duration: 2,
            type: "error",
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
            {classRoomLang}
          </Descriptions.Item>
          <Descriptions.Item label={t("Duration")}>
            {`${formatDate(startDate || "")} - ${formatDate(endDate || "")}`}
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
            <Carousel
              slidesToShow={5}
              dots={false}
              autoplay={true}
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
        </div>
      </div>
    </Space>
  );
};

export default CourseDescription;
