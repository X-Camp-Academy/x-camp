"use client";
import React from "react";
import { Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { useGetFaculty } from "@/apis/strapi-client/strapi";


const Banner = dynamic(() => import("./Banner"));
const UsacoMedal = dynamic(() => import("./UsacoMedal"));
const Results = dynamic(() => import("./Results"));
const History = dynamic(() => import("./History"));
const XCampFounders = dynamic(() => import("@/components/common/xcamp-founders"));
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
