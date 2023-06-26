'use client';
import React from 'react';
import { Space, Row, Col, Card, Image, ConfigProvider, Layout } from 'antd';
import styles from './index.module.scss';
import { Content } from 'antd/es/layout/layout';

import dynamic from "next/dynamic";
const TopBanner = dynamic(() => import("@/components/about-us/achievements/TopBanner"))
const USACOMedal = dynamic(() => import("@/components/about-us/achievements/USACOMedal"))
const ArtOfProgrammingResults = dynamic(() => import("@/components/about-us/achievements/ArtOfProgrammingResults"))

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
          <ArtOfProgrammingResults/>
        </Content>
      </Layout>
    </ConfigProvider>
  )
}

export default Achievements;
