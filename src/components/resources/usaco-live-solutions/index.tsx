"use client";
import { ConfigProvider, Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
import UsacoIntro from "./introduction";
import RelateResources from "./relate-resources";
import Testimony from "@/components/home/Testimony";
import { useGetResourcesLiveSolution } from "@/apis/strapi-client/strapi";
const { Content } = Layout;

const UsacoLiveSolutions = () => {
  const { data: resourcesLiveSolution } = useGetResourcesLiveSolution();

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
          <UsacoIntro data={resourcesLiveSolution} />
          <RelateResources />
          <Testimony className={styles.comments} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default UsacoLiveSolutions;
