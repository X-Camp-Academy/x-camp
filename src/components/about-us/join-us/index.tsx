'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Layout } from 'antd';
import styles from './index.module.scss';

const Banner = dynamic(() => import('./banner'));
const JobSelection = dynamic(() => import('./job-selection'));
const JoinUsFaculty = dynamic(() => import('./join-us-faculty'));
const WhyWorkWithUs = dynamic(() => import('./why-work-with-us'));

const { Content } = Layout;

const JoinUs: React.FC = () => {
  return (
    <Layout className={styles.joinUsContainer}>
      <Content>
        <Banner />
        {/*<WhyWorkWithUs />*/}
        <JobSelection />
        <JoinUsFaculty />
      </Content>
    </Layout>
  );
};

export default JoinUs;
