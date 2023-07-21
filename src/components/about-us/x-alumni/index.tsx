"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import { usePathname } from "next/navigation";

const Banner = dynamic(() => import("./Banner"));
const Map = dynamic(() => import("./Map"));
const Stories = dynamic(() => import("./Stories"));
const UpcomingEvents = dynamic(() => import("./UpcomingEvents"));
const Reviews = dynamic(() => import("@/components/common/reviews"));
const { Content } = Layout;

const XAlumni = () => {
  const pathname = usePathname();
  //获取师生评价数据
  const { data: reviewsData } = useGetReviews({
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
      <Layout className={styles.xalumniContainer}>
        <Content>
          <Banner />
          <Map />
          <Stories />
          <UpcomingEvents />
          <Reviews reviewsData={reviewsData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default XAlumni;
