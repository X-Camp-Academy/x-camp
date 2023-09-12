"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Layout } from "antd";
import styles from "./index.module.scss";

const Banner = dynamic(() => import("./Banner"));
const Resume = dynamic(() => import("./Resume"));
const JoinUsFaculty = dynamic(() => import("../JoinUsFaculty"));
// const WhyWorkWithUs = dynamic(() => import("../WhyWorkWithUs"));

const { Content } = Layout;

const SubmitResume: React.FC = () => {
  return (
    <Layout className={styles.joinUsContainer}>
      <Content>
        <Banner />
        <Resume />
        <JoinUsFaculty />
        {/* <WhyWorkWithUs /> */}
      </Content>
    </Layout>
  );
};

export default SubmitResume;
