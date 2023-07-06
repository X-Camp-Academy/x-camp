"use client";
import { ConfigProvider, Layout, Space } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
import Testimony from "@/components/home/Testimony";
import JoinWay from "./join-way";
import Introduction from "./introduction";
import AppointmentCard from "./appointment-card";
import { useGetTestimony } from "@/apis/strapi-client/strapi";
const { Content } = Layout;

const WeeklyOpenHouse = () => {
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
      <Layout className={styles.main}>
        <Content>
          <TopBanner />
          <Space direction="vertical" size={100} className={styles.content}>
            <JoinWay />
            <Introduction />
            <AppointmentCard />
          </Space>
          <Testimony testimonyData={testimonyData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default WeeklyOpenHouse;
