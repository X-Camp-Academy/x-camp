import { Space, Row, Col, Card, Image, Typography, Button, Collapse } from "antd";
import styles from './JobSelection.module.scss';
import { useState } from "react";
import JobCard from "./JobCard";
import ColorfulCard from "@/components/common/colorful-card";
const { Title, Paragraph, Text } = Typography;

const JobSelection: React.FC = () => {

    const [selectedButton, setSelectedButton] = useState<string>("");

    const handleButtonClick = (buttonText: string) => {
        setSelectedButton(buttonText);
    };

    return (
        <>
            <div className={styles.jobSelectionContainer}>
                <div className={`${styles.jobSelection} container`}>
                    <Space direction="horizontal" size="large" align="center">
                        <Button className={`${styles.choiceBtn} ${selectedButton === "Part Time" ? styles.selectedBtn : ""
                            }`} onClick={() => handleButtonClick("Part Time")}>Part Time
                        </Button>
                        <Button className={`${styles.choiceBtn} ${selectedButton === "Full Time" ? styles.selectedBtn : ""
                            }`} onClick={() => handleButtonClick("Full Time")}>Full Time
                        </Button>
                        <Button className={`${styles.choiceBtn} ${selectedButton === "X-Tutor" ? styles.selectedBtn : ""
                            }`} onClick={() => handleButtonClick("X-Tutor")}>X-Tutor
                        </Button>
                    </Space>

                    <div className={styles.jobCardContainer}>
                    <JobCard index={1}></JobCard>
                        {/* <Collapse className={styles.collapseCard}>
                            <Collapse.Panel collapsible="header" header={<JobCard index={1} />} key={1}>
                                <div>12334</div>
                            </Collapse.Panel>

                        </Collapse> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default JobSelection;