'use client';
import { ConfigProvider, Layout } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import TopBanner from './top-banner';
import UsacoIntro from './introduction';
import RelateResources from './relate-resources';
import Comments from '@/components/home/Comments';
const { Content } = Layout;

const UsacoLiveSolutions = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFAD11',
        },
      }}
    >
      <Layout className={styles.usacoLiveSolutions}>
        <Content>
          <TopBanner />
          <UsacoIntro />
          <RelateResources />
          <Comments className={styles.comments} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default UsacoLiveSolutions;
