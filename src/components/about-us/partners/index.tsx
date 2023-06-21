"use client";
import { ConfigProvider, Layout } from "antd";
import dynamic from "next/dynamic";
import React from "react";
import styles from "./index.module.scss";
const { Content } = Layout;
const TopBanner = dynamic(() => import("./top-banner"));
const PartnersIntroduction = dynamic(() => import("./partners-introduction"));
const Comments = dynamic(() => import("@/components/home/Comments"));

const Partners = () => {
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
          <Comments className={styles.comments} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Partners;
