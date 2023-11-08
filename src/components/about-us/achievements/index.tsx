'use client';
import { useGetProjectsDemo } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from './index.module.scss';

const { Content } = Layout;
const Banner = dynamic(() => import('@/components/about-us/achievements/banner'));
const USACOSpotlight = dynamic(() => import('@/components/about-us/achievements/usaco-spotlight'));
const TimeLine = dynamic(() => import('@/components/about-us/achievements/time-line'));
const UsacoMedal = dynamic(() => import('@/components/common/usaco-medal'));
const ProjectsDemo = dynamic(() => import('@/components/about-us/achievements/projects-demo'));

const Achievements: React.FC = () => {
  const { data } = useGetProjectsDemo();

  return (
    <Layout className={styles.introductionContainer}>
      <Content>
        <Banner />
        <USACOSpotlight />
        <TimeLine />
        <UsacoMedal style={{ backgroundColor: '#EFEFEF' }} spacePaddingTop={0} />
        <ProjectsDemo data={data} />
      </Content>
    </Layout>
  );
};

export default Achievements;
