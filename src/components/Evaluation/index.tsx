'use client';
import React, { useEffect, useState } from 'react';
import { ConfigProvider, Layout } from 'antd';
import styles from './index.module.scss';
import dynamic from 'next/dynamic';
import { useGetNewEvent } from '@/apis/strapi-client/strapi';
import { NewEventCategory } from '@/apis/strapi-client/define';
import dayjs from 'dayjs';
import { Content } from 'antd/es/layout/layout';

const EvaluationForm = dynamic(() => import('./EvaluationForm'));

const Evalation : React.FC = () => {
    return (
        <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#FFAD11',
          },
        }}
      >
        <Layout className={styles.evaluationFormContainer}>
          <Content>
            <EvaluationForm />
          </Content>
        </Layout>
      </ConfigProvider>
    )
}

export default Evalation;
