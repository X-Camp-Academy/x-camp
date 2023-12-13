'use client';
import { Layout } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import Banner from './banner';
import JobSelection from './job-selection';
import JoinUsFaculty from './join-us-faculty';

const { Content } = Layout;

const JoinUs: React.FC = () => {
  return (
    <Layout className={styles.joinUsContainer}>
      <Content>
        <Banner />
        <JobSelection />
        <JoinUsFaculty />
      </Content>
    </Layout>
  );
};

export default JoinUs;
