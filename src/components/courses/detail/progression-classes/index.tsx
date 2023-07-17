import React, { useContext } from "react";
import styles from "./index.module.scss";
import ClassCard from "@/components/common/class-card";
import { Space, Typography } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import CourseClassesContext from "../CourseClasses";
const { Title } = Typography;

const ProgressionClasses = () => {
  const { format: t } = useLang();
  const courseData = useContext(CourseClassesContext);
  // const { data } = courseData?.attributes?.recommendedClasses ?? {};

  console.log(courseData?.attributes?.recommendedClasses);

  const items = [
    {
      id: 1,
      title: "CS100P: Python Intro with Creative Projects",
      desc: "6th+ Graders. No prior coding expected…",
      duration: "10 weeks",
    },
    {
      id: 2,
      title: "CS100P: Python Intro with Creative Projects",
      desc: "6th+ Graders. No prior coding expected…",
      duration: "10 weeks",
    },
    {
      id: 3,
      title: "CS100P: Python Intro with Creative Projects",
      desc: "6th+ Graders. No prior coding expected…",
      duration: "10 weeks",
    },
    {
      id: 4,
      title: "CS100P: Python Intro with Creative Projects",
      desc: "6th+ Graders. No prior coding expected…",
      duration: "10 weeks",
    },
    {
      id: 5,
      title: "CS100P: Python Intro with Creative Projects",
      desc: "6th+ Graders. No prior coding expected…",
      duration: "10 weeks",
    },
    {
      id: 6,
      title: "CS100P: Python Intro with Creative Projects",
      desc: "6th+ Graders. No prior coding expected…",
      duration: "10 weeks",
    },
  ];

  return (
    <div className={styles.content}>
      <div className="container">
        <Title className={styles.title}>{t("ProgressionClasses")}</Title>
        <Space size={27} wrap className={styles.cards}>
          {items?.map((v, index) => {
            return (
              <ClassCard
                key={v?.id}
                border={"bottom"}
                index={index}
                animate={false}
                title={v?.title}
                list={[v?.desc]}
                time="10 weeks"
                href={`/courses/detail?/${v?.id}`}
              />
            );
          })}
        </Space>
      </div>
    </div>
  );
};

export default ProgressionClasses;
