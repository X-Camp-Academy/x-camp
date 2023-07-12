"use client";
import React from "react";
import styles from "./index.module.scss";
import { ConfigProvider, Layout } from "antd";
import TopBanner from "./top-banner";
import Introduction from "./introduction";
import Levels from "./5-levels";
import Faqs from "@/components/common/faqs";
import { usePathname } from "next/navigation";
import { FaqCategory } from "@/apis/strapi-client/define";
import { useGetCourses, useGetFaq } from "@/apis/strapi-client/strapi";
import { useLang } from "@/hoc/with-intl/define";
const { Content } = Layout;

const ProbsChallenge = () => {
  const pathname = usePathname();
  const { format: t } = useLang();
  // 请求类别为CoursesQA, courseId为isCamp课程, pageName 为"/courses/camps/"的Faq
  const params = {
    isCamp: {
      $eq: true,
    },
  };
  const { data: courses } = useGetCourses(params);

  const { data: faq } = useGetFaq({
    ready: Boolean(courses),
    category: FaqCategory.CoursesQA,
    courseId: courses?.map((v) => String(v?.id)),
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
      <Layout className={styles.page}>
        <Content>
          <TopBanner />
          <Introduction />
          <Levels />
          <Faqs title={t("CampsFAQs")} data={faq} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default ProbsChallenge;
