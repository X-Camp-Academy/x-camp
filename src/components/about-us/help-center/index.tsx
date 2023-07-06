"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { useGetTestimony } from "@/apis/strapi-client/strapi";

const TopBanner = dynamic(() => import("./TopBanner"));
const Testimony = dynamic(() => import("@/components/home/Testimony"));
const QAPart = dynamic(() => import("./QAPart"));
const ContactUs = dynamic(() => import("./ContactUs"));

const { Content } = Layout;

const HelpCenter: React.FC = () => {
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
      <Layout className={styles.QAContainer}>
        <Content>
          <TopBanner />
          <QAPart />
          <ContactUs />
          <Testimony testimonyData={testimonyData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default HelpCenter;
