'use client';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from './index.module.scss';

const CopyRight = dynamic(() => import('./CopyRight'));
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
