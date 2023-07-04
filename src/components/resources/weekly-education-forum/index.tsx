"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import Testimony from "@/components/home/Testimony";
import TopBanner from "./top-banner";
import UpcomingEvents from "./upcoming-events";
import RecentActivities from "./recent-activities";
import Activities from "./activities";
import { useGetTestimony } from "@/apis/strapi-client/strapi";
const { Content } = Layout;

const WeeklyEducationForum = () => {
  //获取师生评价数据
  const { data: testimonyData } = useGetTestimony();

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
          <Testimony testimonyData={testimonyData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default WeeklyEducationForum;
