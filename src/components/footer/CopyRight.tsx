'use client';
import React from 'react';
import { Space, Row, Col, Card, Image, Typography } from 'antd';
import styles from './CopyRight.module.scss';
import { CalculatorOutlined, ClockCircleOutlined, FacebookOutlined, LinkedinOutlined, NodeIndexOutlined, PhoneOutlined, TwitterOutlined, WechatOutlined, YoutubeOutlined } from '@ant-design/icons';
import Link from 'next/link';


const { Paragraph, Text } = Typography;

const CopyRight: React.FC = () => {
  return (
    <div className={styles.copyRightContainer}>
      <div className={styles.copyRight}>
        <Space className={styles.copyRightTop}>
          <Space direction='vertical'>
            <Image
              alt=''
              src='/image/home/footer-logo-1.png'
              preview={false}
              width={96}
              height={96}
            />
            <Space direction='vertical'>
              <Paragraph className={styles.paragraph}>
                <PhoneOutlined />
                <Text className={styles.text}>Tel: 510-708-8390</Text>
              </Paragraph>
              <Paragraph className={styles.paragraph}>
                <ClockCircleOutlined />
                <Text className={styles.text}>Office Hour: 9am - 5pm PT(Monday Off)</Text>
              </Paragraph>
              <Paragraph className={styles.paragraph}>
                <CalculatorOutlined />
                <Text className={styles.text}>School Address: 4950 Mitty Way, San Jose, CA 95129 USA</Text>
              </Paragraph>
              <Paragraph className={styles.paragraph}>
                <NodeIndexOutlined />
                <Text className={styles.text}>Office Address: 12280 Saratoga Sunnyvale Rd, #203 CA 95070</Text>
              </Paragraph>
            </Space>
          </Space>

          <Space size={96} align='start' className={styles.spaceRight}>
            <Space direction='vertical'>
              <Text className={styles.title}>X-Camp Academy</Text>
              <Link href={'/'}>Achievements</Link>
              <Link href={'/'}>About us</Link>
              <Link href={'/'}>Faculty</Link>
            </Space>
            <Space direction='vertical'>
              <Text className={styles.title}>Campus</Text>
              <Link href={'/'}>Main Campus</Link>
              <Link href={'/'}>Austin Branch</Link>
            </Space>
            <Space direction='vertical'>
              <Text className={styles.title}>Quick Links</Text>
              <Link href={'/'}>CS Competition</Link>
              <Link href={'/'}>Enroll</Link>
              <Link href={'/'}>FAQs</Link>
            </Space>
          </Space>

        </Space>
        <div className={styles.bar}></div>
        <Space className={styles.copyRightBottom}>
          <Text className={styles.bottomText}>Copyright @ 2021 X-Camp</Text>
          <Space>
            <Text className={styles.bottomText}>Follow us:</Text>
            <Link href='/'>
              <YoutubeOutlined className={styles.bottomIcon} />
            </Link>
            <Link href='/'>
              <FacebookOutlined className={styles.bottomIcon} />
            </Link>
            <Link href='/'>
              <LinkedinOutlined className={styles.bottomIcon} />
            </Link>
            <Link href='/'>
              <TwitterOutlined className={styles.bottomIcon} />
            </Link>
            <Link href='/'>
              <WechatOutlined className={styles.bottomIcon} />
            </Link>
          </Space>
        </Space>
      </div>
    </div >
  )
}

export default CopyRight;
