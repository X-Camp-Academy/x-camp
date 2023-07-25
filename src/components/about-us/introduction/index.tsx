"use client";
import React from "react";
import { Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { useGetFaculty } from "@/apis/strapi-client/strapi";

const Banner = dynamic(() => import("./Banner"));
const ISPI = dynamic(() => import("./ISPI"));
const UsacoMedal = dynamic(() => import("./UsacoMedal"));
const Results = dynamic(() => import("./Results"));
const XCampFounders = dynamic(() => import("@/components/common/xcamp-founders"));
const FacultyCoach = dynamic(() => import("@/components/common/faculty-coach"));
const { Content } = Layout;

const Introduction: React.FC = () => {
  // TODO History wait Charlie提供
  // TODO ISPI组件移动端下还可以优化一下
  const { data: facultyData } = useGetFaculty({
    pageName: ["/about-us/introduction/"],
  });

  return (
    <Layout className={styles.introductionContainer}>
      <Content>
        <Banner />
        <XCampFounders />
        <UsacoMedal />
        <ISPI />

        {/* ! TODO */}
        {/* <Results /> */}

        <FacultyCoach data={facultyData} />
      </Content>
    </Layout>
  );
};

export default Introduction;
