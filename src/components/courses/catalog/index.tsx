"use client";
import React from "react";
import styles from "./index.module.scss";
import { ConfigProvider, Layout } from "antd";
import TopBanner from "./top-banner";
import ScheduleTable from "./schedule-table";
import Testimony from "@/components/home/Testimony";
const { Content } = Layout;
const CourseCatalog = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.courseCatalog}>
        <Content>
          <TopBanner />
          <ScheduleTable />
          <Testimony />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default CourseCatalog;
