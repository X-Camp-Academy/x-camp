"use client";
import React from "react";
import { Space, Typography, Button, Input, Form } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import ColorfulCard from "@/components/common/colorful-card";
import { subscribeNewsletterRequest } from "@/apis/send-email-client";
import { useSubscribeNewsletter } from "@/apis/send-email-client/sendEmail";
import styles from "./index.module.scss";

const { Title, Paragraph } = Typography;

const SubscribeNewsletter: React.FC = () => {
  const { format: t } = useLang();
  const { runAsync: subscribeNewsletterRun } = useSubscribeNewsletter();

  const onFinish = async (values: subscribeNewsletterRequest) => {
    await subscribeNewsletterRun(values);
  };
  return (
    <div className={`${styles.subscribeNewsletter} container`}>
      <ColorfulCard border={"bottom"} index={1} animate={false}>
        <Space direction="vertical" className={styles.space}>
          <Title className={styles.title}>{"Subscribe Newsletter"}</Title>

          <Paragraph className={styles.paragraph}>
            X-Camp is committed to establishing a nurturing and all-encompassing coding
            <br />
            community, fueled by our devoted partners.
          </Paragraph>

          <Form name="subscribeNewsletter" onFinish={onFinish} layout="inline" className={styles.form}>
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
      </ColorfulCard>
    </div>
  );
};

export default SubscribeNewsletter;
