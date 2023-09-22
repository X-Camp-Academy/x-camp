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
const ArtOfProgrammingResults = dynamic(() => import('@/components/about-us/achievements/art-of-programming-results'));

const Achievements: React.FC = () => {
  const { data: projectsDemo } = useGetProjectsDemo();

  return (
    <Layout className={styles.introductionContainer}>
      <Content>
        <Banner />
        <USACOSpotlight />
        <TimeLine />
        <UsacoMedal />
        <ArtOfProgrammingResults data={projectsDemo} />
      </Content>
    </Layout>
  );
};

export default Achievements;
