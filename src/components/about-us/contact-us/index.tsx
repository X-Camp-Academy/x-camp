"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";

const ContactCard = dynamic(() => import("./ContactCard"));
const TopBanner = dynamic(() => import("./TopBanner"));
const Comments = dynamic(() => import("@/components/home/Comments"));
const QuestionForm = dynamic(() => import("./QuestionForm"));
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
          <Comments />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default ContactUsContent;
