'use client';
import { useGetProjectDemos } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from './index.module.scss';

const { Content } = Layout;
const Banner = dynamic(() => import('@/components/about-us/achievements/banner'));
const USACOSpotlight = dynamic(() => import('@/components/about-us/achievements/usaco-spotlight'));
const TimeLine = dynamic(() => import('@/components/about-us/achievements/time-line'));
const UsacoMedal = dynamic(() => import('@/components/common/usaco-medal'));
const ProjectDemos = dynamic(() => import('@/components/about-us/achievements/project-demos'));

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
