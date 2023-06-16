"use client";
import React from "react";
import { Space, Image, Typography, Button, Input } from "antd";
import styles from "./SubscribeNewsletter.module.scss";
import { useMobile } from "@/utils";

const { Text } = Typography;

const SubscribeNewsletter: React.FC = () => {
  const isMobile = useMobile();
  return (
    <div className={styles.subscribeNewsletterContainer}>
      <div className={`${styles.subscribeNewsletter} container`}>
        <Space align="center" className={styles.space}>
          <Image
            alt=""
            src="/image/home/course-4.png"
            preview={false}
            className={styles.image}
          />
          <Space
            align="center"
            size={isMobile ? 8 : 48}
            className={styles.right}
          >
            {!isMobile && (
              <Text className={styles.text}>
                抢先一步，免费领取奥林匹克编程大礼包
              </Text>
            )}
            <Input className={styles.input} placeholder="填写你的邮箱" />
            <Button className={styles.button}>订阅Newsletter</Button>
          </Space>
        </Space>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
