import {  Collapse } from "antd";
import styles from './JobCard.module.scss';
import JobCardHeader from "./JobCardHeader";
import JobCardDetail from "./JobCardDetail";
import CollapseColorfulCard from "@/components/common/collapse-colorful-card";
const { Panel } = Collapse;

const JobCard: React.FC<{ index: number }> = ({ index }) => {

    return (
        <>
            <CollapseColorfulCard border="bottom" index={index} className={styles.ColorfulCardContainer}>
                <Panel header={
                    <JobCardHeader></JobCardHeader>
                } key={index} showArrow={false}>
                    <JobCardDetail></JobCardDetail>
                </Panel>
            </CollapseColorfulCard>
        </>
    )
}

export default JobCard;