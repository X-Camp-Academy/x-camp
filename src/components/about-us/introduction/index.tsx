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
import dynamic from "next/dynamic";

const TopBanner = dynamic(() => import("./TopBanner"));
const { Content } = Layout;

const Introduction: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.introductionContainer}>
        <Content>
          <TopBanner />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Introduction;
