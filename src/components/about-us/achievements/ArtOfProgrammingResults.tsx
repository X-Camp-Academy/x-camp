import { Space, Row, Col, Card, Image, Typography, List } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import { getTwoToneColor, setTwoToneColor } from '@ant-design/icons';
import styles from './ArtOfProgrammingResults.module.scss'
import React, { useRef } from "react";
const { Title, Paragraph, Text } = Typography;
import Link from "next/link";

const ArtOfProgrammingResults: React.FC = () => {
    const data = [
        { title: 'Leo Lin, Andrew Chen and George Sun' },
        { title: 'Leo Lin, Andrew Chen and George Sun' },
        { title: 'Leo Lin, Andrew Chen and George Sun' },
    ]
    return (
        <>
            <div className={styles.ArtOfProgrammingResultsContainer}>
                <div className={styles.container}>
                    <Title className={styles.firstTitle}>Art of Programming Results</Title>
                    <Text className={styles.indro}>X-Camp has created an Art of Python Programming contest every quarter to inspire students that are new to Python.
                        It is a great opportunity for students to showcase what they have learned from classes by creating fun projects, and get rewarded!
                    </Text>


                    <ul className={styles.timeList}>
                        <li className={styles.timeListItem}>
                            <span>Prerequisites of contestants: </span>
                            <p className={styles.timeListDetail}>
                                students of CS100 who have no coding experience before.
                            </p>
                        </li>
                        <li className={styles.timeListItem}>
                            <span>Rules:</span>
                            <p className={styles.timeListDetail}>
                                After 10-weeks learning Python, participants can create their own projects with Python by themselves or with classmates.
                                All parents vote anonymously to select the Top 3 winning projects on demo day.
                            </p>
                        </li>
                    </ul>

                    <div className={styles.projectDemo}>
                        <Title className={styles.title}>Projects Demo</Title>

                        <Title className={styles.subTitle}>2022 Winter Quarter</Title>
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 1,
                                md: 1,
                                lg: 3,
                                xl: 3,
                                xxl: 3,
                            }}
                            dataSource={data}
                            className={styles.videoList}
                            renderItem={(item) => (
                                <List.Item>
                                    <Card className={styles.videoItem}>
                                        <video src="/"></video>
                                        <div className={styles.videoTitle}>{item.title}</div>
                                    </Card>
                                </List.Item>
                            )}
                        />

                        <Title className={styles.subTitle}>2022 Spring Quarter</Title>
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 1,
                                md: 1,
                                lg: 3,
                                xl: 3,
                                xxl: 3,
                            }}
                            dataSource={data}
                            className={styles.videoList}
                            renderItem={(item) => (
                                <List.Item>
                                    <Card className={styles.videoItem}>
                                        <video src="/"></video>
                                        <div className={styles.videoTitle}>{item.title}</div>
                                    </Card>
                                </List.Item>
                            )}
                        />

                        

                        <Title className={styles.subTitle}>2022 Summer Quarter</Title>
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 1,
                                md: 1,
                                lg: 3,
                                xl: 3,
                                xxl: 3,
                            }}
                            dataSource={data}
                            className={styles.videoList}
                            renderItem={(item) => (
                                <List.Item>
                                    <Card className={styles.videoItem}>
                                        <video src="/"></video>
                                        <div className={styles.videoTitle}>{item.title}</div>
                                    </Card>
                                </List.Item>
                            )}
                        />

                    </div>



                </div>
            </div>
        </>
    )
}

export default ArtOfProgrammingResults;