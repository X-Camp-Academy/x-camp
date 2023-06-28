"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import { Content } from "antd/es/layout/layout";

import dynamic from "next/dynamic";

const TopBanner = dynamic(() => import("./TopBanner"));
const CalendarContent = dynamic(() => import("./CalendarContent"));

const RecentActivities = dynamic(
  () =>
    import("@/components/resources/weekly-education-forum/recent-activities")
);
const DiscoverCourses = dynamic(
  () => import("@/components/home/DiscoverCourses")
);

const CalendarPage: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.introductionContainer}>
        <Content>
          <TopBanner />
          <CalendarContent />
          <DiscoverCourses />
          <br />
          <br />
          <br />
          <br />
          <RecentActivities />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default CalendarPage;
