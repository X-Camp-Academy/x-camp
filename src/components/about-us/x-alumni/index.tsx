"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { useGetTestimony } from "@/apis/strapi-client/strapi";

const Banner = dynamic(() => import("./Banner"));
const Map = dynamic(() => import("./Map"));
const Stories = dynamic(() => import("./Stories"));
const UpcomingEvents = dynamic(() => import("./UpcomingEvents"));
const Testimony = dynamic(() => import("@/components/home/Testimony"));
const { Content } = Layout;

const XAlumni: React.FC = () => {
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
      <Layout className={styles.xalumniContainer}>
        <Content>
          <Banner />
          <Map />
          <Stories />
          <UpcomingEvents />
          <Testimony testimonyData={testimonyData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default XAlumni;
