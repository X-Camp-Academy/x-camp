"use client";
import React from "react";
import { Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { FaqCategory } from "@/apis/strapi-client/define";
import { useGetFaq } from "@/apis/strapi-client/strapi";
import { useGetReviews } from "@/apis/strapi-client/strapi";
import { usePathname } from "next/navigation";
const { Content } = Layout;

const TopBanner = dynamic(() => import("./TopBanner"));
const ReferralProgramMain = dynamic(() => import("./ReferralProgramMain"));
const GetCredit = dynamic(() => import("./GetCredit"));
const Faq = dynamic(() => import("@/components/common/faqs"));
const Reviews = dynamic(() => import("@/components/common/reviews"));

const StudentRecommend: React.FC = () => {
  const pathname = usePathname();
  const { data: faq } = useGetFaq({
    ready: true,
    category: FaqCategory.ReferralQA,
    pageName: [pathname as string],
  });
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname as string],
  });
  return (
    <Layout className={styles.stuRecommendContainer}>
      <Content>
        <TopBanner />
        <ReferralProgramMain />
        <GetCredit />
        <Faq title={FaqCategory.ReferralQA} data={faq} />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default StudentRecommend;
