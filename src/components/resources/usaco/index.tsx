'use client';
import { Layout } from 'antd';
import React from 'react';
import AMA from './ama';
import Banner from './banner';
import styles from './index.module.scss';
import Intro from './intro';
import PainPoints from './pain-points';

const { Content } = Layout;
const USACO: React.FC = () => {
  return (
    <Layout className={styles.usaco}>
      <Content>
        <Banner />
        <Intro />
        <AMA />
        <PainPoints />
      </Content>
    </Layout>
  );
};

export default USACO;
