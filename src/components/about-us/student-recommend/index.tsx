"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { FaqCategory } from "@/apis/strapi-client/define";
import { useGetFaq } from "@/apis/strapi-client/strapi";
import { useGetTestimony } from "@/apis/strapi-client/strapi";
const { Content } = Layout;

const TopBanner = dynamic(() => import("./TopBanner"));
const ReferralProgramMain = dynamic(() => import("./ReferralProgramMain"));
const GetCredit = dynamic(() => import("./GetCredit"));
const Faq = dynamic(() => import("@/components/common/faqs"));
const Testimony = dynamic(() => import("@/components/home/Testimony"));

const StudentRecommend: React.FC = () => {
  const { data: faq } = useGetFaq({
    ready: true,
    category: FaqCategory.ReferralQA,
  });

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
          <Faq title={FaqCategory.ReferralQA} data={faq} />
          <Testimony testimonyData={testimonyData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default StudentRecommend;
