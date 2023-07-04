"use client";
import { ConfigProvider, Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
import UsacoIntro from "./introduction";
import RelateResources from "./relate-resources";
import Testimony from "@/components/home/Testimony";
const { Content } = Layout;

const UsacoLiveSolutions = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.usacoLiveSolutions}>
        <Content>
          <TopBanner />
          <UsacoIntro />
          <RelateResources />
          <Testimony className={styles.comments} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default UsacoLiveSolutions;
