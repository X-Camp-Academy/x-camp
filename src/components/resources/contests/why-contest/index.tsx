import React from "react";
import styles from "./index.module.scss";
import { Space } from "antd";

const WhyContest = () => {
  const items = [
    {
      title: "Challenge and Competition:",
      description:
        "Programming contests provide an opportunity for students to challenge themselves intellectually and compete with other talented programmers.",
    },
    {
      title: "Skill Development:",
      description:
        "Participating in programming contests helps students enhance their problem-solving skills and develop a deeper understanding of algorithms, data structures, and programming languages.",
    },
    {
      title: "Learning and Growth:",
      description:
        "Expose students to a wide range of problem domains and real-world scenarios. By tackling diverse problems, students gain valuable experience and expand theeir knowledge base.",
    },
    {
      title: "Recognition and Networking:",
      description:
        "Successful performances in programming contests can bring recognition and prestige to students.",
    },
    {
      title: "Personal Satisfaction:",
      description:
        "Solving challenging problems and achieving success in programming contests can provide a sense of accomplishment and personal satisfaction.",
    },
  ];

  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.title}>{"Why Contest？"}</div>
          <div className={styles.description}>
            {
              "There are several reasons why students like to participate in competitive programming contests:"
            }
          </div>
        </div>
        <Space direction="vertical" className={styles.intro} size={20}>
          {items?.map((v, index) => (
            <div key={index}>
              <div className={styles.title}>{v?.title}</div>
              <div className={styles.description}>{v?.description}</div>
            </div>
          ))}
        </Space>
        <div className={styles.bottom}>
          <div className={styles.description}>
            {
              "Overall, competitive programming contests offer a platform for students to test their skills, learn from others, and push their limits, fostering their passion for programming and personal growth in the field."
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyContest;
