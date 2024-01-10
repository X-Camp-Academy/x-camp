'use client';
import { Layout } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import Banner from './banner';
import AboutXCamp from './about-xcamp';
import History from './history';
import XCampFounders from '@/components/common/xcamp-founders';
import FacultyCoaches from '@/components/common/faculty-coaches';
import Partners from '@/components/common/partners';

const { Content } = Layout;

const Introduction: React.FC = () => {
  return (
    <Layout className={styles.introductionContainer}>
      <Content>
        <Banner />
        <AboutXCamp />
        <History />
        <XCampFounders />
        <FacultyCoaches />
        <Partners />
      </Content>
    </Layout>
  );
};

export default Introduction;
