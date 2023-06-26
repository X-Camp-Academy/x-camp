"use client";
import React from "react";
import {
  Space,
  Row,
  Col,
  Card,
  Image,
  Typography,
  ConfigProvider,
  Layout,
} from "antd";
import styles from "./index.module.scss";
import TopBanner from "./TopBanner";
import JobSelection from "./JobSelection";
import dynamic from "next/dynamic";

const { Content } = Layout;

const JoinUs: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.joinUsContainer}>
        <Content>
            <TopBanner/>
            <JobSelection/>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default JoinUs;