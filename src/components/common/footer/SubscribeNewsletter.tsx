"use client";
import React from "react";
import { Space, Image, Typography, Button, Input, Select, Form } from "antd";
import styles from "./SubscribeNewsletter.module.scss";
import { useMobile } from "@/utils";
import { subscribeNewsletterRequest } from "@/apis/send-email-client";
import { useSubscribeNewsletter } from "@/apis/send-email-client/sendEmail";

const { Text } = Typography;

const SubscribeNewsletter: React.FC = () => {
  const isMobile = useMobile();
  const options = [
    {
      label: "Python",
      value: "python",
    },
    {
      label: "C++",
      value: "c++",
    },
    {
      label: "Java",
      value: "java",
    },
  ];
  const { runAsync: subscribeNewsletterRun } = useSubscribeNewsletter();

  const onFinish = async (values: subscribeNewsletterRequest) => {
    await subscribeNewsletterRun(values);
  };
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
          {!isMobile && (
            <Text className={styles.text}>Free Programming Pack</Text>
          )}

          <Form name="basic" onFinish={onFinish} layout="inline">
            <Form.Item
              name="email"
              rules={[
                { type: "email" },
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
              style={isMobile ? { width: 120 } : {}}
            >
              <Input type="email" placeholder="E-mail*" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.submit}
              >
                {"Subscribe Newsletter"}
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
