"use client";
import React from "react";
import { Space, Row, Col, Card, Image, Typography, Tag, Avatar } from "antd";
import styles from "./FacultyCoach.module.scss";

const { Title, Paragraph, Text } = Typography;

const FacultyCoach: React.FC = () => {
  const facultyData = [
    [
      {
        name: "Michael",
        avatar: "/image/about-us/introduction/faculty-coach.png",
        description:
          "Senior software engineer with more than 20 years of experience. After earning a Master Degree in computer science",
      },
      {
        name: "Michael",
        avatar: "/image/about-us/introduction/faculty-coach.png",
        description:
          "Senior software engineer with more than 20 years of experience. After earning a Master Degree in computer science",
      },
      {
        name: "Michael",
        avatar: "/image/about-us/introduction/faculty-coach.png",
        description:
          "Senior software engineer with more than 20 years of experience. After earning a Master Degree in computer science",
      },
    ],
    [
      {
        name: "Michael",
        avatar: "/image/about-us/introduction/faculty-coach.png",
        description:
          "Senior software engineer with more than 20 years of experience. After earning a Master Degree in computer science",
      },
      {
        name: "Michael",
        avatar: "/image/about-us/introduction/faculty-coach.png",
        description:
          "Senior software engineer with more than 20 years of experience. After earning a Master Degree in computer science",
      },
      {
        name: "Michael",
        avatar: "/image/about-us/introduction/faculty-coach.png",
        description:
          "Senior software engineer with more than 20 years of experience. After earning a Master Degree in computer science",
      },
    ],
    [
      {
        name: "Michael",
        avatar: "/image/about-us/introduction/faculty-coach.png",
        description:
          "Senior software engineer with more than 20 years of experience. After earning a Master Degree in computer science",
      },
      {
        name: "Michael",
        avatar: "/image/about-us/introduction/faculty-coach.png",
        description:
          "Senior software engineer with more than 20 years of experience. After earning a Master Degree in computer science",
      },
      {
        name: "Michael",
        avatar: "/image/about-us/introduction/faculty-coach.png",
        description:
          "Senior software engineer with more than 20 years of experience. After earning a Master Degree in computer science",
      },
    ],
  ];

  const computedStyle = (index: number) => {
    const defaultStyle = {
      borderRadius: 10,
      paddingBottom: 6,
      marginTop: 16,
    };

    const colors = ["#D46B14", "#FFAD11", "#FFD600"];
    const cardStyle = {
      ...defaultStyle,
      backgroundColor: colors[index % 3],
    };

    return cardStyle;
  };
  return (
    <div className={`${styles.facultyCoach} container`}>
      <Space direction="vertical" size={48}>
        <Space direction="vertical">
          <Title className={styles.title}>Faculty & Coach</Title>
          <Paragraph className={styles.titleParagraph}>
            教师团队是由各大厂及各名校毕业生组建
          </Paragraph>
        </Space>

        {facultyData.map((faculty, facultyIndex) => (
          <Row
            key={facultyIndex}
            justify="center"
            align="middle"
            gutter={48}
            className={styles.row}
          >
            {faculty.map((item, index) => (
              <Col
                key={index}
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
              >
                <div style={computedStyle(index)}>
                  <Card>
                    <Space direction="vertical">
                      <Avatar src={item.avatar} className={styles.avatar} />
                      <Text className={styles.name}>{item?.name}</Text>
                      <Paragraph
                        ellipsis={{ rows: 5 }}
                        className={styles.description}
                      >
                        {item?.description}
                      </Paragraph>
                    </Space>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Space>
    </div>
  );
};

export default FacultyCoach;
