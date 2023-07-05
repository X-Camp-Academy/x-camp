"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./index.module.scss";
import { Content } from "antd/es/layout/layout";
import dynamic from "next/dynamic";
import { useGetProjectsDemo } from "@/apis/strapi-client/strapi";
const TopBanner = dynamic(
  () => import("@/components/about-us/achievements/TopBanner")
);
const USACOWinners = dynamic(
  () => import("@/components/about-us/achievements/USACOWinners")
);
const ArtOfProgrammingResults = dynamic(
  () => import("@/components/about-us/achievements/ArtOfProgrammingResults")
);

const Achievements = () => {
  const { data: projectsDemo } = useGetProjectsDemo();
  console.log(projectsDemo);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFAD11",
        },
      }}
    >
      <Layout className={styles.introductionContainer}>
        <Content>
          <TopBanner />
          <USACOWinners />
          <ArtOfProgrammingResults data={projectsDemo} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Achievements;
