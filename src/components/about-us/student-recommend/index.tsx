"use client";
import React from "react";
import {
    ConfigProvider,
    Layout,
} from "antd";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
const { Content } = Layout;

const TopBanner = dynamic(() => import("./TopBanner"));
const ReferralProgramMain = dynamic(() => import("./ReferralProgramMain"))
const GetCredit = dynamic(() => import("./GetCredit"))
const ReferralFAQ = dynamic(() => import("./ReferralFAQ"))
const Comments = dynamic(() => import("@/components/home/Comments"))


const StudentRecommend: React.FC = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#FFAD11",
                },
            }}
        >
            <Layout className={styles.stuRecommendContainer}>
                <Content>
                    <TopBanner />
                    <ReferralProgramMain />
                    <GetCredit />
                    <ReferralFAQ />
                    <Comments />
                </Content>
            </Layout>
        </ConfigProvider>
    )
}

export default StudentRecommend;