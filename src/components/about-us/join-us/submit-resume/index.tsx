"use client";
import React from "react";
import {
    ConfigProvider,
    Layout,
} from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";

const TopBanner = dynamic(() => import("../TopBanner"));
const Resume = dynamic(() => import("./Resume"))
const JoinUsFaculty = dynamic(() => import("../JoinUsFaculty"));
const WhyWorkWithUs = dynamic(() => import("../WhyWorkWithUs"));

const { Content } = Layout;

const SubmitResume: React.FC = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#FFAD11",
                },
            }}
        >
            <Layout className={styles.joinUsContainer}>
                <Content>
                    <TopBanner />
                    <Resume/>
                    <JoinUsFaculty />
                    {/* <WhyWorkWithUs /> */}
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

export default SubmitResume;