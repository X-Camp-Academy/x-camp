import { Space, Row, Col, Card, Image, Typography, Carousel, Button, Rate } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { LeftCircleTwoTone , RightCircleTwoTone  } from "@ant-design/icons";
import { getTwoToneColor, setTwoToneColor } from '@ant-design/icons';
import styles from './USACOMedal.module.scss'
import TimeLine from "./TimeLine";
import React, { useRef } from "react";
const { Title, Paragraph, Text } = Typography;


const USACOMedal: React.FC = () => {
    const carouselEL = useRef<CarouselRef>(null);
    const computedStyle = (index: number) => {
        const defaultStyle = {
            borderRadius: 10,
            paddingTop: 6,
        };
        const colors = ["#D46B14", "#FFAD11", "#FFD600"];

        return { ...defaultStyle, backgroundColor: colors[index % 3] };
    };

    setTwoToneColor('#D46B14');

    const comments = [
        {
            src: '/image/home/charlie-big.png',
            title: "Michael",
            comment:
                "2023 US Camp",
        },
        {
            src: '/image/home/charlie-big.png',
            title: "Michael",
            comment:
                "2023 US Camp",
        },
        {
            src: '/image/home/charlie-big.png',
            title: "Michael",
            comment:
                "2023 US Camp",
        },
    ];
    return (
        <>
            <div className={styles.USACOMedalContainer}>
                <div className={styles.container}>
                    <Space direction="vertical" align="start">
                        <Title className={styles.title}>USACO Medal</Title>
                        <Text className={styles.intro}>Over the past 5 years, more than 200 X-Camp students have qualified for the USACO Silver division and above;
                            including 30 in the Platinum division and 12 selected in the US Camp, out of which 7 were fresh from the 2023 season.</Text>
                    </Space>

                    <div className={styles.medalIntro}>
                        <Button
                            className={styles.prev}
                            onClick={() => {
                                carouselEL?.current?.prev();
                            }}
                            icon={<LeftCircleTwoTone />}
                        ></Button>

                        <Carousel ref={carouselEL} dots={false}>
                            <div>
                                <Row
                                    gutter={40}
                                    justify="center"
                                    align="middle"
                                    className={styles.row}
                                >
                                    {comments.map((item, index) => {
                                        return (
                                            <Col
                                                key={index}
                                                xs={24}
                                                sm={24}
                                                md={24}
                                                lg={8}
                                                className={styles.col}
                                            >
                                                <div style={computedStyle(index)}>
                                                    <Card
                                                        bodyStyle={{
                                                            borderWidth: 2,
                                                        }}
                                                        className={styles.colCard}
                                                    >
                                                        <Space direction="vertical">
                                                            <Image
                                                                alt="image"
                                                                src={item.src}
                                                                className={styles.image}
                                                            ></Image>
                                                            <Title className={styles.cardTitle}>
                                                                {item?.title}
                                                            </Title>
                                                            <Paragraph className={styles.cardParagraph}>
                                                                {item?.comment}
                                                            </Paragraph>
                                                        </Space>
                                                    </Card>
                                                </div>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </div>
                            <div>
                                <Row
                                    gutter={40}
                                    justify="center"
                                    align="middle"
                                    className={styles.row}
                                >
                                    {comments.map((item, index) => {
                                        return (
                                            <Col
                                                key={index}
                                                xs={24}
                                                sm={24}
                                                md={24}
                                                lg={8}
                                                className={styles.col}
                                            >
                                                <div style={computedStyle(index)}>
                                                    <Card
                                                        bodyStyle={{
                                                            borderWidth: 2,
                                                        }}
                                                        className={styles.colCard}
                                                    >
                                                        <Space direction="vertical">
                                                            <Image
                                                                alt="image"
                                                                src={item.src}
                                                                className={styles.image}
                                                            ></Image>
                                                            <Title className={styles.cardTitle}>
                                                                {item?.title}
                                                            </Title>
                                                            <Paragraph className={styles.cardParagraph}>
                                                                {item?.comment}
                                                            </Paragraph>
                                                        </Space>
                                                    </Card>
                                                </div>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </div>
                        </Carousel>

                        <Button
                            className={styles.next}
                            onClick={() => {
                                carouselEL?.current?.next();
                            }}
                            icon={<RightCircleTwoTone />}
                        ></Button>
                    </div>
                    
                    <TimeLine/>

                </div>
            </div>
        </>
    )
}

export default USACOMedal;
