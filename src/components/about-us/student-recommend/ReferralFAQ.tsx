import { Typography } from "antd";
import styles from './ReferralFAQ.module.scss';
import React from "react";
import QACard from "@/components/common/q&a";
const { Title } = Typography;

const ReferralFAQ: React.FC = () => {
    const QAData = [
        {
            question: "How can I refer friends.How can I refer friends",
            answer:
                "I don't know it. But you can ask for your parents.I don't know it. But you can ask for your parents.I don't know it. But you can ask for your parents.",
        },
        {
            question: "How can I refer friends",
            answer: "I don't know it. But you can ask for your parents.",
        },
        {
            question: "How can I refer friends",
            answer: "I don't know it. But you can ask for your parents.",
        },
        {
            question: "How can I refer friends",
            answer: "I don't know it. But you can ask for your parents.",
        },
    ];
    return (
        <>
            <div className={styles.ReferralFAQContainer}>
                <div className={`${styles.ReferralFAQ} container`}>

                    <Title className={styles.title}>Referral FAQs</Title>
                    <div className={styles.cardContent}>
                        {QAData.map((item, index) => (
                            <QACard
                                key={"referral" + index}
                                question={item.question}
                                answer={item.answer}
                                index={index}
                                className={styles.qaCard}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferralFAQ;

/**/