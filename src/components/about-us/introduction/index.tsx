"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Layout } from "antd";
import { useGetFaculty } from "@/apis/strapi-client/strapi";
import styles from "./index.module.scss";

const Banner = dynamic(() => import("./banner"));
const History = dynamic(() => import("./history"));
const XCampFounders = dynamic(() => import("@/components/common/xcamp-founders"));
const UsacoMedal = dynamic(() => import("@/components/common/usaco-medal"));
const FacultyCoach = dynamic(() => import("@/components/common/faculty-coach"));
const Partners = dynamic(() => import("@/components/common/partners"));
const { Content } = Layout;

const Introduction: React.FC = () => {
  const { data: facultyData } = useGetFaculty({});

  return (
    <Layout className={styles.introductionContainer}>
      <Content>
        <Banner />
        <History />
        <XCampFounders />
        <UsacoMedal />

        {/* ! TODO */}
        {/* <Results /> */}

        <FacultyCoach data={facultyData} />

        <Partners />
      </Content>
    </Layout>
  );
};

export default Introduction;
