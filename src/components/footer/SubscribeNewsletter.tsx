'use client';
import React from 'react';
import { Space, Row, Col, Card, Image, Typography, Button, Input } from 'antd';
import styles from './SubscribeNewsletter.module.scss';

const { Paragraph, Text } = Typography;

const SubscribeNewsletter: React.FC = () => {
  return (
    <div className={styles.subscribeNewsletterContainer}>
      <div className={styles.subscribeNewsletter}>
        <Space align='end' size={24} className={styles.space}>
          <Image
            alt=''
            src='/image/home/course-4.png'
            preview={false}
            width={150}
            height={150}
          />
          <Space size={24} className={styles.right}>
            <Text className={styles.text}>抢先一步，免费领取奥林匹克编程大礼包</Text>
            <Input className={styles.input} placeholder='填写你的邮箱' />
            <Button className={styles.button}>订阅Newsletter</Button>
          </Space>
        </Space>
      </div>
    </div >
  )
}

export default SubscribeNewsletter;
