"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Layout } from "antd";
import Banner from "../banner";
import ScheduleTable from "./schedule-table";
import Reviews from "@/components/common/reviews";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import styles from "./index.module.scss";

const { Content } = Layout;

const CourseCatalog: React.FC = () => {
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname as string],
  });

  return (
    <Layout className={styles.courseCatalog}>
      <Content>
        <Banner />
        <ScheduleTable />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default CourseCatalog;
