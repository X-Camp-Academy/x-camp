'use client';
import React from 'react';
import { Space, Typography, Row, Col, Card, Image, Button } from 'antd';
import styles from './Partners.module.scss';

const { Title, Paragraph, Text } = Typography;

const Partners: React.FC = () => {
  return (
    <div className={styles.partners}>
      <Space direction='vertical' align='center'>
        <Title className={styles.title}>Partners</Title>
        <Paragraph className={styles.paragraph}>
          X-Camp has its own Art of Python Programming contest 4.0 award and other projects and event every quarter to inspire students . It is a great opportunity for students to showcase what they have learned from classes .
        </Paragraph>
        <Space>
          <Image
            alt=""
            src='/image/home/partners-1.png'
            preview={false}
            width={224}
            height={64}
          />
          <Image
            alt=""
            src='/image/home/partners-2.png'
            preview={false}
            width={226}
            height={64}
          />
          <Image
            alt=""
            src='/image/home/partners-3.png'
            preview={false}
            width={200}
            height={64}
          />
          <Image
            alt=""
            src='/image/home/partners-4.png'
            preview={false}
            width={80}
            height={64}
          />
          <Image
            alt=""
            src='/image/home/partners-5.png'
            preview={false}
            width={168}
            height={64}
          />
          <Image
            alt=""
            src='/image/home/partners-6.png'
            preview={false}
            width={216}
            height={64}
          />
        </Space>
      </Space>
    </div >
  )
}

export default Partners;
