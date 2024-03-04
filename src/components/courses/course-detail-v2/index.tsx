'use client';
import { FaqCategory } from '@/apis/strapi-client/define';
import { useGetCourses, useGetFaq } from '@/apis/strapi-client/strapi';
import Faqs from '@/components/common/faqs';
import Reviews from '@/components/common/reviews';
import UsacoMedal from '@/components/common/usaco-medal';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Layout } from 'antd';
import { useParams } from 'next/navigation';
import React from 'react';
import CourseClassesContext from '../CourseClassesContext';
import Banner from './banner';
import CourseInfo from './course-info';
import CourseStructure from './course-structure';
import CourseSyllabus from './course-syllabus';
import CourseTabs from './course-tabs';
import Faculty from './faculty';
import styles from './index.module.scss';
import Introduction from './introduction';
import Service from './service';

const { Content } = Layout;

const CourseDetail: React.FC = () => {
  const params = useParams();
  const { format: t } = useLang();

  const isMobile = useMobile();

  const { data: coursesData } = useGetCourses({
    filters: {
      id: { $eq: Number(params?.courseId) }
    }
  });

  const { data: faqData } = useGetFaq({
    ready: true,
    category: FaqCategory.CoursesQA
  });

  const courseData = coursesData?.data[0];

  const courseLevel = Number(courseData?.attributes?.courseCode?.slice(0, 3));

  return (
    <Layout className={styles.courseDetail}>
      <Content>
        {courseData && (
          <CourseClassesContext.Provider value={{ ...courseData, courseLevel }}>
            <Banner />
            <CourseInfo />
            {isMobile && <UsacoMedal style={{ backgroundColor: '#EFEFEF' }} />}
            <CourseTabs />
            <Introduction />
            {courseLevel <= 302 && (
              <>
                <CourseStructure />
                <CourseSyllabus />
              </>
            )}
            <Service />
            {!isMobile && <UsacoMedal style={{ backgroundColor: '#EFEFEF' }} />}
            <Faculty />
          </CourseClassesContext.Provider>
        )}
        <Faqs title={t('CoursesFAQS')} data={faqData} className="tabContent" titleClassName={`tabTitle ${styles.faqTitle}`} id="faq" />
        <Reviews className="tabContent" reviewsData={courseData?.attributes?.reviews?.data} id="reviews" />
      </Content>
    </Layout>
  );
};

export default CourseDetail;
