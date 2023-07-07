"use client";
import React from "react";
import styles from "./index.module.scss";
import { ConfigProvider, Layout } from "antd";
import Testimony from "@/components/home/Testimony";
import TopBanner from "./top-banner";
import UsacoMedal from "@/components/about-us/introduction/UsacoMedal";
import FacultyCoach from "@/components/about-us/introduction/FacultyCoach";
import ProgressionClasses from "./progression-classes";
import { useGetClasses, useGetCourses } from "@/apis/strapi-client/strapi";
import { useGetFaq, useGetTestimony } from "@/apis/strapi-client/strapi";
import { FaqCategory, GetCourses } from "@/apis/strapi-client/define";
import Faqs from "@/components/common/faqs";
import { useParams } from "next/navigation";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import CourseClassesContext from "./CourseClasses";
const { Content } = Layout;

const CourseDetail = () => {
  const params = useParams();
  console.log(params);
  const { data: coursesData } = useGetCourses({
    id: { $eq: Number(params?.courseId) },
  });
  // console.log(coursesData);

  const { data } = useGetClasses();
  //获取师生评价数据
  const { data: testimonyData } = useGetTestimony();

  // console.log(data);

  const { data: faq } = useGetFaq({
    ready: true,
    category: FaqCategory.CoursesQA,
  });
  // StrapiResponseDataItem<GetCourses>

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
            value={coursesData ? coursesData[0] : undefined}
          >
            <TopBanner />
          </CourseClassesContext.Provider>
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
