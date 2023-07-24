'use client';
import React from 'react';
import { Layout } from 'antd';
import styles from './index.module.scss';
import dynamic from 'next/dynamic';
import { Content } from 'antd/es/layout/layout';

const EvaluationForm = dynamic(() => import('./EvaluationForm'));

const Evalation: React.FC = () => {
  return (
    <Layout className={styles.evaluationFormContainer}>
      <Content>
        <EvaluationForm />
      </Content>
    </Layout>
  )
}

export default Evalation;
