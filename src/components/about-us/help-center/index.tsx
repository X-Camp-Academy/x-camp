"use client";
import React from "react";
import { Layout } from "antd";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import styles from "./index.module.scss";

const TopBanner = dynamic(() => import("./Banner"));
const Reviews = dynamic(() => import("@/components/common/reviews"));
const QAPart = dynamic(() => import("./QAPart"));
const ContactUs = dynamic(() => import("./ContactUs"));

const { Content } = Layout;

const HelpCenter: React.FC = () => {
  const pathname = usePathname();
  //获取师生评价数据
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname],
  });
  return (
    <Layout className={styles.QAContainer}>
      <Content>
        <TopBanner />
        <QAPart />
        <ContactUs />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default HelpCenter;
