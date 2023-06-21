import { Space, Row, Col, Card, Image, Typography, Carousel, Button, Rate} from "antd";
import { CarouselRef } from "antd/es/carousel";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import { getTwoToneColor, setTwoToneColor } from '@ant-design/icons';
import styles from './TimeLine.module.scss'
import React, { useRef } from "react";
const { Title, Paragraph, Text } = Typography;
import Link from "next/link";
import AchievementCard from "./AchievementCard";

const TimeLine: React.FC = () => {

    return (
        <>
            <div className={styles.timeLineContainer}>
                <Space direction="vertical" align="start">
                    <Title className={styles.title}>Timeline</Title>
                    <Text className={styles.intro}>Nevertheless, our teaching principle is that the USACO is just a side project for our students.
                        We hope that they can lay a solid foundation in computer algorithms and data structures and challenge themselves during the learning process.</Text>
                </Space>

                <div className={styles.listContainer}>
                    <ul className={styles.timeList}>
                        <li className={styles.timeListItem}>
                            <span>In the 20/21 season</span>
                            <p className={styles.timeListDetail}>
                                one student made it to the USACO US Camp (USACO Finalist).
                            </p>
                        </li>
                        <li className={styles.timeListItem}>
                            <span>In the 21/22 season</span>
                            <p className={styles.timeListDetail}>
                                four students from the USACO Grandmaster Class (Tier 5) simultaneously entered the USACO US Camp (USACO Finalist).
                            </p>
                        </li>
                        <li className={styles.timeListItem}>
                            <span>In the last 22/23 season</span>
                            <p className={styles.timeListDetail}>
                                six person-time entered the top ten in the United States, and seven student individuals have been selected for the USACO US Camp (USACO Finalist).
                            </p>
                        </li>
                        <li className={styles.timeListItem}>
                            <span>The latest data for USACO 23 Season</span>
                            <p className={styles.timeListDetail}>
                                Includes 46 students who advanced from the Bronze to the Gold Division, 16 students who advanced from the Silver to the Gold Division, and 10 students who advanced from the Gold to the Platinum Division.
                            </p>
                        </li>
                    </ul>
                </div>

                <Link className={styles.download} href='/'>
                    <Image src="/image/about-us/achievement/download-outlined.png"></Image>
                    <Text className={styles.downloadText}>Download our free USACO Intro Package</Text>
                </Link>


                <div className={styles.achievementCardContainer}>
                    <AchievementCard  style={{ borderBottomColor:'#FFD600' }} title="200+" text="USACO Silver and above"></AchievementCard>
                    <AchievementCard  style={{ borderBottomColor:'#FFD600' }} title="200+" text="USACO Silver and above"></AchievementCard>
                    <AchievementCard  style={{ borderBottomColor:'#FFD600' }} title="200+" text="USACO Silver and above"></AchievementCard>
                    <AchievementCard  style={{ borderBottomColor:'#FFD600' }} title="200+" text="USACO Silver and above"></AchievementCard>
                </div>
            </div>

        </>
    )
}

export default TimeLine;