"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import { usePathname } from "next/navigation";

const TopBanner = dynamic(() => import("./TopBanner"));
const Reviews = dynamic(() => import("@/components/common/reviews"));
const QAPart = dynamic(() => import("./QAPart"));
const ContactUs = dynamic(() => import("./ContactUs"));

const { Content } = Layout;

const HelpCenter = () => {
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
      <Layout className={styles.QAContainer}>
        <Content>
          <TopBanner />
          <QAPart />
          <ContactUs />
          <Reviews reviewsData={reviewsData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default HelpCenter;
