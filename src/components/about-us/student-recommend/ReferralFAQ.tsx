import { Space, Row, Col, Image, Typography, Button, Card, List, Avatar } from "antd";
import styles from './GetCredit.module.scss';
import React from "react";
import ColorfulCard from "@/components/common/colorful-card";
import {

} from "@ant-design/icons";
import Link from "next/link";
const { Title, Paragraph } = Typography;

const ReferralFAQ: React.FC = () => {
    const listData = [
        
    ]
    return (
        <>
            <div className={styles.ReferralFAQContainer}>
                <div className={`${styles.ReferralFAQ} container`}>
                    <Space>
                        <Title>Referral FAQs</Title>
                        <List>

                        </List>
                    </Space>
                </div>
            </div>
        </>
    )
}

export default ReferralFAQ;