"use client";
import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Layout } from "antd";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import styles from "./index.module.scss";

const { Content } = Layout;
const Banner = dynamic(() => import("./banner"));
const Introduction = dynamic(() => import("./introduction"));
const Reviews = dynamic(() => import("@/components/common/reviews"));

const Partners: React.FC = () => {
  const pathname = usePathname();
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname as string],
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
