"use client";
import React from "react";
import { ConfigProvider, Layout, Space } from "antd";
import styles from "./index.module.scss";
import { Content } from "antd/es/layout/layout";

import dynamic from "next/dynamic";
import Testimony from "@/components/home/Testimony";
import { useGetTestimony } from "@/apis/strapi-client/strapi";

const TopBanner = dynamic(() => import("./TopBanner"));
const CalendarContent = dynamic(() => import("./CalendarContent"));

const RecentActivities = dynamic(
  () =>
    import("@/components/resources/weekly-education-forum/recent-activities")
);
const DiscoverCourses = dynamic(
  () => import("@/components/common/discover-courses")
);

const CalendarPage = () => {
  const { data: testimonyData } = useGetTestimony({
    ready: true,
    pageName: ["/home/"],
  });
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
          <DiscoverCourses showSubTitle align="flex-start" showBg={false} />
          <RecentActivities />
          <Testimony testimonyData={testimonyData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default CalendarPage;
