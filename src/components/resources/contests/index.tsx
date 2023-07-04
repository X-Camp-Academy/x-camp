"use client";
import { ConfigProvider, Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
import Comments from "@/components/home/Comments";
import Introduction from "./introduction";
import WhyContest from "./why-contest";
import MonthlyContest from "./monthly-contest";
import { useGetResourcesContest } from "@/apis/strapi-client/strapi";
const { Content } = Layout;

const Contests = () => {
  const { data: resourcesContest } = useGetResourcesContest();

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
          <Comments className={styles.comments} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Contests;
