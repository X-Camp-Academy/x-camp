'use client';
import { FaqCategory } from '@/apis/strapi-client/define';
import { useGetCourses, useGetFaq, useGetReviews } from '@/apis/strapi-client/strapi';
import ColorfulCard from '@/components/common/colorful-card';
import Faqs from '@/components/common/faqs';
import Reviews from '@/components/common/reviews';
import { useLang } from '@/hoc/with-intl/define';
import { Layout } from 'antd';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';
import CourseAbstract from '../course-abstract';
import Banner from './banner';
import styles from './index.module.scss';
import Introduction from './introduction';

const { Content } = Layout;

const CourseCamps: React.FC = () => {
  const params = useParams();
  const pathname = usePathname();
  const { format: t } = useLang();
  const { data: campsCourse } = useGetCourses({
    filters: {
      id: { $eq: Number(params?.courseId) }
    }
  });

  const { data: faq } = useGetFaq({
    ready: Boolean(campsCourse),
    category: FaqCategory.CampsQA,
    pageName: [pathname]
  });

  const { data: reviewsData } = useGetReviews({
    ready: Boolean(campsCourse),
    pageName: [pathname]
  });

  return (
    <Layout className={styles.courseCamps}>
      <Content>
        <Banner />
        <div className={`${styles.courseCard} container`}>
          <ColorfulCard border={'bottom'} index={1} animate={false}>
            <div className={styles.cardContent}>
              <CourseAbstract {...campsCourse?.data[0]?.attributes} />
            </div>
          </ColorfulCard>
        </div>
        <Introduction />
        <Faqs title={t('CampsFAQs')} data={faq} />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default CourseCamps;
