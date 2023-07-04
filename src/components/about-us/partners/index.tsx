"use client";
import { ConfigProvider, Layout } from "antd";
import dynamic from "next/dynamic";
import React from "react";
import styles from "./index.module.scss";
const { Content } = Layout;
const TopBanner = dynamic(() => import("./top-banner"));
const PartnersIntroduction = dynamic(() => import("./partners-introduction"));
const Testimony = dynamic(() => import("@/components/home/Testimony"));

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
          <Testimony className={styles.comments} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Partners;
