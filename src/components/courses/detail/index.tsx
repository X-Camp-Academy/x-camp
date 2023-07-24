"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import { useParams } from "next/navigation";
import { useLang } from "@/hoc/with-intl/define";
import UsacoMedal from "@/components/common/usaco-cards";
import FacultyCoach from "@/components/about-us/introduction/FacultyCoach";
import Reviews from "@/components/common/reviews";
import Faqs from "@/components/common/faqs";
import CourseBanner from "./course-banner";
import CourseSyllabus from "./course-syllabus";
import ProgressionClasses from "./progression-classes";
import CourseClassesContext from "../CourseClasses";
import { useGetCourses } from "@/apis/strapi-client/strapi";
import { useGetFaq, useGetReviews } from "@/apis/strapi-client/strapi";
import { FaqCategory } from "@/apis/strapi-client/define";
import styles from "./index.module.scss";

const { Content } = Layout;

const CourseDetail: React.FC = () => {
  const params = useParams();
  const { format: t } = useLang();
  // 请求当前 courseId 的评论
  const { data: reviewsData } = useGetReviews({
    ready: true,
    courseId: [params?.courseId],
  });

  const { data: coursesData } = useGetCourses({
    filters: {
      id: { $eq: Number(params?.courseId) },
    },
  });


  const { data: faq } = useGetFaq({
    ready: true,
    category: FaqCategory.CoursesQA,
    courseId: [params?.courseId],
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
          <CourseClassesContext.Provider
            value={coursesData ? coursesData?.data[0] : undefined}
          >
            <CourseBanner />
            <CourseSyllabus />
            <ProgressionClasses />
          </CourseClassesContext.Provider>
          <div
            className="container"
            style={{
              marginTop: 150,
            }}
          >
            <UsacoMedal showTitle={true} />
          </div>
          <FacultyCoach />
          <Faqs title={t("CoursesFAQS")} data={faq} />
          <Reviews
            className={styles.comments}
            reviewsData={reviewsData}
          />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default CourseDetail;
