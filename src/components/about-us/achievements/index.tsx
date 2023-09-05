"use client";
import React from "react";
import { Layout } from "antd";
import dynamic from "next/dynamic";
import { useGetProjectsDemo } from "@/apis/strapi-client/strapi";
import styles from "./index.module.scss";

const { Content } = Layout;
const Banner = dynamic(
  () => import("@/components/about-us/achievements/Banner")
);
const USACOSpotlight = dynamic(
  () => import("@/components/about-us/achievements/USACOSpotlight")
);
const TimeLine = dynamic(
  () => import("@/components/about-us/achievements/TimeLine")
);
const UsacoMedal = dynamic(
  () => import("@/components/common/usaco-medal")
);
const ArtOfProgrammingResults = dynamic(
  () => import("@/components/about-us/achievements/ArtOfProgrammingResults")
);

const Achievements: React.FC = () => {
  const { data: projectsDemo } = useGetProjectsDemo();

  return (
    <Layout className={styles.introductionContainer}>
      <Content>
        <Banner />
        <USACOSpotlight />

        <TimeLine />
        <UsacoMedal />
        <ArtOfProgrammingResults data={projectsDemo} />
      </Content>
    </Layout>
  );
};

export default Achievements;
