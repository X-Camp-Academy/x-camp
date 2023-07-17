import React, { useContext, useRef } from "react";
import styles from "./index.module.scss";
import { Carousel, Descriptions, Space, Image, Button, message } from "antd";
import CourseClassesContext from "../../../CourseClasses";
import { useLang } from "@/hoc/with-intl/define";
import { ShareAltOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import dayjs from "dayjs";
import { getTransResult } from "@/utils/public";

const CourseDescription = () => {
  const { lang, format: t } = useLang();
  const ref = useRef<CarouselRef>(null);
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
  } = courseData?.attributes ?? {};

  const imageMimes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/tiff",
    "image/svg+xml",
    "image/webp",
  ];

  const formatDate = (date: string) => {
    const formatStringZh = "YYYY/MM/DD";
    const formatStringEn = "MM/DD, YYYY";
    return getTransResult(
      lang,
      dayjs(date).format(formatStringZh),
      dayjs(date).format(formatStringEn)
    );
  };

  const handlerShareLesson = () => {
    const fullPath = window.location.href;
    const clipTextZh = `课程名称：${courseTitleZh}\n课程代码：${courseCode}\n编程语言：${classLang}\n授课语言：${classRoomLang}\n开始结束时间：${startDate} - ${endDate}\n课程周期：${frequency}\n开课方式：${classMode}\n课程链接：${fullPath}`;
    const clipTextEn = `Course Name:${courseTitleEn}\nCourse Code:${courseCode}\nprogramming language：${classLang}\nLanguage of instruction：${classRoomLang}\nStart end time:${startDate} - ${endDate}\nCourse cycle:${frequency}\nHow to start the course:${classMode}\nCourse Links:${fullPath}`;
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
  };

  return (
    <Space className={styles.description}>
      <div className={styles.left}>
        <Carousel dots={false} ref={ref}>
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
          <Space direction="horizontal">
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
          </Space>
        </div>
      </div>
      <div className={styles.right}>
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
    </Space>
  );
};

export default CourseDescription;
