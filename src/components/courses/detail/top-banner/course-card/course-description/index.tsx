import React, { useContext } from "react";
import styles from "./index.module.scss";
import { Carousel, Descriptions, Space,Image } from "antd";
import CourseClassesContext from "../../../CourseClasses";
import { useLang } from "@/hoc/with-intl/define";
import dayjs from "dayjs";

const CourseDescription = () => {
  const { lang } = useLang();
  const courseData = useContext(CourseClassesContext);
  const { classMode, classLang, classRoomLang, classes, media } =
    courseData?.attributes ?? {};

  const classesData = classes?.data?.map((classItem) => {
    const { classCode, isFull, startTime, endTime, location } =
      classItem?.attributes;
    return {
      classCode,
      isFull,
      startTime: startTime?.slice(0, -7),
      endTime: endTime?.slice(0, -7),
      location,
    };
  });


  const imageMimes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/tiff",
    "image/svg+xml",
    "image/webp",
  ];

  // console.log(classesData);
  return (
    <Space className={styles.description}>
      <div className={styles.left}>
        <Descriptions column={1}>
          <Descriptions.Item label="Class Mode">{classMode}</Descriptions.Item>
          <Descriptions.Item label="Code Language">
            {classLang}
          </Descriptions.Item>
          <Descriptions.Item label="Classroom Language">
            {classRoomLang}
          </Descriptions.Item>
          <Descriptions.Item label="Duration">
            {"2023/06/24 - 2023/12/03"}
          </Descriptions.Item>
          <Descriptions.Item label="Course Format">
            {"Offline(12280 Saratoga Sunnyvale Rd, #203 CA 95070)"}
          </Descriptions.Item>
          <Descriptions.Item label="Classes Time">
            <Space direction="vertical">
              {classesData?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={item?.isFull ? `${styles.full}` : ""}
                  >{`${item?.classCode}: ${item?.startTime}-${item?.endTime}`}</div>
                );
              })}
            </Space>
          </Descriptions.Item>
        </Descriptions>
      </div>
      <div className={styles.right}>
        <Carousel dots={{ className: styles.dots }}>
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
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          })}
        </Carousel>
      </div>
    </Space>
  );
};

export default CourseDescription;
