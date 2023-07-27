"use client";
import React from "react";
import { Layout } from "antd";
import dynamic from "next/dynamic";
import Reviews from "@/components/common/reviews";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import styles from "./index.module.scss";

const TopBanner = dynamic(() => import("./Banner"));
const CalendarContent = dynamic(() => import("./CalendarContent"));
const RecentActivities = dynamic(
  () =>
    import("@/components/resources/weekly-education-forum/recent-activities")
);
const DiscoverCourses = dynamic(
  () => import("@/components/common/discover-courses")
);

const { Content } = Layout;

const Calendar: React.FC = () => {
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: ["/home/"],
  });
  return (
    <Layout className={styles.introductionContainer}>
      <Content>
        <TopBanner />
        <CalendarContent />
        <DiscoverCourses showSubTitle align="flex-start" showBg={false} />
        <RecentActivities />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Calendar;
