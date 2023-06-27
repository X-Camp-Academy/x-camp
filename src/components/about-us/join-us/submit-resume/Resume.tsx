import {
    Card,
} from "antd";
import styles from "./Resume.module.scss";
import React from "react";
import JobCardHeader from "../JobCardHeader";
import JobCardDetail from "../JobCardDetail";
import ResumeForm from "./ResumeForm";

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