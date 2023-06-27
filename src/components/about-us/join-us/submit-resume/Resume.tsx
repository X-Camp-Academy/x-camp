import {
    Space,
    Row,
    Card,
    Typography,

    Button,
} from "antd";
import {
    ClockCircleOutlined,
    BranchesOutlined,
    DownCircleOutlined,
} from "@ant-design/icons";
import styles from "./Resume.module.scss";
import React, { useState } from "react";
import JobCardHeader from "../JobCardHeader";
import JobCardDetail from "../JobCardDetail";
import ResumeForm from "./ResumeForm";
import Link from "next/link";
const { Title, Text } = Typography;

const Resume: React.FC = () => {
    return (
        <>
            <div className={styles.resumeContainer}>
                <div className={`${styles.resume} container`}>
                    <Card className={styles.cardContainer}>
                        <JobCardHeader showExplandBtn={false} />
                        <JobCardDetail />
                        <ResumeForm />
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Resume;