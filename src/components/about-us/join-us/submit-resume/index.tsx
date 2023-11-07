'use client';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from './index.module.scss';

const Banner = dynamic(() => import('./banner'));
const Resume = dynamic(() => import('./resume'));
const JoinUsFaculty = dynamic(() => import('../join-us-faculty'));

const { Content } = Layout;

const SubmitResume: React.FC = () => {
  return (
    <Layout className={styles.joinUsContainer}>
      <Content>
        <Banner />
        <Resume />
        <JoinUsFaculty />
      </Content>
    </Layout>
  );
};

export default SubmitResume;
