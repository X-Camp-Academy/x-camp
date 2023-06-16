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
} from "antd";
import { useMobile } from "@/utils";
import styles from "./CarouselContent.module.scss";

const { Title, Paragraph, Text } = Typography;

const CarouselContent: React.FC = () => {
  const isMobile = useMobile();
  const onFinish = (values: any) => {
    console.log(values);
  };

  const carouselImages = [
    "/image/home/carousel-1-en.png",
    "/image/home/carousel-2-en.png",
  ];

  return (
    <div className={styles.bannerContainer}>
      <div className={`${styles.banner} container`}>
        <Carousel autoplay={false} dots={{ className: styles.carouselDots }}>
          <Image
            alt="carousel"
            preview={false}
            width={"100%"}
            height={576}
            src="/image/home/carousel-bg.png"
          />
          <Image
            alt="carousel"
            preview={false}
            width={"100%"}
            height={576}
            src="/image/home/carousel-bg.png"
          />
        </Carousel>
        <div className={styles.cardFrom}>
          <Card
            title="Free Consultation"
            extra={
              <Image
                src="/image/home/think.png"
                alt="logo"
                preview={false}
                width={60}
                height={50}
                style={{ marginBottom: -8 }}
              />
            }
            headStyle={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "normal",
              height: 64,
              lineHeight: 36,
              backgroundColor: "#FFAD11",
            }}
            bodyStyle={{
              paddingTop: 36,
              paddingBottom: 16,
            }}
            className={styles.card}
          >
            <Form name="basic" onFinish={onFinish} className={styles.form}>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="孩子昵称" />
              </Form.Item>

              <Form.Item
                name="grade"
                rules={[
                  { required: true, message: "Please input your grade!" },
                ]}
              >
                <Input placeholder="孩子年级" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input type="email" placeholder="E-mail" />
              </Form.Item>

              <Form.Item
                name="number"
                rules={[
                  { required: true, message: "Please input your number!" },
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
                  免费预约公开课（每周二）
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CarouselContent;
