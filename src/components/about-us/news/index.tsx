"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";

const TopBanner = dynamic(() => import("./TopBanner"));
const Partners = dynamic(() => import("@/components/home/Partners"));
const BecomePartner = dynamic(() => import("./BecomePartner"));
const NewsCard = dynamic(() => import("./news-card"));

const { Content } = Layout;

const NewsPage: React.FC = () => {
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
          <NewsCard />
          <Partners />
          <BecomePartner />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default NewsPage;
