'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Layout } from 'antd';
import styles from './index.module.scss';

const Banner = dynamic(() => import('./banner'));
const Resume = dynamic(() => import('./resume'));
const JoinUsFaculty = dynamic(() => import('../join-us-faculty'));
// const WhyWorkWithUs = dynamic(() => import("../why-work-with-us"));

const { Content } = Layout;

const SubmitResume: React.FC = () => {
  return (
    <Layout className={styles.joinUsContainer}>
      <Content>
        <Banner />
        <Resume />
        <JoinUsFaculty />
        {/* <WhyWorkWithUs /> */}
      </Content>
    </Layout>
  );
};

export default SubmitResume;
