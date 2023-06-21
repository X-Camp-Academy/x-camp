"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";

const TopBanner = dynamic(() => import("./TopBanner"));
const BottomBanner = dynamic(() => import("./BottomBanner"));
const UsacoMedal = dynamic(() => import("./UsacoMedal"));
const Results = dynamic(() => import("./Results"));
const Founder = dynamic(() => import("./Founder"));
const FacultyCoach = dynamic(() => import("./FacultyCoach"));
const { Content } = Layout;

const Introduction: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.introductionContainer}>
        <Content>
          <TopBanner />
          <BottomBanner />
          <UsacoMedal />
          <Results />
          <Founder />
          <FacultyCoach />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Introduction;
