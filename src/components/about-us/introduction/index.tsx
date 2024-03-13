'use client';
import Partners from '@/components/common/partners';
import XCampFounders from '@/components/common/xcamp-founders';
import { Layout } from 'antd';
import React from 'react';
import AboutXCamp from './about-xcamp';
import Banner from './banner';
import History from './history';
import styles from './index.module.scss';

const { Content } = Layout;

const Introduction: React.FC = () => {
  return (
    <Layout className={styles.introductionContainer}>
      <Content>
        <Banner />
        <AboutXCamp />
        <History />
        <XCampFounders />
        <Partners />
      </Content>
    </Layout>
  );
};

export default Introduction;
