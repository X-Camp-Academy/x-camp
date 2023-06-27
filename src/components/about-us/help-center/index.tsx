"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";

const TopBanner = dynamic(() => import("./TopBanner"));
const Comments = dynamic(() => import("@/components/home/Comments"));
const QAPart = dynamic(() => import("./QAPart"));
const ContactUs = dynamic(() => import("./ContactUs"));

const { Content } = Layout;

const HelpCenter: React.FC = () => {
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
          <Comments />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default HelpCenter;
