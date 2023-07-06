"use client";
import { ConfigProvider, Layout } from "antd";
import dynamic from "next/dynamic";
import React from "react";
import styles from "./index.module.scss";
import { useGetTestimony } from "@/apis/strapi-client/strapi";
const { Content } = Layout;
const TopBanner = dynamic(() => import("./top-banner"));
const PartnersIntroduction = dynamic(() => import("./partners-introduction"));
const Testimony = dynamic(() => import("@/components/home/Testimony"));

const Partners = () => {
  //获取师生评价数据
  const { data: testimonyData } = useGetTestimony({ ready: true });

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
          <Testimony
            className={styles.comments}
            testimonyData={testimonyData}
          />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Partners;
