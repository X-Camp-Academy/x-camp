"use client";
import React from "react";
import { Layout } from "antd";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import styles from "./index.module.scss";

const { Content } = Layout;
const Banner = dynamic(() => import("./Banner"));
const Introduction = dynamic(() => import("./Introduction"));
const Reviews = dynamic(() => import("@/components/common/reviews"));

const Partners: React.FC = () => {
  //获取师生评价数据
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname],
  });

  return (
    <Layout className={styles.content}>
      <Content>
        <Banner />
        <Introduction />
        <Reviews
          className={styles.comments}
          reviewsData={reviewsData}
        />
      </Content>
    </Layout>
  );
};

export default Partners;
