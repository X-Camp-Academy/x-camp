"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import Testimony from "@/components/home/Testimony";
import TopBanner from "./top-banner";
import UpcomingEvents from "./upcoming-events";
import RecentActivities from "./recent-activities";
import Activities from "./activities";
const { Content } = Layout;

const WeeklyEducationForum = () => {
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
          <Testimony />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default WeeklyEducationForum;
