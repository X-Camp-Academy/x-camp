import { Space, Row, Col, Image, Typography, Button, Card } from "antd";
import styles from './ReferralProgramMain.module.scss';
import React from "react";
import ColorfulCard from "@/components/common/colorful-card";
import {

} from "@ant-design/icons";
import Link from "next/link";
const { Title, Paragraph } = Typography;


const ReferralProgramMain: React.FC = () => {
    return (
        <>
            <div className={styles.referralProgramMainContainer}>
                <div className={`${styles.referralProgramMain} container`}>
                    <ColorfulCard border="bottom" index={1}>
                        <Card className={styles.giveAndGetCard}>
                            <Title className={styles.title}>Give $50 and Get $50 in Tuition</Title>
                            <Paragraph className={styles.description}>Coding is much more fun with friends. If students invite their friends, they can work on projects together, help each other out and can also motivate each other with some friendly rivalry. Who knows, they might even start a company together.</Paragraph>
                            <Title className={styles.subTitle}>Get $50 for you and $50 for your friend <br/>when a friend signs up.</Title>
                            <Space>
                                    <Link href="/">
                                        <Image
                                            alt=""
                                            preview={false}
                                            src="/image/about-us/student-recommend/Youtube-fill.png"
                                            width={28}
                                            height={28}
                                        />
                                    </Link>
                                    <Link href="/">
                                        <Image
                                            alt=""
                                            preview={false}
                                            src="/image/about-us/student-recommend/facebook-fill.png"
                                            width={28}
                                            height={28}
                                        />
                                    </Link>
                                    <Link href="/">
                                        <Image
                                            alt=""
                                            preview={false}
                                            src="/image/about-us/student-recommend/linkedin-fill.png"
                                            width={28}
                                            height={28}
                                        />
                                    </Link>
                                    <Link href="/">
                                        <Image
                                            alt=""
                                            preview={false}
                                            src="/image/about-us/student-recommend/twitter.png"
                                            width={28}
                                            height={28}
                                        />
                                    </Link>
                                    <Link href="/">
                                        <Image
                                            alt=""
                                            preview={false}
                                            src="/image/about-us/student-recommend/wechat-fill.png"
                                            width={28}
                                            height={28}
                                        />
                                    </Link>
                                    <Link href="/">
                                        <Image
                                            alt=""
                                            preview={false}
                                            src="/image/about-us/student-recommend/xiaoredbook.png"
                                            width={28}
                                            height={28}
                                        />
                                    </Link>
                            </Space>
                        </Card>
                    </ColorfulCard>
                </div>
            </div>
        </>
    )
}

export default ReferralProgramMain;