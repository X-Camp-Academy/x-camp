'use client';
import React from 'react';
import { Space, Row, Col, Card, Image, Typography, Button, Input } from 'antd';
import styles from './SubscribeNewsletter.module.scss';
import { CalculatorOutlined, ClockCircleOutlined, FacebookOutlined, LinkedinOutlined, NodeIndexOutlined, PhoneOutlined, TwitterOutlined, WechatOutlined, YoutubeOutlined } from '@ant-design/icons';
import Link from 'next/link';


const { Paragraph, Text } = Typography;

const SubscribeNewsletter: React.FC = () => {
  return (
    <div className={styles.subscribeNewsletterContainer}>
      <div className={styles.subscribeNewsletter}>
        <Space align='end' size={48} className={styles.space}>
          <Image
            alt=''
            src='/image/home/Course-4.png'
            preview={false}
            width={150}
            height={150}
          />
          <Text className={styles.text}>抢先一步，免费领取奥林匹克编程大礼包</Text>
          <Input placeholder='填写你的邮箱' />
          <Button>订阅Newsletter</Button>
        </Space>
      </div>
    </div >
  )
}

export default SubscribeNewsletter;
