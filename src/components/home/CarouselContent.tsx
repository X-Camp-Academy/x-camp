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
import classNames from "classnames";
import { useLang } from "@/hoc/with-intl/define";
import { useSendOpenClassEmail } from "@/apis/send-email-client/sendEmail";
import { openClassEmailRequest } from "@/apis/send-email-client";
import styles from "./CarouselContent.module.scss";

const { Title, Paragraph, Text } = Typography;

const CarouselContent: React.FC = () => {
  const { format: t } = useLang();
  const cx = classNames.bind(styles);
  const { runAsync: sendMailToUser } = useSendOpenClassEmail();
  const onFinish = async (values: openClassEmailRequest) => {
    await sendMailToUser(values);
  };
  return (
    <div className={styles.bannerContainer}>
      <Carousel autoplay={false} dots={{ className: styles.carouselDots }}>
        <div className={styles.content}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={14}>
                <Space direction="vertical" className={styles.space} size={24}>
                  <Title className={styles.title}>{t("WeeklyOpenHouse")}</Title>
                  <div>
                    <Paragraph className={styles.paragraph}>
                      <span className={styles.dot}></span>
                      {t("OpenHouse.Dec1")}
                    </Paragraph>
                    <Paragraph className={styles.paragraph}>
                      <span className={styles.dot}></span>
                      {t("OpenHouse.Dec2")}
                    </Paragraph>
                    <Paragraph className={styles.paragraph}>
                      <span className={styles.dot}></span>
                      {t("OpenHouse.Dec3")}
                    </Paragraph>
                  </div>
                  <button className={styles.button} onClick={() => { window.open('https://us02web.zoom.us/j/89284761432?pwd=VXJvQjRPN3I4TXhlUk9SdXM0KzJqQT09') }}>{t("ZoomLink")}</button>
                  <Text className={styles.date}>{t("OpenTime")}</Text>
                </Space>
              </Col>
            </Row>
          </div>
        </div>

        <div className={styles.content}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={14}>
                <Space direction="vertical" className={styles.space} size={20}>
                  <Title className={styles.title} style={{ fontSize: 32 }}>{"USACO Enhancement Class is open to register!"}</Title>
                  <div>
                    <Paragraph className={cx(styles.paragraph, styles.mb8)}>
                      <span className={styles.dot}></span>
                      {"USACO Authentic Mock Test helps you prepare for the 23/24 season"}
                    </Paragraph>
                    <Paragraph className={cx(styles.paragraph, styles.mb8)}>
                      <span className={styles.dot}></span>
                      {"Real-time live lecture right after the mock test"}
                    </Paragraph>
                    <Paragraph className={cx(styles.paragraph, styles.mb8)}>
                      <span className={styles.dot}></span>
                      {"Community: share and discuss test recap together"}
                    </Paragraph>
                    <Paragraph className={cx(styles.paragraph, styles.mb8)}>
                      <span className={styles.dot}></span>
                      {"Upsolve, upsolve, upsolve!"}
                    </Paragraph>
                  </div>
                  <button className={styles.button} onClick={() => { window.open('https://tinyurl.com/XCamp23-24FallUSACO') }}>{t("JoinUs")}</button>
                  <Text className={styles.date}>{"09/23/2023 - 12/09/2023, no class Week 11/18 and 11/25"}</Text>
                </Space>
              </Col>
            </Row>
          </div>
        </div>

        <div className={styles.content}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={14}>
                <Space direction="vertical" className={styles.space} size={20}>
                  <Title className={styles.title} style={{ fontSize: 32 }}>{"2023 Fall Weekend Class Open to Register!"}</Title>
                  <div>
                    <Paragraph className={styles.paragraph}>
                      <span className={styles.dot}></span>
                      {"New 24-hour on-call tutorial forum "}
                    </Paragraph>
                    <Paragraph className={styles.paragraph}>
                      <span className={styles.dot}></span>
                      {"New project-based launch in Python classes"}
                    </Paragraph>
                    <Paragraph className={styles.paragraph}>
                      <span className={styles.dot}></span>
                      {"Worldwide coding community: 14 states, 6 countries"}
                    </Paragraph>
                  </div>
                  <button className={styles.button} onClick={() => { window.open('https://docs.google.com/forms/d/e/1FAIpQLScNm1Mf4lgvdXUObuJu3wl-_wEcYU9N8ao6PGv8RnANNGE_xw/viewform?usp=sf_link') }}>{"Register Link"}</button>
                  <Text className={styles.date}>{"09/16/23 - 12/03/2023 (No class on 11/18-19 and 11/25-26)"}</Text>
                </Space>
              </Col>
            </Row>
          </div>
        </div>

        <div className={styles.content}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={14}>
                <Space direction="vertical" className={styles.space} size={24}>
                  <Title className={styles.title}>{"USACO Director Dr. Brian Dean 22/23 Season AMA comes!"}</Title>
                  <button className={styles.button} onClick={() => { window.open('https://www.youtube.com/watch?v=K2PWgYHZWbw') }}>{"Youtube Recap"}</button>
                  <Text className={styles.date}>{"09/16/23 - 12/03/2023 (No class on 11/18-19 and 11/25-26)"}</Text>
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
            paddingBottom: 16,
          }}
          className={styles.card}
        >
          <div className={styles.cardTitle}>{t('SIGH_UP_USACO_TOOLKIT')}</div>
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
                {t('Submit')}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default CarouselContent;
