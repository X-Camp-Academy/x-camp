"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Layout } from "antd";
import Reviews from "@/components/common/reviews";
import Activities from "./Activities";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import { usePathname } from "next/navigation";
import styles from "./index.module.scss";


const Banner = dynamic(() => import("./Banner"));
const UpcomingEvents = dynamic(() => import("./UpcomingEvents"));
const RecentActivities = dynamic(() => import("./RecentActivities"));


const { Content } = Layout;

const EducationForum: React.FC = () => {
  const pathname = usePathname();
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
