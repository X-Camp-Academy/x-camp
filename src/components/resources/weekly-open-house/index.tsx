"use client";
import { ConfigProvider, Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
const { Content } = Layout;

const WeeklyOpenHouse = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.main}>
        <Content>
          <TopBanner />
          <div>123</div>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default WeeklyOpenHouse;
