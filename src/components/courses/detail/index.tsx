"use client";
import React from "react";
import styles from "./index.module.scss";
import { ConfigProvider, Layout } from "antd";
import Testimony from "@/components/home/Testimony";
import TopBanner from "./top-banner";
import UsacoMedal from "@/components/about-us/introduction/UsacoMedal";
import FacultyCoach from "@/components/about-us/introduction/FacultyCoach";
import ProgressionClasses from "./progression-classes";
import {
  useGetCourseDetail,
  useGetFaq,
  useGetTestimony,
} from "@/apis/strapi-client/strapi";
import { FaqCategory } from "@/apis/strapi-client/define";
import Faqs from "@/components/common/faqs";
import { useParams } from "next/navigation";
const { Content } = Layout;

const CourseDetail = () => {
  const params = useParams();
  const { data } = useGetCourseDetail();

  // 请求当前 courseId 的评论
  const { data: testimonyData } = useGetTestimony({
    ready: true,
    courseId: [params?.courseId],
  });

  const { data: faq } = useGetFaq({
    ready: true,
    category: FaqCategory.CoursesQA,
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.courseDetail}>
        <Content>
          <TopBanner />
          <UsacoMedal />
          <FacultyCoach />
          <ProgressionClasses />
          <Faqs title="Course FAQs" data={faq} />
          <Testimony
            className={styles.comments}
            testimonyData={testimonyData}
          />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default CourseDetail;
