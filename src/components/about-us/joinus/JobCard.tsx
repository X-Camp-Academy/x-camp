import { Space, Row, Col, Card, Image, Typography, Button, Divider, List, Collapse } from "antd";
import { ClockCircleOutlined, BranchesOutlined, DownCircleOutlined } from '@ant-design/icons';
import styles from './JobCard.module.scss';
import { useState } from "react";
import ColorfulCard from "@/components/common/colorful-card";
import JobCardHeader from "./JobCardHeader";
import JobCardDetail from "./JobCardDetail";
import CollapseColorfulCard from "@/components/common/collapse-colorful-card";
const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const JobCard: React.FC<{ index: number }> = ({ index }) => {





    const [isCardListOpen, setIsCardListOpen] = useState(true);

    const toggleCardList = () => {
        setIsCardListOpen(!isCardListOpen);
    };
    return (
        <>
            <CollapseColorfulCard border="bottom" index={1} className={styles.ColorfulCardContainer}>
                <Panel header={
                    <JobCardHeader></JobCardHeader>
                } key={1}>
                    <JobCardDetail></JobCardDetail>
                </Panel>
            </CollapseColorfulCard>
            {/* <ColorfulCard border="bottom" index={index} className={styles.ColorfulCardContainer}>
                <Card className={styles.cardContainer}>
                    <Row>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Title className={styles.JobCardTitle}>
                                Admissions Counselor
                            </Title>
                            <Button icon={<DownCircleOutlined />} onClick={toggleCardList}></Button>
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
                    <div className={`${styles.cardListContainer} ${isCardListOpen ? 'open' : ''}`}>
                        <Divider style={{ borderColor: '#FFAD11' }} />
                        <div style={{ marginTop: '50px' }}>
                            <Title className={styles.cardListTitle}>Responsibilities</Title>
                            <List
                                dataSource={ResponsibilitiesListData}
                                split={false}
                                className={styles.cardList}
                                renderItem={(item) => (
                                    <List.Item className={styles.cardListItem}>
                                        <Space>
                                            <i className={styles.listItemCircle}></i>
                                            <Typography className={styles.cardText}>{item.text}</Typography>
                                        </Space>
                                    </List.Item>
                                )}
                            />

                            <Title className={styles.cardListTitle}>Qualifications</Title>
                            <List
                                dataSource={qualificationsListData}
                                split={false}
                                className={styles.cardList}
                                renderItem={(item) => (
                                    <List.Item className={styles.cardListItem}>
                                        <Space>
                                            <i className={styles.listItemCircle}></i>
                                            <Typography className={styles.cardText}>{item.text}</Typography>
                                        </Space>

                                    </List.Item>
                                )}
                            />

                            <Title className={styles.cardListTitle}>Other Information</Title>
                            <List
                                dataSource={otherInformationListData}
                                split={false}
                                className={styles.cardList}
                                renderItem={(item) => (
                                    <List.Item className={styles.cardListItem}>
                                        <Space>
                                            <i className={styles.listItemCircle}></i>
                                            <Typography className={styles.cardText}>{item.text}</Typography>
                                        </Space>

                                    </List.Item>
                                )}
                            />


                        </div>
                    </div>

                </Card>
            </ColorfulCard> */}




        </>
    )
}

export default JobCard;