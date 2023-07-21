"use client";
import { ConfigProvider, Layout } from "antd";
import dynamic from "next/dynamic";
import React from "react";
import styles from "./index.module.scss";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import { usePathname } from "next/navigation";
const { Content } = Layout;
const TopBanner = dynamic(() => import("./top-banner"));
const PartnersIntroduction = dynamic(() => import("./partners-introduction"));
const Reviews = dynamic(() => import("@/components/common/reviews"));

const Partners = () => {
  //获取师生评价数据
  const pathname = usePathname();
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
      <Layout className={styles.content}>
        <Content>
          <TopBanner />
          <PartnersIntroduction />
          <Reviews
            className={styles.comments}
            reviewsData={reviewsData}
          />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Partners;
