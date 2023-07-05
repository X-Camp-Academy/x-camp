"use client";
import React, { useEffect, useState } from "react";
import { Space, Row, Col, Card, Image, Typography, Tag, Avatar } from "antd";
import { useGetIntroductionFacultyCoach } from "@/apis/strapi-client/strapi";
import styles from "./FacultyCoach.module.scss";
import { useLang } from "@/hoc/with-intl/define";
import { GetIntroductionFacultyCoachResponse } from "@/apis/strapi-client/define";

const { Title, Paragraph, Text } = Typography;


const FacultyCoach: React.FC = () => {
  const { lang } = useLang();

  const [facultyData, setFacultyData] = useState<GetIntroductionFacultyCoachResponse[][]>();
  const { data } = useGetIntroductionFacultyCoach();

  const formatFacultyData = (facultyData: GetIntroductionFacultyCoachResponse[]) => {
    const resultData: GetIntroductionFacultyCoachResponse[][] = [];
    let threeData: GetIntroductionFacultyCoachResponse[] = [];
    let lastIndex = 0;
    facultyData.forEach((item, index) => {
      if (index - lastIndex === 2) {
        lastIndex = index;
        threeData.push(item);
        resultData.push(threeData);
        threeData = [];
      } else {
        threeData.push(item);
      }
    });

    if (threeData.length > 0) {
      resultData.push(threeData);
    }

    return resultData;
  };

  useEffect(() => {
    if (data) {
      setFacultyData(formatFacultyData(data));
      console.log(facultyData);

    }
  }, [data])



  /* const facultyData = [
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
  ]; */

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

        {facultyData?.map((faculty, facultyIndex) => (
          <Row
            key={facultyIndex}
            justify="center"
            align="middle"
            gutter={48}
            className={styles.row}
          >

            {faculty.map((item:GetIntroductionFacultyCoachResponse, index) => (
              
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
                      <Avatar src={item.attributes.avatar.data.attributes.url} className={styles.avatar} />
                      <Text className={styles.name}>{item?.name}</Text>
                      <Paragraph
                        ellipsis={{ rows: 5 }}
                        className={styles.description}
                      >
                        {item.attributes.descriptionZh}
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
