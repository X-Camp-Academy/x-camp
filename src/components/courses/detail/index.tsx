"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Layout } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import UsacoMedal from "@/components/common/usaco-medal";
import Reviews from "@/components/common/reviews";
import Faqs from "@/components/common/faqs";
import Banner from "./banner";
import Syllabus from "./syllabus";
import ProgressionClasses from "./progression-classes";
import Faculty from "@/components/common/faculty";
import CourseClassesContext from "../CourseClassesContext";
import { useGetCourses } from "@/apis/strapi-client/strapi";
import { useGetFaq, useGetReviews } from "@/apis/strapi-client/strapi";
import { FaqCategory } from "@/apis/strapi-client/define";
import styles from "./index.module.scss";

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
          <Banner />
          <Syllabus />
          <ProgressionClasses />
        </CourseClassesContext.Provider>

        <UsacoMedal />
        <Faculty />
        <Faqs title={t("CoursesFAQS")} data={faqData} />
        <Reviews
          reviewsData={reviewsData}
        />
      </Content>
    </Layout>
  );
};

export default CourseDetail;
