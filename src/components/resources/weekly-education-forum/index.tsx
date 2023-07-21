"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import Reviews from "@/components/common/reviews";
import TopBanner from "./top-banner";
import UpcomingEvents from "./upcoming-events";
import RecentActivities from "./recent-activities";
import Activities from "./activities";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import { usePathname } from "next/navigation";
const { Content } = Layout;

const WeeklyEducationForum = () => {
  const pathname = usePathname();
  //获取师生评价数据
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname],
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.main}>
        <Content>
          <TopBanner />
          <UpcomingEvents />
          <RecentActivities />
          <Activities />
          <Reviews reviewsData={reviewsData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default WeeklyEducationForum;
