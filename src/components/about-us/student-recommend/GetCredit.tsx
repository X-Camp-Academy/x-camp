import { Space, Row, Col, Image, Typography, Button, Card, List, Avatar } from "antd";
import styles from './GetCredit.module.scss';
import React from "react";
import ColorfulCard from "@/components/common/colorful-card";
import {

} from "@ant-design/icons";
import Link from "next/link";
const { Title, Paragraph } = Typography;

const GetCredit: React.FC = () => {

    const listData = [
        'Tell/ Share X-Camp your friends about the program.',
        'They select Word of Mouth in the “Where did you get our info?” section and leave your kid’s name in the “Referral by & Discount code”  box that appears.',
        'Our team will apply a $50 credit toward your next payment as well as your friend’s next payment.',
        'Oops, your friend forgot to use the code or mention you? Contact us and let us know within a month. We will then credit 4.   each of your accounts.'
    ]

    return (
        <>
            <div className={styles.GetCreditContainer}>
                <div className={`${styles.GetCredit} container`}>
                    <Row>
                        <Col
                            lg={12}
                            md={24}
                            xs={24}
                        >
                            <Space direction="vertical">
                                <Title className={styles.title}>How to Get Your Referral Credit</Title>
                                <List
                                    dataSource={listData}
                                    bordered={false}
                                    split={false}
                                    renderItem={(item, index) => {
                                        return (
                                            <List.Item className={styles.description}>
                                                <span>{index + 1}. </span>
                                                {item}
                                            </List.Item>
                                        );
                                    }}
                                />
                            </Space>
                        </Col>
                        <Col
                            lg={12}
                            md={24}
                            xs={24}
                            className={styles.imgCol}>
                            <Image
                                alt="img"
                                src="/image/about-us/student-recommend/circleTurtor.png"
                                preview={false}
                                className={styles.image} />
                        </Col>
                    </Row>

                </div>
            </div>
        </>
    )
}

export default GetCredit;