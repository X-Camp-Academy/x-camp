'use client';
import { useGetReviews } from '@/apis/strapi-client/strapi';
import { Layout, message } from 'antd';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';
import Banner from './banner';
import ContactCard from './contact-card';
import Reviews from '@/components/common/reviews';
import QuestionForm from './question-form';
import AddressMap from './address-map';

const { Content } = Layout;

const ContactUs: React.FC = () => {
  const pathname = usePathname();
  const [messageApi, contextHolder] = message.useMessage();

  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname]
  });

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
