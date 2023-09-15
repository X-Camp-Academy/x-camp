"use client";
import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Layout } from "antd";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import styles from "./index.module.scss";

const Banner = dynamic(() => import("./banner"));
const UpcomingEvents = dynamic(() => import("./upcoming-events"));
const RecentActivities = dynamic(() => import("./recent-activities"));
const Activities = dynamic(() => import("./activities"));
const Reviews = dynamic(() => import("@/components/common/reviews"));

const { Content } = Layout;

const EducationForum: React.FC = () => {
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname],
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
