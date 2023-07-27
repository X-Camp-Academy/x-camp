"use client";
import { Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";
import TopBanner from "./top-banner";
import Reviews from "@/components/common/reviews";
import Introduction from "./introduction";
import WhyContest from "./why-contest";
import MonthlyContest from "./monthly-contest";
import { useGetNewEvent, useGetReviews } from "@/apis/strapi-client/strapi";
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
  const { data: reviewsData } = useGetReviews({
    ready: true,
    pageName: [pathname],
  });
  const size = useSize(document.querySelector("body"));

  return (
    <Layout className={styles.main}>
      <Content>
        <TopBanner />
        <MonthlyContest
          data={formatContestsByQuarter(
            resourcesContest?.data!,
            Number(size?.width) >= 992 ? 6 : 1
          )}
        />
        <Introduction data={resourcesContest?.data} />
        <WhyContest />
        <Reviews reviewsData={reviewsData} />
      </Content>
    </Layout>
  );
};

export default Contests;
