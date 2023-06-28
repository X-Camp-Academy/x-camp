"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import { Content } from "antd/es/layout/layout";

import dynamic from "next/dynamic";
const TopBanner = dynamic(() => import("./TopBanner"));
const USACOWinners = dynamic(() => import("./USACOWinners"));

const CalendarPage: React.FC = () => {
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
          <USACOWinners />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default CalendarPage;
