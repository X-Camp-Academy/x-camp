"use client";
import { ConfigProvider, Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
import Testimony from "@/components/home/Testimony";
import Introduction from "./introduction";
import WhyContest from "./why-contest";
import MonthlyContest from "./monthly-contest";
import {
  useGetResourcesContest,
  useGetTestimony,
} from "@/apis/strapi-client/strapi";
const { Content } = Layout;

const Contests = () => {
  const { data: resourcesContest } = useGetResourcesContest();
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
          <MonthlyContest />
          <Introduction data={resourcesContest} />
          <WhyContest />
          <Testimony
            className={styles.comments}
            testimonyData={testimonyData}
          />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Contests;
