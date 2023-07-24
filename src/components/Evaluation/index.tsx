'use client';
import React, { useEffect, useState } from 'react';
import { ConfigProvider, Layout } from 'antd';
import styles from './index.module.scss';
import dynamic from 'next/dynamic';
import { useGetNewEvent, useGetReviews } from '@/apis/strapi-client/strapi';
import { NewEventCategory } from '@/apis/strapi-client/define';
import dayjs from 'dayjs';
import { Content } from 'antd/es/layout/layout';

const EvaluationForm = dynamic(() => import('./EvaluationForm'));
const TopBanner = dynamic(() => import('./top-banner'));
const Reviews = dynamic(() => import('../common/reviews'));

const Evalation: React.FC = () => {

    //获取师生评价数据
    const { data } = useGetReviews({
        ready: true,
        pageName: ["/home/"], // 因为首页的路由是空字符串，约定用/home/表示
    });

    const reviewsData = data?.sort((a, b) => b?.attributes?.order - a?.attributes?.order);
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

                    <TopBanner />
                    <EvaluationForm />
                    <Reviews reviewsData={reviewsData} />
                </Content>
            </Layout>
        </ConfigProvider>
    )
}

export default Evalation;
