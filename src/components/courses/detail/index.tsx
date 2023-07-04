"use client";
import React from "react";
import styles from "./index.module.scss";
import { ConfigProvider, Layout } from "antd";
import Testimony from "@/components/home/Testimony";
import TopBanner from "./top-banner";
import UsacoMedal from "@/components/about-us/introduction/UsacoMedal";
import FacultyCoach from "@/components/about-us/introduction/FacultyCoach";
import CampFAQS from "../camps/camp-faqs";
import ProgressionClasses from "./progression-classes";
import { useGetCourseDetail } from "@/apis/strapi-client/strapi";
const { Content } = Layout;

const CourseDetail = () => {
  const { data } = useGetCourseDetail();
  console.log(data);
  
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
          <CampFAQS title="Course FAQs" />
          <Testimony className={styles.comments} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default CourseDetail;
