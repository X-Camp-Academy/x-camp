"use client";
import React from "react";
import {
  Carousel,
  Space,
  Button,
  Card,
  Form,
  Input,
  Typography,
  Row,
  Col,
} from "antd";
import { useLang } from "@/hoc/with-intl/define";
import { useSendOpenClassEmail } from "@/apis/send-email-client/sendEmail";
import { openClassEmailRequest } from "@/apis/send-email-client";
import styles from "./CarouselContent.module.scss";

const { Title, Paragraph, Text } = Typography;

const CarouselContent: React.FC = () => {
  const { format: t } = useLang();
  const { runAsync: sendMailToUser } = useSendOpenClassEmail();
  const onFinish = async (values: openClassEmailRequest) => {
    await sendMailToUser(values);
  };
  return (
    <div className={styles.bannerContainer}>
      <Carousel autoplay={false} dots={{ className: styles.carouselDots }}>
        <div className={styles.first}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={14}>
                <Space direction="vertical" className={styles.space} size={24}>
                  <Title className={styles.title}>{t("WeeklyOpenHouse")}</Title>
                  <div>
                    <Paragraph className={styles.paragraph}>
                      {t("OpenHouse.Dec1")}
                    </Paragraph>
                    <Paragraph className={styles.paragraph}>
                      {t("OpenHouse.Dec2")}
                    </Paragraph>
                    <Paragraph className={styles.paragraph}>
                      {t("OpenHouse.Dec3")}
                    </Paragraph>
                  </div>
                  <button className={styles.button} onClick={() => { window.open('https://us02web.zoom.us/j/89284761432?pwd=VXJvQjRPN3I4TXhlUk9SdXM0KzJqQT09') }}>{t("JoinUs")}</button>
                  <Text className={styles.date}>{t("OpenTime")}</Text>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      </Carousel>

      <div className={styles.cardFrom}>
        <Card
          title={t("FreeConsultation")}
          headStyle={{
            color: "#172142",
            fontSize: 24,
            fontWeight: "normal",
            height: 64,
            lineHeight: 36,
            textAlign: "center",
            borderBottom: "none",
          }}
          bodyStyle={{
            paddingTop: 36,
            paddingBottom: 16,
          }}
          className={styles.card}
        >
          <Form name="carouselContent" onFinish={onFinish} className={styles.form}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: t("Name.Required"),
                },
              ]}
            >
              <Input placeholder={t("Nickname")} />
            </Form.Item>

            <Form.Item
              name="grade"
              rules={[
                {
                  required: true,
                  message: t("Grade.Required"),
                },
              ]}
            >
              <Input placeholder={t("Grade")} />
            </Form.Item>

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
              <Input type="email" placeholder="E-mail*" />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: t("Phone/Wechat.Required"),
                },
              ]}
            >
              <Input placeholder={t("Phone/Wechat")} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.submit}
              >
                {t("SubmitOpenHouse")}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default CarouselContent;
