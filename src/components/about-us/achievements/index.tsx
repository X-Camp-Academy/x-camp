'use client';
import React from 'react';
import { Space, Row, Col, Card, Image, ConfigProvider, Layout } from 'antd';
import styles from './index.module.scss';
import { Content } from 'antd/es/layout/layout';
import TopBanner from './TopBanner';
import USACOMedal from './USACOMedal';
import dynamic from "next/dynamic";

const Achievements: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.introductionContainer}>
        <Content>
          <TopBanner />
          <USACOMedal/>
        </Content>
      </Layout>
    </ConfigProvider>
  )
}

export default Achievements;
