"use client";
import React from "react";
import {
  Carousel,
  Space,
  Button,
  Card,
  Image,
  Form,
  Input,
  Typography,
  Row,
  Col,
  message,
} from "antd";

import styles from "./CarouselContent.module.scss";
import { useSendOpenClassEmail } from "@/apis/send-email-client/sendEmail";
import { openClassEmailRequest } from "@/apis/send-email-client";

const { Title, Paragraph, Text } = Typography;

const CarouselContent: React.FC = () => {
  const { runAsync: sendMailToUser } = useSendOpenClassEmail();
  const onFinish = async (values: openClassEmailRequest) => {
    await sendMailToUser(values);
  };

  const carouselImages = [
    "/image/home/carousel-1-en.png",
    "/image/home/carousel-2-en.png",
  ];

  return (
    <div className={styles.bannerContainer}>
      <Carousel autoplay={false} dots={{ className: styles.carouselDots }}>
        <div className={styles.first}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={14}>
                <Space direction="vertical" className={styles.space} size={24}>
                  <Title className={styles.title}>
                    X-Camp Oline Open House
                  </Title>
                  <div>
                    <Paragraph className={styles.paragraph}>
                      {"Evaluate student's programming level"}
                    </Paragraph>
                    <Paragraph className={styles.paragraph}>
                      Make a programming learning plan and course schedule
                      consultation
                    </Paragraph>
                  </div>
                  <button className={styles.button}>JOIN US</button>
                  <Text className={styles.date}>
                    *Every Tuesday 6:30pm-7:30pm PT
                  </Text>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.first}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={14}>
                <Space direction="vertical" className={styles.space} size={24}>
                  <Title className={styles.title}>
                    X-Camp Oline Open House
                  </Title>
                  <div>
                    <Paragraph className={styles.paragraph}>
                      {"Evaluate student's programming level"}
                    </Paragraph>
                    <Paragraph className={styles.paragraph}>
                      Make a programming learning plan and course schedule
                      consultation
                    </Paragraph>
                  </div>
                  <button className={styles.button}>JOIN US</button>
                  <Text className={styles.date}>
                    *Every Tuesday 6:30pm-7:30pm PT
                  </Text>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      </Carousel>

      <div className={styles.cardFrom}>
        <Card
          title="Free Consultation"
          headStyle={{
            color: "#172142",
            fontSize: 24,
            fontWeight: "normal",
            height: 64,
            lineHeight: 36,
            textAlign: "center",
            borderBottom: "none"
          }}
          bodyStyle={{
            paddingTop: 36,
            paddingBottom: 16,
          }}
          className={styles.card}
        >
          <Form name="basic" onFinish={onFinish} className={styles.form}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input child's name!",
                },
              ]}
            >
              <Input placeholder="孩子昵称" />
            </Form.Item>

            <Form.Item
              name="grade"
              rules={[
                {
                  required: true,
                  message: "Please input child's grade!",
                },
              ]}
            >
              <Input placeholder="孩子年级" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { type: "email" },
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input type="email" placeholder="E-mail" />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your number!",
                },
              ]}
            >
              <Input placeholder="wechat ID/Phone Number" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.submit}
              >
                {"免费预约公开课（每周二）"}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default CarouselContent;
