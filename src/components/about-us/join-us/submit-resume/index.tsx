'use client';
import { Layout } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import Banner from './banner';
import Resume from './resume';
import JoinUsFaculty from '../join-us-faculty';

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
