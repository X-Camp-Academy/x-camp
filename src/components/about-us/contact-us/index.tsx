"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";

const ContactCard = dynamic(() => import("./ContactCard"));
const TopBanner = dynamic(() => import("./TopBanner"));
const Testimony = dynamic(() => import("@/components/home/Testimony"));
const QuestionForm = dynamic(() => import("./QuestionForm"));
const AddressMap = dynamic(() => import("./AddressMap"));
const { Content } = Layout;

const ContactUsContent: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.QAContainer}>
        <Content>
          <TopBanner />
          <ContactCard />
          <QuestionForm />
          <AddressMap />
          <Testimony />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default ContactUsContent;
