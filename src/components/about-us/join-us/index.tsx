"use client";
import React from "react";
import { Layout } from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import WhyWorkWithUs from "./WhyWorkWithUs";

const Banner = dynamic(() => import("./Banner"));
const JobSelection = dynamic(() => import("./JobSelection"));
const JoinUsFaculty = dynamic(() => import("./JoinUsFaculty"));

const { Content } = Layout;

const JoinUs: React.FC = () => {
  return (
    <Layout className={styles.joinUsContainer}>
      <Content>
        <Banner />
        {/*<WhyWorkWithUs />*/}
        <JobSelection />
        <JoinUsFaculty />
      </Content>
    </Layout>
  );
};

export default JoinUs;
