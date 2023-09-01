"use client";
import React from "react";
import { Layout } from "antd";
import styles from "./index.module.scss";
import Reviews from "@/components/common/reviews";
import Banner from "./banner";
import UpcomingEvents from "./upcoming-events";
import RecentActivities from "./recent-activities";
import Activities from "./activities";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import { usePathname } from "next/navigation";
const { Content } = Layout;

const EducationForum: React.FC = () => {
  const pathname = usePathname();
  //获取师生评价数据
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname as string],
  });

  return (
    <Layout className={styles.main}>
      <Content>
        <Banner />
        <UpcomingEvents />
        <RecentActivities />
        <Activities />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default EducationForum;
