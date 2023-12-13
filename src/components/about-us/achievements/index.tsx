'use client';
import { useGetProjectDemos } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import Banner from '@/components/about-us/achievements/banner';
import USACOSpotlight from '@/components/about-us/achievements/usaco-spotlight';
import TimeLine from '@/components/about-us/achievements/time-line';
import UsacoMedal from '@/components/common/usaco-medal';
// import ProjectDemos from '@/components/about-us/achievements/project-demos';

const { Content } = Layout;
const Achievements: React.FC = () => {
  const { data } = useGetProjectDemos();

  return (
    <Layout className={styles.introductionContainer}>
      <Content>
        <Banner />
        <USACOSpotlight />
        <TimeLine />
        <UsacoMedal style={{ backgroundColor: '#EFEFEF' }} spacePaddingTop={0} />
        {/* <ProjectDemos data={data} /> */}
      </Content>
    </Layout>
  );
};

export default Achievements;
