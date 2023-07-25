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
const USACOWinners = dynamic(
  () => import("@/components/about-us/achievements/USACOWinners")
);
const ArtOfProgrammingResults = dynamic(
  () => import("@/components/about-us/achievements/ArtOfProgrammingResults")
);

const Achievements = () => {
  const { data: projectsDemo } = useGetProjectsDemo();

  return (
    <Layout className={styles.introductionContainer}>
      <Content>
        <Banner />
        <USACOWinners />
        <ArtOfProgrammingResults data={projectsDemo} />
      </Content>
    </Layout>
  );
};

export default Achievements;
