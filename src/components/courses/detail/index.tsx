"use client";
import React from "react";
import { Layout } from "antd";
import { useParams } from "next/navigation";
import { useLang } from "@/hoc/with-intl/define";
import UsacoMedal from "@/components/common/usaco-medal";
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
import Faculty from "@/components/common/faculty";

const { Content } = Layout;

const CourseDetail: React.FC = () => {
  const params = useParams();
  const { format: t } = useLang();

  const { data: reviewsData } = useGetReviews({
    ready: true,
    courseId: [params?.courseId as string],
  });

  const { data: coursesData } = useGetCourses({
    filters: {
      id: { $eq: Number(params?.courseId) },
    },
  });


  const { data: faqData } = useGetFaq({
    ready: true,
    category: FaqCategory.CoursesQA,
    courseId: [params?.courseId as string],
  });


  return (
    <Layout className={styles.courseDetail}>
      <Content>
        <CourseClassesContext.Provider
          value={coursesData ? coursesData?.data[0] : undefined}
        >
          <CourseBanner />
          <CourseSyllabus />
          <ProgressionClasses />
        </CourseClassesContext.Provider>

        <UsacoMedal showTitle />

        <Faculty />

        <Faqs title={t("CoursesFAQS")} data={faqData} />
        <Reviews
          className={styles.comments}
          reviewsData={reviewsData}
        />
      </Content>
    </Layout>
  );
};

export default CourseDetail;
