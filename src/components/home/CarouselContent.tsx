'use client';
import React from 'react';
import { Carousel, Space, Button, Card, Form, Input } from 'antd';
import styles from './CarouselContent.module.scss';

const CarouselContent: React.FC = () => {
  const onFinish = (values) => {
    console.log(values);
  }
  return (
    <div className={styles.carouselContainer}>
      <Carousel autoplay dots>
        <div
          className={styles.space}
        >
          <div className={styles.carouselLeft}>
            <h1>X-Camp Online Open House</h1>
            <div className={styles.description}>
              <p>Evaluate student's programming level</p>
              <p>Make&nbsp;a&nbsp;programming&nbsp;learning&nbsp;plan&nbsp;and&nbsp;</p>
              <p>course&nbsp;schedule&nbsp;consultation</p>
            </div>
            <button className={styles.joinUs}>JOIN US</button>
            <p className={styles.date}>*Every&nbsp;Tuesday&nbsp;6:30pm-7:30pm&nbsp;PT</p>
          </div>
          <Card
            title="Free Consultation"
            extra={<a href="#">More</a>}
            className={styles.carouselRight}
            headStyle={{
              color: '#fff',
              backgroundColor: '#fabb07',
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
  )
}

export default CarouselContent;
