'use client';
import { FaqCategory } from '@/apis/strapi-client/define';
import { useGetCourses, useGetFaq } from '@/apis/strapi-client/strapi';
import Faqs from '@/components/common/faqs';
import { useLang } from '@/hoc/with-intl/define';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';
import Levels from './5-levels';
import Banner from './banner';
import styles from './index.module.scss';
import Introduction from './introduction';
const { Content } = Layout;

const ProbsChallenge = () => {
  const pathname = usePathname();
  const { format: t } = useLang();
  // 请求类别为CoursesQA, courseId为isCamp课程, pageName 为"/courses/camps/"的Faq
  const { data: courses } = useGetCourses({
    filters: {
      isCamp: {
        $eq: true
      }
    }
  });

  const { data: faq } = useGetFaq({
    ready: Boolean(courses),
    category: FaqCategory.CoursesQA,
    courseId: courses?.data?.map((v) => String(v?.id)),
    pageName: [pathname as string]
  });

  return (
    <Layout className={styles.page}>
      <Content>
        <Banner />
        <Introduction />
        <Levels />
        <Faqs title={t('CampsFAQs')} data={faq} />
      </Content>
    </Layout>
  );
};

export default ProbsChallenge;
