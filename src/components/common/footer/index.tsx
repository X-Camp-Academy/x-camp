"use client";
import React from "react";
import { Layout } from "antd";
import dynamic from "next/dynamic";
import styles from "./index.module.scss";

const CopyRight = dynamic(() => import("./CopyRight"));
const SubscribeNewsletter = dynamic(() => import("./SubscribeNewsletter"));
const { Content } = Layout;

const Footer: React.FC = () => {
  return (
    <Layout className={styles.footerContainer}>
      <Content>
        <CopyRight />
        <SubscribeNewsletter />
      </Content>
    </Layout>
  );
};

export default Footer;
