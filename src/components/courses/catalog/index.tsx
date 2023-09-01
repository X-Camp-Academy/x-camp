"use client";
import React from "react";
import styles from "./index.module.scss";
import { Layout } from "antd";
import TopBanner from "./top-banner";
import ScheduleTable from "./schedule-table";
import Reviews from "@/components/common/reviews";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import { usePathname } from "next/navigation";

const { Content } = Layout;

const CourseCatalog = () => {
  const pathname = usePathname();
  // 请求 pageName 为"/courses/catalog/"的评论
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname as string],
  });

  return (
    <Layout className={styles.courseCatalog}>
      <Content>
        <TopBanner />
        <ScheduleTable />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default CourseCatalog;
