"use client";
import React from "react";
import styles from "./index.module.scss";
import { ConfigProvider, Layout } from "antd";
import TopBanner from "./top-banner";
import ScheduleTable from "./schedule-table";
import Testimony from "@/components/home/Testimony";
import { useGetTestimony } from "@/apis/strapi-client/strapi";
import { usePathname } from "next/navigation";
const { Content } = Layout;
const CourseCatalog = () => {
  const pathname = usePathname();
  // 请求 pageName 为"/courses/catalog/"的评论
  const { data: testimonyData } = useGetTestimony({
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
