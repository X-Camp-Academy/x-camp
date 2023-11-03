'use client';
import { FaqCategory } from '@/apis/strapi-client/define';
import { useGetCourses, useGetFaq, useGetReviews } from '@/apis/strapi-client/strapi';
import Faculty from '@/components/common/faculty';
import Faqs from '@/components/common/faqs';
import Reviews from '@/components/common/reviews';
import UsacoMedal from '@/components/common/usaco-medal';
import { useLang } from '@/hoc/with-intl/define';
import { Layout } from 'antd';
import { useParams } from 'next/navigation';
import React from 'react';
import CourseClassesContext from '../CourseClassesContext';
import Banner from './banner';
import styles from './index.module.scss';
import Syllabus from './syllabus';

const { Content } = Layout;

const CourseDetail: React.FC = () => {
  const params = useParams();
  const { format: t } = useLang();

  const { data: reviewsData } = useGetReviews({
    ready: true,
    courseId: [params?.courseId as string]
  });

  const { data: coursesData } = useGetCourses({
    filters: {
      id: { $eq: Number(params?.courseId) }
    }
  });

  const { data: faqData } = useGetFaq({
    ready: true,
    category: FaqCategory.CoursesQA,
    courseId: [params?.courseId as string]
  });

  return (
    <Layout className={styles.courseDetail}>
      <Content>
        <CourseClassesContext.Provider value={coursesData ? coursesData?.data[0] : undefined}>
          <Banner />
          <Syllabus />
          {/* <ProgressionClasses /> */}
        </CourseClassesContext.Provider>

        <UsacoMedal style={{ backgroundColor: '#EFEFEF' }} />
        <Faculty />
        <Faqs title={t('CoursesFAQS')} data={faqData} />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default CourseDetail;
