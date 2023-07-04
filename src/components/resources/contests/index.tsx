"use client";
import { ConfigProvider, Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
import Testimony from "@/components/home/Testimony";
import Introduction from "./introduction";
import WhyContest from "./why-contest";
import MonthlyContest from "./monthly-contest";
const { Content } = Layout;

const Contests = () => {
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
          <Introduction />
          <WhyContest />
          <Testimony className={styles.comments} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Contests;
