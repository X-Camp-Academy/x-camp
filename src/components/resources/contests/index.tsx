"use client";
import { ConfigProvider, Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
import Testimony from "@/components/home/Testimony";
import Introduction from "./introduction";
import WhyContest from "./why-contest";
import MonthlyContest from "./monthly-contest";
import { useGetNewEvent, useGetTestimony } from "@/apis/strapi-client/strapi";
import { usePathname } from "next/navigation";
import { formatContestsByQuarter } from "./define";
import { useSize } from "ahooks";
import { NewEventCategory } from "@/apis/strapi-client/define";
const { Content } = Layout;

const Contests = () => {
  const { data: resourcesContest } = useGetNewEvent({
    tag: NewEventCategory.EventContest,
    current: 1,
    pageSize: 9999,
  });
  const pathname = usePathname();
  // 请求courseId为isCamp课程, pageName 为"/courses/catalog/"的评论
  const { data: testimonyData } = useGetTestimony({
    ready: true,
    pageName: [pathname],
  });
  const size = useSize(document.querySelector("body"));

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.main}>
        <Content>
          <TopBanner />
          <MonthlyContest
            data={formatContestsByQuarter(
              resourcesContest?.data!,
              Number(size?.width) >= 992 ? 3 : 1
            )}
          />
          <Introduction data={resourcesContest?.data} />
          <WhyContest />
          <Testimony testimonyData={testimonyData} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Contests;
