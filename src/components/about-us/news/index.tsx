"use client";
import React, { useEffect, useState } from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import { NewEventCategory } from "@/apis/strapi-client/define";

const TopBanner = dynamic(() => import("./TopBanner"));
const Partners = dynamic(() => import("@/components/home/Partners"));
const BecomePartner = dynamic(() => import("./BecomePartner"));
const NewsCard = dynamic(() => import("./news-card"));

const { Content } = Layout;

const NewsPage = () => {
  const [year, setYear] = useState("2023");
  const [current, setCurrent] = useState(1);
  const PAGE_SIZE = 15;
  const { data: newEventData, run: getNewEvent } = useGetNewEvent({
    current,
    pageSize: PAGE_SIZE,
  });

  useEffect(() => {
    if (year) {
      setCurrent(1);
    }
  }, [year]);

  useEffect(() => {
    if (current) {
      getNewEvent({
        populate: "*",
        sort: ["order:desc"],
        filters: {
          tags: {
            $eq: NewEventCategory.News,
          },
          datetime: {
            $startsWith: year,
          },
        },
        pagination: {
          page: current,
          pageSize: PAGE_SIZE,
        },
      });
    }
  }, [current]);

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
          <TopBanner year={year} setYear={setYear} />
          <NewsCard
            newEventData={newEventData}
            current={current}
            setCurrent={setCurrent}
          />
          <Partners />
          <BecomePartner />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default NewsPage;
