"use client";
import { ConfigProvider, Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
import UsacoIntro from "./introduction";
import RelateResources from "./relate-resources";
import Testimony from "@/components/home/Testimony";
import {
  useGetResourcesLiveSolution,
  useGetTestimony,
} from "@/apis/strapi-client/strapi";
const { Content } = Layout;

const UsacoLiveSolutions = () => {
  //获取师生评价数据
  const { data: testimonyData } = useGetTestimony();
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
          <Testimony
            className={styles.comments}
            testimonyData={testimonyData}
          />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default UsacoLiveSolutions;
