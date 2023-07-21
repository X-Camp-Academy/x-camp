"use client";
import React from "react";
import styles from "./index.module.scss";
import { ConfigProvider, Layout } from "antd";
import Reviews from "@/components/common/reviews";
import TopBanner from "./top-banner";
import UsacoMedal from "@/components/common/usaco-cards";
import FacultyCoach from "@/components/about-us/introduction/FacultyCoach";
import ProgressionClasses from "./progression-classes";
import { useGetCourses } from "@/apis/strapi-client/strapi";
import { useGetFaq, useGetReviews } from "@/apis/strapi-client/strapi";
import { FaqCategory } from "@/apis/strapi-client/define";
import Faqs from "@/components/common/faqs";
import { useParams } from "next/navigation";
import CourseClassesContext from "./CourseClasses";
import { useLang } from "@/hoc/with-intl/define";
import CourseSyllabus from "./course-syllabus";

const { Content } = Layout;

const CourseDetail = () => {
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
            <TopBanner />
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
