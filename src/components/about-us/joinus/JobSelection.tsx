import { Typography, Button } from "antd";
import styles from './JobSelection.module.scss';
import { useState } from "react";
import JobCard from "./JobCard";

const JobSelection: React.FC = () => {

    const [selectedButton, setSelectedButton] = useState<string>("Part Time");

    const handleButtonClick = (buttonText: string) => {
        setSelectedButton(buttonText);
    };

    return (
        <>
            <div className={styles.jobSelectionContainer}>
                <div className={`${styles.jobSelection} container`}>
                    <div className={styles.btnContainer}>
                        <Button className={`${styles.choiceBtn} ${selectedButton === "Part Time" ? styles.selectedBtn : ""
                            }`} onClick={() => handleButtonClick("Part Time")}>Part Time
                        </Button>
                        <Button className={`${styles.choiceBtn} ${selectedButton === "Full Time" ? styles.selectedBtn : ""
                            }`} onClick={() => handleButtonClick("Full Time")}>Full Time
                        </Button>
                        <Button className={`${styles.choiceBtn} ${selectedButton === "X-Tutor" ? styles.selectedBtn : ""
                            }`} onClick={() => handleButtonClick("X-Tutor")}>X-Tutor
                        </Button>
                    </div>

                    {selectedButton === 'Part Time' ? (
                        <div className={styles.jobCardContainer}>
                            <JobCard index={1}></JobCard>
                            <JobCard index={2}></JobCard>
                            <JobCard index={3}></JobCard>
                        </div>
                    ) : (<></>)}

                    {selectedButton === 'Full Time' ? (
                        <div className={styles.jobCardContainer}>
                            <JobCard index={2}></JobCard>
                            <JobCard index={1}></JobCard>
                            <JobCard index={3}></JobCard>
                        </div>
                    ) : (<></>)}

                    {selectedButton === 'X-Tutor' ? (
                        <div className={styles.jobCardContainer}>
                            <JobCard index={3}></JobCard>
                            <JobCard index={2}></JobCard>
                            <JobCard index={1}></JobCard>
                        </div>
                    ) : (<></>)}
                </div>
            </div>
        </>
    )
}

export default JobSelection;