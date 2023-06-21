import { Space, Row, Col, Card, Image, Typography } from "antd";
import styles from './AchievementCard.module.scss';
import React, { CSSProperties } from "react";
const { Title, Paragraph, Text } = Typography;

interface CarouselCardProps {
    style?: CSSProperties,
    title:string,
    text:string
}

const AchievementCard: React.FC<CarouselCardProps> = ({ style, title, text }) => {
    return (
        <>
            <div className={styles.cardContainer} style={style}>
                <Space direction="vertical" align="center">
                    <Title className={styles.title}>{title}</Title>
                    <Text className={styles.text}>{text}</Text>
                </Space>
            </div>
        </>
    )
}

export default AchievementCard;

//"/image/home/charlie-big.png"
