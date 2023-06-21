"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./Banner"));
const Map = dynamic(() => import("./Map"));
const Stories = dynamic(() => import("./Stories"));
const UpcomingEvents = dynamic(() => import("./UpcomingEvents"));
const { Content } = Layout;

const XAlumni: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.xalumniContainer}>
        <Content>
          <Banner />
          <Map />
          <Stories />
          <UpcomingEvents />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default XAlumni;
