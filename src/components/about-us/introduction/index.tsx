"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./Banner"));
const ISPI = dynamic(() => import("./ISPI"));
const UsacoMedal = dynamic(() => import("./UsacoMedal"));
const Results = dynamic(() => import("./Results"));
const XCampFounder = dynamic(() => import("@/components/common/xcamp-founder"));
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
          <Banner />
          <XCampFounder />
          <UsacoMedal />
          <ISPI />
          <Results />
          <FacultyCoach />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Introduction;
