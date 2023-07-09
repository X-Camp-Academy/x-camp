"use client";
import React from "react";
import { Space, Image, Typography, Button, Input, Select, Form } from "antd";
import styles from "./SubscribeNewsletter.module.scss";
import { useMobile } from "@/utils";

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
  const onFinish = () => {};
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
            <Text className={styles.text}>Free Olympiad Programming Pack</Text>
          )}

          <Form name="basic" onFinish={onFinish} layout="inline">
            <Form.Item
              name="language"
              rules={[
                {
                  required: true,
                  message: "Please select code language",
                },
              ]}
            >
              <Select
                defaultValue="python"
                className={styles.formSelect}
                options={options}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input child's grade!",
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
                Download
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
