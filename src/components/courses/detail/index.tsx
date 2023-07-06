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
import {
  useGetCourseDetail,
  useGetTestimony,
} from "@/apis/strapi-client/strapi";
const { Content } = Layout;

const CourseDetail = () => {
  const { data } = useGetCourseDetail();

  //获取师生评价数据
  const { data: testimonyData } = useGetTestimony();

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
