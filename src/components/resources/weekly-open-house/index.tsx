"use client";
import { ConfigProvider, Layout, Space } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
import Testimony from "@/components/home/Testimony";
import JoinWay from "./join-way";
import Introduction from "./introduction";
import AppointmentCard from "./appointment-card";
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
          <Space direction="vertical" size={100} className={styles.content}>
            <JoinWay />
            <Introduction />
            <AppointmentCard />
          </Space>
          <Testimony />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default WeeklyOpenHouse;
