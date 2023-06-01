'use client';
import React from 'react';
import { Space, Typography, Row, Col, Card, Image, Button } from 'antd';
import styles from './FacultyPartners.module.scss';
import { SwapLeftOutlined, SwapRightOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const FacultyPartners: React.FC = () => {
  return (
    <div className={styles.facultyPartners}>
      <Space direction='vertical' size={24} align='center'>
        <Title className={styles.title}>
          Faculty & Partners
        </Title>
        <Paragraph className={styles.paragraph}>
          X-Camp has its own Art of Python Programming contest 4.0 award and other projects and event every quarter to inspire students . It is a great opportunity for students to showcase what they have learned from classes .
        </Paragraph>
        <Space size={20}>
          <Image
            alt=""
            src='/image/home/Calico.png'
            preview={false}
            width={220}
            height={60}
          />
          <Image
            alt=""
            src='/image/home/Calico.png'
            preview={false}
            width={220}
            height={60}
          />
          <Image
            alt=""
            src='/image/home/Calico.png'
            preview={false}
            width={220}
            height={60}
          />
          <Image
            alt=""
            src='/image/home/Calico.png'
            preview={false}
            width={220}
            height={60}
          />
          <Image
            alt=""
            src='/image/home/Calico.png'
            preview={false}
            width={220}
            height={60}
          />
        </Space>
      </Space>
    </div >
  )
}

export default FacultyPartners;
