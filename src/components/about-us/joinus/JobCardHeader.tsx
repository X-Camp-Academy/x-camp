import { Space, Row, Col, Card, Image, Typography, Button, Divider, List, Collapse } from "antd";
import { ClockCircleOutlined, BranchesOutlined, DownCircleOutlined } from '@ant-design/icons';
import styles from './JobCardHeader.module.scss';
import { useState } from "react";
import ColorfulCard from "@/components/common/colorful-card";
import CollapseColorfulCard from "@/components/common/collapse-colorful-card";
const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const JobCardHeader: React.FC = () => {
    return (
        <>
            <Card className={styles.cardContainer}>
                <Row>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Title className={styles.JobCardTitle}>
                            Admissions Counselor
                        </Title>
                        <Button icon={<DownCircleOutlined />}></Button>
                    </div>
                </Row>
                <Row>
                    <Text className={styles.JobCardDescription}>
                        We are looking for a admissions counselor to jion our team.
                    </Text>
                </Row>
                <Row>
                    <Space direction="horizontal" align="center" className={styles.iconsButtonRow}>
                        <div className={styles.iconBox}>
                            <div>
                                <ClockCircleOutlined style={{ color: '#666666' }} />
                                <Text className={styles.iconText}>Full time</Text>
                            </div>
                            <div style={{ marginLeft: 20 }}>
                                <BranchesOutlined style={{ color: '#666666' }} />
                                <Text className={styles.iconText}>remote</Text>
                            </div>
                        </div>
                        <Button className={styles.applyBtn}>Apply Now</Button>

                    </Space>
                </Row>
            </Card>
        </>
    )
}

export default JobCardHeader;