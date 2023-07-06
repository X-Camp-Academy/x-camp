"use client";
import React from "react";
import styles from "./index.module.scss";
import { ConfigProvider, Layout } from "antd";
import TopBanner from "./top-banner";
import ScheduleTable from "./schedule-table";
import Testimony from "@/components/home/Testimony";
import { useGetTestimony } from "@/apis/strapi-client/strapi";
const { Content } = Layout;
const CourseCatalog = () => {
  //获取师生评价数据
  const { data: testimonyData } = useGetTestimony({ ready: true });
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
          <Testimony testimonyData={testimonyData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default CourseCatalog;
