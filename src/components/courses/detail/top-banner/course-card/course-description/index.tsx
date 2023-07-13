import React, { useContext, useRef } from "react";
import styles from "./index.module.scss";
import { Carousel, Descriptions, Space, Image, Button } from "antd";
import CourseClassesContext from "../../../CourseClasses";
import { useLang } from "@/hoc/with-intl/define";
import { ShareAltOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import Item from "antd/es/list/Item";
import dayjs from "dayjs";
import { getTransResult } from "@/utils/public";

const CourseDescription = () => {
  const { lang, format: t } = useLang();
  const ref = useRef<CarouselRef>(null);
  const courseData = useContext(CourseClassesContext);
  const {
    classMode,
    classLang,
    classRoomLang,
    startDate,
    endDate,
    classes,
    media,
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
    const formatStringZh = 'YYYY/MM/DD';
    const formatStringEn = 'MM/DD, YYYY';
    return getTransResult(
      lang,
      dayjs(date).format(formatStringZh),
      dayjs(date).format(formatStringEn),
    )
  }

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
            {`${startDate}-${endDate}`}
          </Descriptions.Item>
          <Descriptions.Item label={t("CourseFormat")}>
            {"Offline(12280 Saratoga Sunnyvale Rd, #203 CA 95070)"}
          </Descriptions.Item>
        </Descriptions>
        <Button className={styles.btn}>
          {t("ShareLessons")}
          <ShareAltOutlined />
        </Button>
      </div>
    </Space>
  );
};

export default CourseDescription;
