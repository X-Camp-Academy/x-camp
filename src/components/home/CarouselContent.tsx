'use client';
import React from 'react';
import { Carousel, Space, Button, Card, Image, Form, Input, Typography, Row, Col } from 'antd';

import styles from './CarouselContent.module.scss';

const { Title, Paragraph, Text } = Typography;

const CarouselContent: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  }
  return (
    <div className={styles.carouselContainer}>
      <div className={`${styles.carousel} container`}>
        <Carousel autoplay dots>
          <Row className={styles.carouselSpace}>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Space direction='vertical' className={styles.carouselLeft}>
                <Title className={styles.title}>X-Camp Online Open House</Title>
                <Space direction='vertical' className={styles.texts}>
                  <Text className={styles.text}>
                    {"Evaluate student's programming level"}
                  </Text>
                  <Text className={styles.text}>
                    Make a programming learning plan and
                  </Text>
                  <Text className={styles.text}>
                    course schedule consultation
                  </Text>
                </Space>
                <Button className={styles.joinUs}>JOIN US</Button>
                <Text className={styles.date}>*Every Tuesday 6:30pm-7:30pm PT</Text>
              </Space>
            </Col>

            <Col xs={24} sm={24} md={24} lg={8}>
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
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 'normal',
                  height: 64,
                  lineHeight: 36,
                  backgroundColor: '#FFAD11',
                }}
                bodyStyle={{
                  paddingTop: 36,
                  paddingBottom: 16
                }}
                className={styles.carouselRight}
              >
                <Form
                  name="basic"
                  onFinish={onFinish}
                  className={styles.form}
                >
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input placeholder='孩子昵称' />
                  </Form.Item>

                  <Form.Item
                    name="grade"
                    rules={[{ required: true, message: 'Please input your grade!' }]}
                  >
                    <Input placeholder='孩子年级' />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                    <Input type="email" placeholder='E-mail' />
                  </Form.Item>

                  <Form.Item
                    name="number"
                    rules={[{ required: true, message: 'Please input your number!' }]}
                  >
                    <Input placeholder='wechat ID/Phone Number' />
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
      </div>
    </div>
  )
}

export default CarouselContent;
