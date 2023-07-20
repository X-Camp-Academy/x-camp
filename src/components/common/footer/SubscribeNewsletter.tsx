"use client";
import React from "react";
import { Space, Image, Typography, Button, Input, Select, Form } from "antd";
import styles from "./SubscribeNewsletter.module.scss";
import { useMobile } from "@/utils";
import { subscribeNewsletterRequest } from "@/apis/send-email-client";
import { useSubscribeNewsletter } from "@/apis/send-email-client/sendEmail";
import { useLang } from "@/hoc/with-intl/define";

const { Text } = Typography;

const SubscribeNewsletter: React.FC = () => {
  const isMobile = useMobile();
  const { format: t } = useLang();
  const { runAsync: subscribeNewsletterRun } = useSubscribeNewsletter();

  const onFinish = async (values: subscribeNewsletterRequest) => {
    await subscribeNewsletterRun(values);
  };
  return (
    <div className={styles.subscribeNewsletterContainer}>
      <div className={`${styles.subscribeNewsletter} container`}>
        <Space align="center" className={styles.space}>
          <div className={styles.imgAndText}>
            <Image
              alt=""
              src="/image/home/course-4.png"
              preview={false}
              className={styles.image}
            />
            {!isMobile && (
              <Text className={styles.text}>{t("FreeProgrammingPack")}</Text>
            )}
          </div>
          <Form name="subscribeNewsletter" onFinish={onFinish} layout="inline">
            <Form.Item
              name="email"
              rules={[
                { type: "email" },
                {
                  required: true,
                  message: t("Email.Required"),
                },
              ]}
            >
              <Input type="email" placeholder="E-mail*" className={styles.formSelect} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.submit}
              >
                {t("SubscribeNewsletter")}
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
