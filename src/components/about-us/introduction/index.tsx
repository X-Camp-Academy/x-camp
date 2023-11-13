'use client';
import { useGetFaculty } from '@/apis/strapi-client/strapi';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from './index.module.scss';

const Banner = dynamic(() => import('./banner'));
const AboutXCamp = dynamic(() => import('./about-xcamp'));
const History = dynamic(() => import('./history'));
const XCampFounders = dynamic(() => import('@/components/common/xcamp-founders'));
const FacultyCoaches = dynamic(() => import('@/components/common/faculty-coaches'));
const Partners = dynamic(() => import('@/components/common/partners'));
const { Content } = Layout;

const Introduction: React.FC = () => {
  const { data: facultyData } = useGetFaculty({});

  return (
    <Layout className={styles.introductionContainer}>
      <Content>
        <Banner />
        <AboutXCamp />
        <History />
        <XCampFounders />
        <FacultyCoaches data={facultyData} />
        <Partners />
      </Content>
    </Layout>
  );
};

export default Introduction;
