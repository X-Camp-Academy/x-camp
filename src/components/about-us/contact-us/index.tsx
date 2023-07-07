"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { useGetTestimony } from "@/apis/strapi-client/strapi";
import { usePathname } from "next/navigation";

const ContactCard = dynamic(() => import("./ContactCard"));
const TopBanner = dynamic(() => import("./TopBanner"));
const Testimony = dynamic(() => import("@/components/home/Testimony"));
const QuestionForm = dynamic(() => import("./QuestionForm"));
const AddressMap = dynamic(() => import("./AddressMap"));
const { Content } = Layout;

const ContactUsContent = () => {
  const pathname = usePathname();
  // 请求当前页面的评论
  const { data: testimonyData } = useGetTestimony({
    ready: true,
    pageName: [pathname],
  });
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
          <Testimony testimonyData={testimonyData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default ContactUsContent;
