"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { useGetTestimony } from "@/apis/strapi-client/strapi";
const { Content } = Layout;

const TopBanner = dynamic(() => import("./TopBanner"));
const ReferralProgramMain = dynamic(() => import("./ReferralProgramMain"));
const GetCredit = dynamic(() => import("./GetCredit"));
const ReferralFAQ = dynamic(() => import("./ReferralFAQ"));
const Testimony = dynamic(() => import("@/components/home/Testimony"));

const StudentRecommend: React.FC = () => {
  //获取师生评价数据
  const { data: testimonyData } = useGetTestimony();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.stuRecommendContainer}>
        <Content>
          <TopBanner />
          <ReferralProgramMain />
          <GetCredit />
          <ReferralFAQ />
          <Testimony testimonyData={testimonyData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default StudentRecommend;
