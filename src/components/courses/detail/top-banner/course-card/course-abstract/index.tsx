import { Button, Descriptions, Modal, Space, Typography } from "antd";
import React, { useContext, useState } from "react";
import styles from "./index.module.scss";
import CourseClassesContext from "../../../CourseClasses";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";


const { Title, Paragraph, Text } = Typography;

const CourseAbstract = () => {
  const { format: t, lang } = useLang();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const courseData = useContext(CourseClassesContext);
  const {
    courseCode,
    courseLongDescriptionEn,
    courseLongDescriptionZh,
    tuitionUSD,
    classes,
    startDate,
    registerLink,
    isBundle,
    bundleRegisterLink
  } = courseData?.attributes ?? {};

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

  const judgeInWeek = (openDate: string) => {
    const currentDate = dayjs();
    const diff = currentDate.diff(openDate, 'day');
    return diff <= 7;
  }

  const handlerSighUp = (startDate: string) => {
    if (judgeInWeek(startDate) && registerLink) {
      isBundle ? window.open(bundleRegisterLink) : window.open(registerLink);
    }
    else {
      setIsModalOpen(true);
    }
  }

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Space className={styles.abstract} size={24}>
      <div className={styles.left}>
        <div className={styles.title}>{courseCode}:</div>
        <div className={styles.title}>{t("Description")}</div>
        <Paragraph className={styles.abstract} ellipsis={{ rows: 3 }}>
          {getTransResult(
            lang,
            courseLongDescriptionZh,
            courseLongDescriptionEn
          )}
        </Paragraph>
        <Descriptions column={1} layout="vertical">
          <Descriptions.Item label={t("ClassesTime")}>
            <Space direction="vertical">
              {classesData?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={item?.isFull ? `${styles.full}` : ""}
                  >
                    {`${item?.classCode}: ${item?.startTime}-${item?.endTime}`}{" "}
                    {item?.isFull ? "(Full)" : ""}
                  </div>
                );
              })}
            </Space>
          </Descriptions.Item>
        </Descriptions>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>{t("One-TimePayment")}</div>
        <div className={styles.price}>{`$${tuitionUSD}`}</div>
        <Button type="primary" className={styles.btn} onClick={() => handlerSighUp(startDate || '')}>
          {t("SignUpNow")}
        </Button>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <img src="/image/QRCode/weChatAssistance.jpg" alt="weChatAssistance" width={'100%'} height={'100%'} />
        </Modal>
        <div className={styles.tip}>{t("Discount")}</div>
      </div>
    </Space>
  );
};

export default CourseAbstract;
