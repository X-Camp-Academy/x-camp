"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import WhyWorkWithUs from "./WhyWorkWithUs";

const TopBanner = dynamic(() => import("./TopBanner"));
const JobSelection = dynamic(() => import("./JobSelection"));
const JoinUsFaculty = dynamic(() => import("./JoinUsFaculty"));

const { Content } = Layout;

const JoinUs: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.joinUsContainer}>
        <Content>
          <TopBanner />
          <JobSelection />
          <JoinUsFaculty />
          <WhyWorkWithUs />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default JoinUs;
