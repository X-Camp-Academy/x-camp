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
  ConfigProvider,
} from "antd";
import { useMobile } from "@/utils";
import styles from "./CarouselContent.module.scss";

const { Title, Paragraph, Text } = Typography;

const CarouselContent: React.FC = () => {
  const isMobile = useMobile();
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className={styles.carouselContainer}>
      <div className={`${styles.carousel} container`}>
        <Carousel autoplay={false} dots={{ className: styles.dots }}>
          <Row className={styles.carouselSpace}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 16 }}
              lg={{ span: 16 }}
            >
              <div className={styles.carouselLeft}>
                <Image
                  alt="carousel"
                  preview={false}
                  src={"/image/home/carousel-1-en.png"}
                  className={styles.image}
                />
                {/* <Button className={styles.joinUs}>JOIN US</Button> */}
              </div>
            </Col>

            <Col
              xs={{ span: 0 }}
              sm={{ span: 0 }}
              md={{ span: 7, offset: 1 }}
              lg={{ span: 7, offset: 1 }}
            >
              <Card
                title="Free Consultation"
                extra={
                  <Image
                    src="/image/home/think.png"
                    alt="logo"
                    preview={false}
                    width={60}
                    height={50}
                    style={{ marginTop: 26 }}
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
                className={styles.carouselRight}
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
            </Col>
          </Row>
          <Row className={styles.carouselSpace}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 16 }}
              lg={{ span: 16 }}
            >
              <div className={styles.carouselLeft}>
                <Image
                  alt="carousel"
                  preview={false}
                  src={"/image/home/carousel-2-en.png"}
                  className={styles.image}
                />
                {/* <Button className={styles.joinUs}>JOIN US</Button> */}
              </div>
            </Col>

            <Col
              xs={{ span: 0 }}
              sm={{ span: 0 }}
              md={{ span: 7, offset: 1 }}
              lg={{ span: 7, offset: 1 }}
            >
              <Card
                title="Free Consultation"
                extra={
                  <Image
                    src="/image/home/think.png"
                    alt="logo"
                    preview={false}
                    width={60}
                    height={50}
                    style={{ marginTop: 26 }}
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
                className={styles.carouselRight}
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
            </Col>
          </Row>
        </Carousel>

        {isMobile && (
          <div style={{ marginTop: 32 }}>
            <Card
              title="Free Consultation"
              extra={
                <Image
                  src="/image/home/think.png"
                  alt="logo"
                  preview={false}
                  width={60}
                  height={50}
                  style={{ marginTop: 26 }}
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
              className={styles.carouselRight}
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
                    style={{ width: "100%" }}
                  >
                    免费预约公开课（每周二）
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselContent;
