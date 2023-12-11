'use client';
import { Layout } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import CopyRight from './CopyRight';

const { Content } = Layout;

const Footer: React.FC = () => {
  return (
    <Layout className={styles.footerContainer}>
      <Content>
        <CopyRight />
      </Content>
    </Layout>
  );
};

export default Footer;
