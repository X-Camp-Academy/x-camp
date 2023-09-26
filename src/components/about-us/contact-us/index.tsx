'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import { Layout, message } from 'antd';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import styles from './index.module.scss';

const ContactCard = dynamic(() => import('./contact-card'));
const Banner = dynamic(() => import('./banner'));
const Reviews = dynamic(() => import('@/components/common/reviews'));
const QuestionForm = dynamic(() => import('./question-form'));
const AddressMap = dynamic(() => import('./address-map'));
const { Content } = Layout;

const ContactUs: React.FC = () => {
  const pathname = usePathname();
  const { hash } = window.location;
  const [messageApi, contextHolder] = message.useMessage();

  // 请求当前页面的评论
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });

  useEffect(() => {
    if (hash === '#trial-class') {
      messageApi.open({
        content: 'Welcome to contact us for your interested class. ',
        icon: <></>,
        style: {
          marginTop: '20vh',
          fontSize: 28,
          color: '#ffad11'
        }
      });
    }
  }, [hash]);
  return (
    <Layout className={styles.QAContainer}>
      <Content>
        {contextHolder}
        <Banner />
        <ContactCard />
        <QuestionForm />
        <AddressMap />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default ContactUs;
