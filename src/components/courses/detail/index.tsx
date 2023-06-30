"use client";
import React from "react";
import styles from "./index.module.scss";
import { ConfigProvider, Layout } from "antd";
import Comments from "@/components/home/Comments";
import TopBanner from "./top-banner";
import UsacoMedal from "@/components/about-us/introduction/UsacoMedal";
import FacultyCoach from "@/components/about-us/introduction/FacultyCoach";
import CampFAQS from "../camps/camp-faqs";
import ProgressionClasses from "./progression-classes";
const { Content } = Layout;

const CourseDetail = () => {
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
          <Comments className={styles.comments} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default CourseDetail;
