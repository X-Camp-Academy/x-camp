'use client';
import React from 'react';
import { Carousel, Space, Button, Card, Image, Form, Input, Typography } from 'antd';

import styles from './CarouselContent.module.scss';

const { Title, Paragraph, Text } = Typography;

const CarouselContent: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  }
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <Carousel autoplay dots>
          <div className={styles.carouselItem}>
            <Space direction='vertical' className={styles.carouselLeft}>
              <Title className={styles.title}>X-Camp Online Open House</Title>
              <Space direction='vertical'>
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
              <Button shape='round' className={styles.joinUs}>JOIN US</Button>
              <Text className={styles.date}>*Every Tuesday 6:30pm-7:30pm PT</Text>
            </Space>
            <Card
              title="Free Consultation"
              extra={
                <Image
                  src="/image/home/think.png"
                  alt="logo"
                  preview={false}
                  width={60}
                  height={50}
                  style={{ marginTop: 6 }}
                />
              }
              className={styles.carouselRight}
              headStyle={{
                color: '#fff',
                backgroundColor: '#FFAD11',
              }}
            >
              <Form
                name="basic"
                onFinish={onFinish}
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
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselContent;
