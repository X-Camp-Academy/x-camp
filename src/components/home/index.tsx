'use client';
import React from 'react';
import Link from 'next/link';
import { Layout } from 'antd';
import Carousel  from './Carousel';
import styles from './index.module.scss';

const { Content } = Layout;

const Home: React.FC = () => {
  return (
    <Layout>
      <Content className={styles.homeContainer}>
        <Carousel />
      </Content>
    </Layout>
  )
}

export default Home;
